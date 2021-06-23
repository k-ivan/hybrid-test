<template>
  <div class="comment-replies">
    <Comment
      v-for="reply in replies"
      :key="reply.id"
      :comment="reply"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'CommentReplies',
  components: {
    Comment: defineAsyncComponent(() => import('./Comment.vue'))
  },
  props: {
    replies: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-replies {
  border-left: 1px solid #ddd;
}
</style>
