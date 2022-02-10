<template>
  <div
    class="flex flex-col justify-between w-full h-80 bg-gray-100 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
  >
    <div class="p-4">
      <span v-if="roadName" class="block"
        ><strong>Road Name:</strong> {{ roadName }}</span
      >
      <span v-if="color" class="block"
        ><strong>Color Code:</strong> {{ color[0].colorCode || "" }}</span
      >

      <span v-if="lat" class="block"><strong>Lat:</strong> {{ lat }}</span>
      <span v-if="lang" class="block"><strong>Long:</strong> {{ lang }}</span>
      <span v-if="title" class="block"
        ><strong>Title:</strong> {{ title }}
      </span>
      <span v-if="subtitle" class="block"
        ><strong>Subtitle:</strong> {{ subtitle }}</span
      >
      <span v-if="description.length > 0" class="block"
        ><strong>Description:</strong> {{ description[0] }}</span
      >
      <span v-if="comment.length > 0" class="block"
        ><strong>Comments:</strong> {{ comment[0].comment }}</span
      >
    </div>

    <div
      v-if="footer == true"
      class="grid grid-cols-2 border-t border-gray-300"
    >
      <div
        @click="$router.push('/detail/' + roadName)"
        class="cursor-pointer flex items-center justify-center p-3 border-r border-gray-300"
      >
        Details
      </div>
      <div class="p-3 cursor-pointer" @click="addToFavorites(roadName)">
        Add To Favorite
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadCard",
  props: {
    comment: {
      type: Array,
      default: () => [],
    },
    footer: {
      type: Boolean,
      default: false,
    },
    roadName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    lat: {
      type: String,
      default: "",
    },
    lang: {
      type: String,
      default: "",
    },
    description: {
      type: Array,
      default: [],
    },
    color: {
      type: String,
      default: "",
    },
  },
  methods: {
    addToFavorites(roadName) {
      this.$store.dispatch("ADD_TO_FAVORITES", roadName);
    },
  },
};
</script>
