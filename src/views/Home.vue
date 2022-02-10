<template>
  <div class="mt-4">
    <div class="flex flex-row justify-between">
      <heading tag="h1" size="normal"> List of Roads</heading>
      <pagination
        @onPrev="onPrev()"
        @onNext="onNext()"
        :start="start"
        :end="end"
      />
    </div>

    <stack>
      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <road-card
          v-for="(road, index) in _road_data"
          :key="index"
          :roadName="road"
          :footer="true"
        />
      </div>
    </stack>
  </div>
</template>

<script>
import Heading from "../components/Heading.vue";
import RoadCard from "../components/RoadCard.vue";
import Stack from "../components/Stack.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: { Heading, Stack, Pagination, RoadCard },
  name: "Home",
  data() {
    return {
      start: 0,
      end: 8,
    };
  },
  methods: {
    onNext() {
      this.start = this.start + 8;
      this.end = this.end + 8;
    },
    onPrev() {
      this.start = this.start - 8;
      this.end = this.end - 8;
    },
    addToFavorites(road) {
      this.$store.dispatch("ADD_TO_FAVORITES", road);
    },
  },
  computed: {
    _road_data() {
      return this.$store.getters._get_roads.slice(this.start, this.end);
    },
  },
};
</script>
