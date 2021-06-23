<template>
  <form
    action="#0"
    @submit.prevent="handleSubmit"
  >
    <div class="form-group">
      <label :for="labelForAuthor">Author</label>
      <input
        :id="labelForAuthor"
        ref="inputName"
        v-model="name"
        class="form-control"
        :class="{ 'is-invalid': v$.name.$error }"
        type="text"
        placeholder="author"
      >
    </div>
    <div class="form-group">
      <label :for="labelForMessage">Message</label>
      <TextareaGrow
        :id="labelForMessage"
        v-model="message"
        class="form-control"
        :class="{ 'is-invalid': v$.message.$error }"
        :max-height="350"
        placeholder="message"
      />
    </div>
    <button
      class="btn btn--primary"
      :disabled="isDisabled"
    >
      Send
    </button>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { addComment } from '../../api/posts.js';
import { uid } from '../../utils';
import TextareaGrow from '../TextareaGrow.vue'

export default {
  name: 'CommentMessage',
  components: {
    TextareaGrow
  },
  inject: ['handleCommentsUpdate'],
  props: {
    parentId: {
      type: [String, null],
      default: null
    }
  },
  emits: ['send'],
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: '',
      message: ''
    };
  },
  computed: {
    isDisabled() {
      return this.v$.$invalid;
    },
    uid() {
      return uid();
    },
    labelForAuthor() {
      return `author-${this.uid}`
    },
    labelForMessage() {
      return `message-${this.uid}`
    }
  },
  validations () {
    return {
      name: { required },
      message: { required }
    }
  },
  mounted() {
    if (this.parentId) {
      this.$refs.inputName.focus();
    }
  },
  methods: {
    handleSubmit() {
      this.v$.$touch()
      if (this.v$.$invalid) return;

      const commentData = {
        slug: this.$route.params.slug,
        comment: {
          name: this.name,
          text: this.message,
          date: Date.now(),
          id: uid(),
          children: []
        }
      }

      if (this.parentId) {
        commentData.parentId = this.parentId;
      }

      const comments = addComment(commentData);
      this.handleCommentsUpdate(comments);

      this.name = '';
      this.message = '';
      this.v$.$reset();
      this.$emit('send');
    }
  }
}
</script>
