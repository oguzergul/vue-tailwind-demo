<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Heading",
  props: {
    tag: {
      type: String,
      default: "span",
    },
    size: {
      type: String,
      default: "normal", // normal:14, small:12, xsmall:11, xxsmall:10
      validator: function (value) {
        return ["normal", "medium", "xsmall", "xxsmall"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.normal {
  @apply text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl;
}
.medium {
  @apply text-lg text-gray-900 font-medium;
}
.xxsmall {
  font-size: 10px;
}
</style>
