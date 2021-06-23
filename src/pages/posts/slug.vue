<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div
      class="post__body"
      v-html="post.text"
    />

    <hr>

    <Comments :post-comments="post.comments" />
  </div>
</template>

<script>
import { getPostBySlug } from '../../api/posts.js';
import Comments from '../../components/comments/Comments.vue';

export default {
  name: 'Post',
  components: {
    Comments
  },
  beforeRouteEnter(to, from, next) {
    const { slug } = to.params
    const post = getPostBySlug(slug);
    if (!post) next({ name: 'NotFound' })
    else next();
  },
  data() {
    return {
      post: null
    }
  },
  created() {
    const slug = this.$route.params.slug;
    const post = getPostBySlug(slug);
    this.post = post
  }
}
</script>

<style lang="scss" scoped>
.post {
  hr {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
.post__body {
  :deep(img) {
    display: block;
    margin: auto;
    max-width: 100%;
    height: auto;
  }
}
</style>
