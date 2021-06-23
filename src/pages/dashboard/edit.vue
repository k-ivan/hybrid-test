<template>
  <h1>Edit</h1>
  <PostForm
    is-edit
    :form-model="post"
    @save="handleSave"
  />
</template>

<script>
import { getPostBySlug, editPost } from '../../api/posts.js';
import PostForm from '../../components/PostForm.vue';

export default {
  name: 'Edit',
  components: {
    PostForm
  },
  beforeRouteEnter(to, from, next) {
    const { slug } = to.params
    const post = getPostBySlug(slug);
    if (!post) next({ name: 'NotFound' });
    else next();
  },
  data() {
    return {
      post: {}
    }
  },
  created() {
    const slug = this.$route.params.slug;
    const post = getPostBySlug(slug);
    this.post = post
  },
  methods: {
    handleSave(post) {
      editPost(this.post.id, post);
      this.$router.push({ name: 'Dasboard' });
    }
  }
}
</script>
