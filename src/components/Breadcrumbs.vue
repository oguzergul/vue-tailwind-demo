<template>
  <nav aria-label="Breadcrumb">
    <ol role="list" class="max-w-2xl mx-auto flex items-center lg:max-w-7xl">
      <li v-for="(crumb, index) in breadcrumb" :key="index">
        <div class="flex items-center">
          <a
            :href="crumb.route"
            class="mr-2 text-sm font-medium text-gray-900"
            >{{ crumb.label }}</a
          >
          <span v-if="breadcrumb.indexOf(crumb) !== breadcrumb.length - 1">
            > &nbsp;
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumb: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
