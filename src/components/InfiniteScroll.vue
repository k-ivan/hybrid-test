<template>
  <div class="infinite-scroll">
    <slot />
    <div
      v-if="loading"
      class="infinite-scroll__loading loading"
    />
  </div>
</template>

<script>
import { throttle } from '../utils';

export default {
  name: 'InfiniteScroll',
  props: {
    distance: {
      type: Number,
      'default': 0
    },
    throttle: {
      type: Number,
      'default': 0
    },
    parentSelector: {
      type: String,
      'default': null
    },
    loading: {
      type: Boolean,
      'default': false
    },
    force: {
      type: Boolean,
      'default': false
    }
  },
  emits: ['infinite'],
  mounted () {
    this.scrollHandler = throttle(this.scroll, this.throttle)

    if (this.parentSelector) {
      this.$nextTick(() => {
        this.scrollable = this.$el.closest(this.parentSelector)
        if (!this.scrollable) throw new Error('parent selector not found in DOM')
        this.scrollable.addEventListener('scroll', this.scrollHandler)
      })
    } else {
      window.addEventListener('scroll', this.scrollHandler)
    }

    if (this.force) this.$emit('infinite')
  },
  beforeUnmount () {
    if (this.scrollable) {
      this.scrollable.removeEventListener('scroll', this.scrollHandler)
      delete this.scrollable
    } else {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  },
  methods: {
    isBottom () {
      if (this.scrollable) {
        return (this.scrollable.clientHeight + this.scrollable.scrollTop >= this.scrollable.scrollHeight - this.distance)
      } else {
        const bottomEl = this.$el.getBoundingClientRect().bottom + window.pageYOffset
        const bottomViewport = window.innerHeight + window.pageYOffset + this.distance

        return bottomEl <= bottomViewport && window.pageYOffset < bottomEl
      }
    },
    scroll () {
      if (this.isBottom()) {
        this.$emit('infinite')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.infinite-scroll {
  position: relative;
}
.infinite-scroll__loading {
  position: relative;
  height: 60px;
}
</style>
