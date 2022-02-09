<template>
  <div>
    <Breadcrumbs
      :breadcrumb="[
        { label: 'Home', route: '/' },
        { label: `Favorites`, route: '/favorites' },
      ]"
    />
    <stack>
      <heading> Favorites </heading>
      <div v-for="item in _favorite_roads_data">
        {{ item.road }}
        {{ item.colorCode }}
        <div v-for="item in item.comments">{{ item.comment }}</div>
      </div>
    </stack>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
import Heading from "../components/Heading.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Stack from "../components/Stack.vue";

export default {
  components: {
    Container,
    Breadcrumbs,
    Heading,
    Stack,
  },

  computed: {
    _favorite_roads() {
      return this.$store.getters._get_favorite_roads;
    },
    _favorite_roads_data() {
      return this.$store.getters._get_favorite_roads.map((item) => {
        return {
          road: item,
          comments: this.$store.getters.GET_COMMENTS.filter((comment) => {
            return comment.road === item;
          }),
          colorCode: this.$store.getters._get_color_code
            .filter((color) => {
              return color.road === item;
            })
            .slice(-1)[0].colorCode,
        };
      });
    },
  },
};
</script>

<style></style>
