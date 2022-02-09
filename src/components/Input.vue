<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    type="text"
    class="h-12 rounded-md border w-full mt-5 pl-2"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
