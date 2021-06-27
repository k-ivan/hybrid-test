<template>
  <form
    action="#0"
    @submit.prevent="handleSubmit"
  >
    <div class="form-group">
      <label
        for="title"
        class="form-label"
      >Title</label>
      <input
        id="title"
        v-model.trim="title"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.title.$error }"
        placeholder="Enter title"
      >
    </div>
    <div class="form-group">
      <label
        for="slug"
        class="form-label"
      >Slug</label>
      <input
        id="slug"
        v-model="slug"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': v$.slug.$error }"
        placeholder="Enter slug"
      >
    </div>
    <div class="form-group">
      <label
        for="summary"
        class="form-label"
      >Text</label>
      <TextareaGrow
        id="text"
        v-model.trim="summary"
        class="form-control"
        :class="{ 'is-invalid': v$.summary.$error }"
        placeholder="Enter a short description"
        :max-height="550"
      />
      <!-- <div
        v-if="v$.summary.maxLength.$invalid"
        class="invalid-feedback"
      >
        {{ v$.summary.maxLength.$message }}
      </div> -->
    </div>
    <div class="form-group">
      <label
        for="text"
        class="form-label"
      >Text</label>
      <ckeditor
        id="text"
        v-model="text"
        :editor="editor"
      />
    </div>
    <button
      class="btn btn--primary"
      :disabled="isDisabled"
    >
      {{ submitText }}
    </button>
  </form>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import TextareaGrow from './TextareaGrow.vue';

export default {
  name: 'PostForm',
  components: {
    ckeditor: CKEditor.component,
    TextareaGrow
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    formModel: {
      type: Object,
      default: () => {
        return {
          title: '',
          text: '',
          slug: '',
          summary: ''
        }
      }
    }
  },
  emits: ['save'],
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      editor: ClassicEditor,
      title: this.formModel.title,
      slug: this.formModel.slug,
      summary: this.formModel.summary,
      text: this.formModel.text
    }
  },
  validations () {
    return {
      title: { required },
      slug: { required },
      summary: {
        required
        // maxLength: maxLength(150)
      },
      text: { required }
    }
  },
  computed: {
    isDisabled() {
      return this.v$.$invalid
    },
    submitText() {
      return !this.isEdit ? 'Create post' : 'Edit post'
    }
  },
  methods: {
    handleSubmit() {
      this.v$.$touch()
      if (this.v$.$invalid) return;

      this.$emit('save', {
        title: this.title,
        text: this.$sanitizeHtml((this.text), {
          allowedTags: [
            'address', 'article', 'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4',
            'h5', 'h6', 'hgroup', 'blockquote', 'dd', 'div',
            'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'ol', 'p', 'pre',
            'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
            'em', 'i', 'kbd', 'mark', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp',
            'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr', 'caption',
            'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'iframe', 'img'
          ],
          allowedIframeHostnames: ['www.youtube.com'],
          allowedAttributes: {
            img: [ 'src' ]
          }
        }),
        summary: this.summary,
        slug: this.slug
      });
    }
  }
}
</script>
