<template>
  <article class="post-card">
    <div class="post-card__title">
      <RouterLink :to="{ name: 'PostDetail', params: { slug: post.slug }}">
        {{ post.title }}
      </RouterLink>
    </div>
    <div class="post-card__summary">
      {{ post.summary }}
    </div>
    <footer class="post-card__footer">
      <div class="post-card__comments">
        <SvgIcon
          name="comments"
          width="16"
          height="16"
          color="currentColor"
        />
        {{ commentsLength }}
      </div>
    </footer>
  </article>
</template>

<script>
import { commentsLength } from '../utils';

export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    commentsLength() {
      return commentsLength(this.post.comments);
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 14px 1px rgba(0,0,0, .1);
}
.post-card__title {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 700;
  line-height: 1;

  a {
    color: currentColor;
  }
}
.post-card__summary {
  margin-bottom: 15px;
}
.post-card__comments {
  display: flex;
  align-items: center;
  color: #999;

  svg {
    margin-right: 5px;
  }
}
</style>
