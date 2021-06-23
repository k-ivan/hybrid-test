<template>
  <div class="comments">
    <h3 class="comments-count">
      Comments: {{ commentsLength }}
    </h3>
    <CommentForm class="comments-form" />
    <div
      v-if="hasComments"
      class="comments-list"
    >
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import { commentsLength } from '../../utils';
import CommentForm from './CommentForm.vue';
import Comment from './Comment.vue';

export default {
  name: 'Comments',
  components: {
    CommentForm,
    Comment
  },
  provide() {
    return {
      handleCommentsUpdate: this.handleCommentsUpdate
    }
  },
  props: {
    postComments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      comments: this.postComments,
    }
  },
  computed: {
    commentsLength() {
      return commentsLength(this.comments);
    },
    hasComments() {
      return Boolean(this.commentsLength)
    }
  },
  methods: {
    handleCommentsUpdate(newComments) {
      this.comments = newComments
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  max-width: 600px;
  margin: auto;
}
.comments-form {
  margin-bottom: 30px;
}
</style>
