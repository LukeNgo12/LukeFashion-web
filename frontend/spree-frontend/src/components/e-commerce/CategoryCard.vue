<script lang="ts">
import {defineComponent} from "vue";
import logo from "@/components/e-commerce/generalElements/Logo.vue";

interface CategoryCardData {
  node: {
    name: string,
    image: {
      altText: string;
      title: string;
      sourceUrl: string;
    },
    slug: string;

  },
  imgWidth: number;
  imgHealth: {};
  imageLoading: {},
  imgHeight: {},
}

export default defineComponent({
  name: "CategoryCard",
  computed: {
    logo() {
      return logo
    }
  },

  data() {
    return {} as CategoryCardData
  },
  methods: {},
  props: {
    node: {type: Object, default: {}}
  },
  mounted() {
  }
})
</script>

<template>
  <div
  >
    <RouterLink
      v-if="node"
      :to="`/product-category/${decodeURIComponent(node.node.slug)}`"
      class="relative flex justify-center overflow-hidden border border-white dark:border-gray-700 rounded-xl item snap-mandatory snap-x">
                <img
                  width="50"
                  height="50"
                  class="absolute inset-0 object-cover w-full h-full"
                  :src="node.node.image.sourceUrl"
                  alt="Women's Clothing"
                  title="Women's Clothing"
                  :sizes="`sm:${500 / 2}px md:${500}px`"
                   />
      <div
        class="absolute inset-x-0 bottom-0 opacity-50 bg-linear-to-t from-black to-transparent h-1/2"/>
      <span
        class="relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4"
        v-html="node.node.name"/>
    </RouterLink>
  </div>


</template>

<style scoped lang="postcss">
.item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  aspect-ratio: 4 / 5;
}
</style>
