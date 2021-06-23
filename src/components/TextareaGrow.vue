<template>
  <textarea
    class="textarea-grow"
    :rows="rows"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextareaGrow',
  props: {
    rows: {
      type: [String, Number],
      default: 1
    },
    modelValue: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue'],
  watch: {
    async value(newValue) {
      if (newValue.length === 0) {
        await this.$nextTick();
        this.resize();
      }
    }
  },
  mounted() {
    this.initialWidth = this.$el.offsetWidth;
    this.offset = this.getOffset(this.$el);
    this.$el.style.overflowY = 'hidden';
    this.resize();
    window.addEventListener('resize', this.resize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    resize() {
      if (this.maxHeight && (this.$el.scrollHeight + this.offset) > this.maxHeight) {
        this.$el.style.overflowY = 'scroll';
        this.newHeight = this.maxHeight;
      } else {
        this.$el.style.overflowY = 'hidden';
        this.$el.style.height = 'auto';
        this.newHeight = this.$el.scrollHeight + this.offset;
      }
      this.$el.style.height = `${this.newHeight}px`;
    },
    async handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
      this.resize()
    },
    getOffset(el) {
      const { borderTopWidth, borderBottomWidth } = window.getComputedStyle(el, null);
      let heightOffset = parseFloat(borderTopWidth) + parseFloat(borderBottomWidth);
      if (isNaN(heightOffset)) {
        heightOffset = 0;
      }
      return heightOffset;
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea-grow {
  display: block;
  width: 100%;
  box-sizing: border-box;
  resize: none;
}
</style>
