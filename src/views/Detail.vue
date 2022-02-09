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
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <form @submit.prevent="saveCommment()">
            <CommentList :comments="_comments" />
            <Input placeholder="Please enter your comment" v-model="comment" />
            <Input placeholder="Please enter color code" v-model="color" />
            <Button type="submit">Save Comment</Button>
            {{ _color_code }}
          </form>
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
            <div
              v-for="(road, index) in _road_details.slice(0, 6)"
              :key="index"
              class="group relative"
            >
              <div
                class="flex flex-col justify-between w-full h-80 bg-gray-100 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
              >
                <div class="p-4">Title: {{ road.title }}</div>
                <div class="p-4">Subtitle: {{ road.subtitle }}</div>
                <div class="p-4">Descriptions: {{ road.description[0] }}</div>
                <div class="p-4">
                  Coordinates: Lat {{ road.coordinate.lat }} Lang:
                  {{ road.coordinate.lat }}
                </div>
              </div>
            </div>
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
import Arrow from "../components/Arrow.vue";
import Heading from "../components/Heading.vue";
import Text from "../components/Text.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import CommentList from "../components/CommentList.vue";
export default {
  name: "Detail",
  components: {
    Container,
    Input,
    Button,
    Arrow,
    Heading,
    Text,
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
          color: this.color,
        });
        this.comment = "";
        this.color = "";
      } else {
        alert("Please enter comment");
      }
    },
  },
  computed: {
    _road_details() {
      return this.$store.getters.GET_ROAD_DETAILS;
    },
    _comments() {
      return this.$store.getters.GET_COMMENTS.filter((com) => {
        return com.road === this.$route.params.id;
      }).slice(-5);
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
  },
};
</script>

<style></style>
