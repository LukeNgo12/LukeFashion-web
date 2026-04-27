<script lang="ts">
  import {defineComponent} from "vue";

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
    imgHealth: {

    };
    imageLoading: {

    },
    imgHeight: {

    },
  }
  export default defineComponent({
    name: "CategoryCard",

    data() {
     return {
       node: {
         name: "Category Card",
         image: {
           altText: "dasdsa",
           title: "",
           sourceUrl: "fsdfsd"
         },
         slug: ""

       },
       imgWidth: 500,
       imgHealth: {

       },
       imageLoading: {

       },
       imgHeight: {

       }
     } as CategoryCardData
    },
    methods: {

    },
    props(){
      return {

      }
    }
  })
</script>

<template>
  <RouterLink
    v-if="node"
    :to="`/product-category/${decodeURIComponent(node.slug)}`"
    class="relative flex justify-center overflow-hidden border border-white dark:border-gray-700 rounded-xl item snap-mandatory snap-x">
<!--    <img-->
<!--      width="imgWidth"-->
<!--      height="imgHeight"-->
<!--      class="absolute inset-0 object-cover w-full h-full"-->
<!--      src="node.image?.sourceUrl || FALLBACK_IMG"-->
<!--      alt="node.image?.altText || node.name"-->
<!--      title="node.image?.title || node.name"-->
<!--&lt;!&ndash;      :loading="imageLoading"&ndash;&gt;-->
<!--      :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"-->
<!--      placeholder=""-->
<!--      placeholder-class="blur-xl" />-->

    <div class="absolute inset-x-0 bottom-0 opacity-50 bg-linear-to-t from-black to-transparent h-1/2" />
    <span class="relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4" v-html="node.name" />
  </RouterLink>
</template>

<style scoped lang="postcss">
</style>
