<template>
  <div>
    <Header />
    <container>
      <router-view />
    </container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import Header from "@/components/Header";
export default {
  components: { Container, Header },
  name: "App",
  methods: {},
  created() {
    this.$store.dispatch("GET_ALL_OTOBAN");
  },
};
</script>

<style lang="scss"></style>
