<template>
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

    <div v-if="footer" class="grid grid-cols-2 border-t border-gray-300">
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
</template>

<script>
export default {
  name: "Road Card",
  props: {
    footer: {
      type: Boolean,
      default: false,
    },
    road: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
