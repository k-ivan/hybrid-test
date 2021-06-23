<template>
  <h1>Posts</h1>
  <p v-if="!total">
    There are no posts yet, but soon there will be
  </p>
  <div
    v-else
    class="posts-list"
  >
    <div class="search">
      <input
        v-model="query"
        class="form-control"
        type="text"
        placeholder="Search post"
      >
    </div>

    <div
      v-if="filteredPosts.length"
      class="posts-grid"
    >
      <PostCard
        v-for="post in filteredPosts"
        :key="post.slug"
        :post="post"
      />
    </div>
    <InfiniteScroll
      v-else
      class="posts-grid"
      :throttle="50"
      :distance="200"
      :loading="loadingMore"
      @infinite="loadMore"
    >
      <div class="posts-grid">
        <PostCard
          v-for="post in posts"
          :key="post.slug"
          :post="post"
        />
      </div>
    </InfiniteScroll>
  </div>
</template>

<script>
import { getPosts } from '../api/posts.js';
import InfiniteScroll from '../components/InfiniteScroll.vue';
import PostCard from '../components/PostCard.vue';

export default {
  name: 'Home',
  components: {
    InfiniteScroll,
    PostCard
  },
  data() {
    return {
      allPosts: getPosts(),
      posts: [],
      page: 1,
      perPage: 5,
      query: '',
      loadingMore: false
    }
  },
  computed: {
    filteredPosts() {
      if (this.query) {
        return this.allPosts.filter(post => post.title.toLowerCase().includes(this.query.toLowerCase()));
      }
      return []
    },
    slicePosts() {
      return this.allPosts.slice(this.startIndex, this.endIndex);
    },
    total() {
      return this.allPosts.length;
    },
    startIndex() {
      return (this.page - 1) * this.perPage
    },
    endIndex() {
      return this.startIndex + this.perPage
    },
    hasNext() {
      return this.endIndex < this.total
    }
  },
  created() {
    this.posts = this.slicePosts;
  },
  methods: {
    loadMore() {
      if (this.loadingMore) return;

      if (!this.hasNext) return;

      const FAKE_DELAY = Math.random() * 1200;
      this.page += 1;
      this.loadingMore = true;
      setTimeout(() => {
        this.posts = [
          ...this.posts,
          ...this.slicePosts
        ];
        this.loadingMore = false;
      }, FAKE_DELAY);
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-grid {
  display: grid;
  grid-gap: 30px;
}
.search {
  margin-bottom: 50px;
}
</style>
