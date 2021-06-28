<template>
  <header class="dashboard-header">
    <h1>Posts</h1>
    <div class="actions">
      <button
        v-if="isSelected && posts.length"
        class="btn btn--warning"
        @click="handleRemove"
      >
        Remove selected post(s)
      </button>
      <RouterLink
        class="btn btn--primary"
        :to="{ name: 'Create' }"
      >
        Create post
      </RouterLink>
    </div>
  </header>

  <template v-if="allPosts.length">
    <div class="tbl-responsive">
      <table class="tbl tbl--horizontal-bordered tbl--hover">
        <thead>
          <tr>
            <th>
              <input
                v-model="selectAll"
                type="checkbox"
              >
            </th>
            <th class="text-left">
              title
            </th>
            <th>date</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in posts"
            :key="post.slug"
          >
            <td class="text-center">
              <input
                v-model="selected"
                type="checkbox"
                :value="post.id"
              >
            </td>
            <td>
              <RouterLink :to="{ name: 'Edit', params: { slug: post.slug } }">
                {{ post.title }}
              </RouterLink>
            </td>
            <td class="text-center">
              {{ $formatDate(post.date) }}
            </td>
            <td class="text-center">
              {{ commentsLength(post.comments) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ol class="dashboard-pagination pagination">
      <li
        class="pagination__item pagination__item--prev"
        :class="{ 'is-disabled': !hasPrev }"
      >
        <a
          v-if="hasPrev"
          href="#0"
          class="pagination__link"
          @click.prevent="handlePrev"
        >Prev</a>
        <span v-else>Prev</span>
      </li>
      <li
        class="pagination__item pagination__item--next"
        :class="{ 'is-disabled': !hasNext }"
      >
        <a
          v-if="hasNext"
          href="#0"
          class="pagination__link"
          @click.prevent="handleNext"
        >Next</a>
        <span v-else>Next</span>
      </li>
    </ol>
  </template>
  <div
    v-else
    class="empty text-center"
  >
    Start building a <RouterLink :to="{ name: 'Create' }">
      story
    </RouterLink>
  </div>
</template>

<script>
import { getPosts, removePosts } from '../../api/posts.js';
import { commentsLength } from '../../utils';

export default {
  name: 'Dashboard',
  data() {
    return {
      allPosts: getPosts(),
      page: 1,
      perPage: 5,
      selected: []
    }
  },
  computed: {
    posts() {
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
    hasPrev() {
      return this.startIndex > 0
    },
    hasNext() {
      return this.endIndex < this.total
    },
    selectAll: {
      get() {
        return this.posts ? this.selected.length === this.posts.length : false;
      },
      set(value) {
        const selected = [];

        if (value) {
          this.posts.forEach(post => selected.push(post.id));
        }

        this.selected = selected;
      }
    },
    isSelected() {
      return Boolean(this.selected.length);
    }
  },
  watch: {
    page() {
      this.selected = [];
    }
  },
  methods: {
    commentsLength(comments) {
      return commentsLength(comments)
    },
    handleRemove() {
      const posts = removePosts(this.selected);
      this.allPosts = posts;
      this.selectAll = false;
      this.page = 1;
    },
    handlePrev() {
      this.page--;
    },
    handleNext() {
      this.page++;
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions {
  display: flex;

  .btn {
    margin-right: 5px;
  }
}
.empty {
  padding: 50px 0;
  font-size: 18px;
}
.dashboard-pagination.pagination {
  justify-content: center;
}
</style>
