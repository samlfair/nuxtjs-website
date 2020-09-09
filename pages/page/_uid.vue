<template>
  <section>
    <!-- Slices block component -->
    <slices-zone :uid="$route.params.uid" />
  </section>
</template>

<script>
// Imports for Prismic Slice components
import SliceZone from "vue-slicezone";

export default {
  name: "page",
  components: {
    SliceZone,
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website",
    };
  },
};
</script>
