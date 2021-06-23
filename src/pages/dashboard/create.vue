<template>
  <div class="admin-page">
    <h1>Add post</h1>
    <PostForm @save="handleSave" />
  </div>
</template>

<script>
import { addPost, getPosts } from '../../api/posts.js';
import { uid } from '../../utils';
import PostForm from '../../components/PostForm.vue';

export default {
  name: 'Create',
  components: {
    PostForm
  },
  data() {
    return {
      posts: getPosts()
    }
  },
  methods: {
    handleSave(post) {
      post.id = uid();
      post.comments = [];
      post.date = Date.now();
      addPost(post);

      this.$router.push({ name: 'Dasboard' });
    }
  }
}
</script>
