<template>
  <span>
    <span data-copy>{{ data }}</span
    >&nbsp;<button class="copy-button hide--on-mobile" data-tooltip="Copy">
      <img
        alt="Copy"
        class="icon"
        :src="require(`@/assets/icons/copy.png`)"
        v-on:click="copy"
      />
    </button>
  </span>
</template>

<script>
export default {
  props: {
    data: String
  },
  methods: {
    copy() {
      let el = this.$el.querySelector("[data-copy]");
      let range = document.createRange();
      range.selectNode(el);
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>

<style lang="scss">
.contents {
  display: contents;
}
.copy-button {
  padding: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #ffffff00;
  border-radius: 4px;

  &:hover {
    background-color: #52525220;
  }

  &:active {
    background-color: #52525240;
    transform: translateY(1px);
  }
}
</style>
