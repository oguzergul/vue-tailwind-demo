<template>
  <div>
    <Heading as="h3" size="medium">Comments</Heading>
    <div v-if="comments.length > 0" class="mt-10">
      <div v-for="(com, index) in comments" :key="index">
        <span> {{ index + 1 }}) {{ com.comment }} </span>
      </div>
    </div>
    <div v-else class="mt-10">There is no comment for this road.</div>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
import CommentItem from "./CommentItem.vue";
export default {
  name: "CommentList",
  components: {
    Heading,
    CommentItem,
  },
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
