<template>
  <div class="h-22 border-b border-2 flex items-center">
    <container>
      <div class="flex items-center justify-between">
        <router-link to="/" class="font-medium"> HOME </router-link>
        <router-link to="/favorites" class="ml-4 font-medium">
          FAVORITES
        </router-link>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "./Container.vue";
export default {
  components: { Container },
  name: "Header",
};
</script>

<style></style>
