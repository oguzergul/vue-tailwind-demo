<template>
  <div>
    <h1>{{ _road_details.title }}</h1>
    <div class="pt-6">
      <Breadcrumbs
        :breadcrumb="[
          { label: 'Home', route: '/' },
          { label: `Road ${this.$route.params.id}`, route: '/roads' },
        ]"
      />

      <div
        class="pt-10 pb-16 lg:pt-16 lg:pb-24 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <Heading tag="h1" size="normal">
            Roadworks at {{ this.$route.params.id }}</Heading
          >
        </div>
        <div v-if="_is_favorite" class="mt-4 lg:mt-0 lg:row-span-3">
          <form @submit.prevent="saveCommment()">
            <CommentList :comments="_comments" />
            <Input placeholder="Please enter your comment" v-model="comment" />
            <Button type="submit">Save Comment</Button>
          </form>
          <form @submit.prevent="saveColor()">
            <Input placeholder="Please enter color code" v-model="color" />
            <Button type="submit">Save Color</Button>
          </form>
          <Button @onClick="removeFromFavorites()" class="mt-10"
            >Remove From Favorites</Button
          >
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <div class="space-y-6 mb-10">
            <p class="text-base text-gray-900">Roadworks are listed below.</p>
          </div>
          <div
            class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8"
          >
            <road-card
              v-for="(road, index) in _road_details.slice(0, 4)"
              :title="road.title"
              :description="road.description"
              :subtitle="road.subtitle"
              :key="index"
              roadName="asd"
              :lang="road.coordinate.long"
              :lat="road.coordinate.lat"
              :footer="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Container from "../components/Container.vue";
import Button from "../components/Button.vue";
import Heading from "../components/Heading.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import CommentList from "../components/CommentList.vue";
import RoadCard from "../components/RoadCard.vue";
export default {
  name: "Detail",
  components: {
    RoadCard,
    Container,
    Input,
    Button,
    Heading,
    Breadcrumbs,
    CommentList,
  },
  data() {
    return {
      comment: "",
      color: "",
    };
  },
  created() {
    this.$store.dispatch("GET_OTOBAN_BY_ID", this.$route.params.id);
  },
  methods: {
    saveCommment() {
      if (this.comment !== " ") {
        this.$store.dispatch("SAVE_COMMENT", {
          id: this.$route.params.id,
          comment: this.comment,
        });
        this.comment = "";
      } else {
        alert("Please enter comment");
      }
    },
    saveColor() {
      if (this.color !== " ") {
        this.$store.dispatch("SAVE_COLOR_CODE", {
          id: this.$route.params.id,
          color: this.color,
        });
        this.color = "";
      } else {
        alert("Please enter color code");
      }
    },
    removeFromFavorites() {
      this.$store.dispatch("REMOVE_FAVORITE", this.$route.params.id);
    },
  },
  computed: {
    _road_details() {
      return this.$store.getters._get_road_details;
    },
    _comments() {
      return this.$store.getters._get_comments
        .filter((com) => {
          return com.road === this.$route.params.id;
        })
        .slice(-5);
    },
    _color_code() {
      return (
        this.$store.getters._get_color_code
          .filter((com) => {
            return com.road === this.$route.params.id;
          })
          .slice(-1)[0].colorCode || ""
      );
    },
    _is_favorite() {
      return this.$store.getters._get_favorite_roads.includes(
        this.$route.params.id
      );
    },
  },
};
</script>

<style></style>
