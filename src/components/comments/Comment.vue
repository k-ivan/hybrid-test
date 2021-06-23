<template>
  <div class="comment-container">
    <article class="comment">
      <header class="comment-header">
        <div class="comment-name">
          {{ comment.name }}
        </div>
        <div class="comment-date">
          {{ date }}
        </div>
      </header>
      <div class="comment-body">
        {{ comment.text }}
      </div>
      <footer class="comment-footer">
        <button
          class="btn btn--link"
          @click="showReplyForm = !showReplyForm"
        >
          Reply
        </button>
        <button
          class="btn btn--link"
          @click="handleRemove"
        >
          Remove
        </button>
      </footer>
    </article>

    <div
      v-if="showReplyForm"
      class="comment-reply"
    >
      <CommentForm
        :parent-id="comment.id"
        @send="handleSend"
      />
    </div>

    <CommentReplies
      v-if="replies.length"
      :replies="replies"
      :comment="comment"
    />
  </div>
</template>

<script>
import { removeComment } from '../../api/posts.js';
import CommentForm from './CommentForm.vue';
import CommentReplies from './CommentReplies.vue';

export default {
  name: 'Comment',
  components: {
    CommentForm,
    CommentReplies
  },
  inject: ['handleCommentsUpdate'],
  props: {
    comment: {
      type: [Object, null],
      default: null
    },
    parent: {
      type: [Object, null],
      default: null
    }
  },
  data() {
    return {
      showReplyForm: false
    }
  },
  computed: {
    date() {
      return this.$timeAgo(this.comment.date)
    },
    replies() {
      return this.comment?.children
    }
  },
  methods: {
    handleRemove() {
      const comments = removeComment(this.$route.params.slug, this.comment.id);
      this.handleCommentsUpdate(comments);
    },
    handleSend() {
      this.showReplyForm = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment-container .comment-container {
    margin-left: 15px;
  }
  .comment,
  .comment-reply {
    margin-bottom: 25px;
  }
  .comment-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .comment-name {
    font-weight: 700;
    font-size: 14px;
  }
  .comment-date {
    font-size: 12px;
    color: lighten(#000, 70%);
    &::before {
      content: '●';
      margin-left: 10px;
      margin-right: 10px;
      font-size: 10px;
      color: lighten(#000, 80%);
    }
  }
  .comment-body {
    margin-bottom: 10px;
  }
  .comment-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
