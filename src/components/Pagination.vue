<template>
  <div class="bg-white py-3 flex items-center justify-between">
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            @click="$emit('onPrev', $event)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="">Previous</span>
          </button>
          <div class="border flex items-center justify-center px-6">
            <p class="text-sm text-gray-700">
              Showing
              {{ " " }}
              <span class="font-bold">{{ start }}</span>
              {{ " " }}
              to
              {{ " " }}
              <span class="font-bold">{{ end }}</span>
              {{ " " }}
              of
              {{ " " }}
              <span class="font-bold">{{ length }}</span>
              {{ " " }}
              results
            </p>
          </div>
          <button
            @click="$emit('onNext', $event)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="">Next</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    start: {
      type: Number,
      default: 1,
    },
    end: {
      type: Number,
      default: 8,
    },
    length: {
      type: Number,
      default: 8,
    },
  },
};
</script>

<style></style>
