<template>
  <div class="mt-4">
    <div class="flex flex-row justify-between">
      <heading tag="h1" size="normal"> List of Roads</heading>
      <pagination />
    </div>

    <stack>
      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(road, index) in _table_data"
          :key="index"
          class="group relative"
        >
          <div
            class="flex flex-col justify-between w-full h-80 bg-gray-100 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          >
            <div class="p-4">
              <div
                class="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white"
              >
                {{ road }}
              </div>
            </div>

            <div class="grid grid-cols-2 border-t border-gray-300">
              <div
                @click="$router.push('/detail/' + road)"
                class="cursor-pointer flex items-center justify-center p-3 border-r border-gray-300"
              >
                Details
              </div>
              <div class="p-3 cursor-pointer" @click="addToFavorites(road)">
                Add To Favorite
              </div>
            </div>
          </div>
          <road-card road="asdas" />
        </div>
      </div>
    </stack>
  </div>
</template>

<script>
import Heading from "../components/Heading.vue";
import RoadCard from "../components/RoadCard.vue";
import Stack from "../components/Stack.vue";
import Pagination from "../components/Table/Pagination.vue";

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
      console.log(road);
      this.$store.dispatch("ADD_TO_FAVORITES", road);
    },
  },
  computed: {
    _table_data() {
      return this.$store.getters._get_roads.slice(this.start, this.end);
    },
  },
};
</script>
