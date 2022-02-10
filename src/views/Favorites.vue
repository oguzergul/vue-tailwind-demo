<template>
  <div>
    <Breadcrumbs
      :breadcrumb="[
        { label: 'Home', route: '/' },
        { label: `Favorites`, route: '/favorites' },
      ]"
    />
    <stack>
      <heading> Favorites</heading>
      <div
        v-if="_favorite_roads_data.length > 0"
        class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <road-card
          v-for="(road, index) in _favorite_roads_data"
          :key="index"
          :color="road.colorCode"
          :roadName="road.road"
          :comment="road.comments"
          :footer="false"
        ></road-card>
      </div>
      <div v-else class="mt-10">There is no favorited roads</div>
    </stack>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
import Heading from "../components/Heading.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Stack from "../components/Stack.vue";
import RoadCard from "../components/RoadCard.vue";
export default {
  components: {
    Container,
    Breadcrumbs,
    Heading,
    Stack,
    RoadCard,
  },

  computed: {
    _favorite_roads() {
      return this.$store.getters._get_favorite_roads;
    },
    _favorite_roads_data() {
      return this.$store.getters._get_favorite_roads.map((item) => {
        return {
          road: item,
          comments: this.$store.getters._get_comments.filter((comment) => {
            return comment.road === item;
          }),
          colorCode: this.$store.getters._get_color_code.filter((color) => {
            return color.road === item;
          }),
        };
      });
    },
  },
};
</script>

<style></style>
