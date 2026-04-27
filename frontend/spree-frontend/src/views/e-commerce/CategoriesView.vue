<script lang="ts">
import {defineComponent, ref} from 'vue'
import CategoryCard from "@/components/e-commerce/CategoryCard.vue";

  export default defineComponent ({
    components: {
      CategoryCard
    },
    props: {

    },
    head(){
      return {
        title: `Categories`,
        meta: [{ name: 'description', content: 'All product categories' }],
        link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
      }
    },
    data(){
      return {
        productCategories: [
          {
            node: {
              name: "",
              image: {
                altText: "",
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
          }
        ]
      }
    },
  })

</script>

<template>
  <main class="container">
    <div v-if="productCategories?.length" class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <CategoryCard  v-for="(category, i) in productCategories" :key="i" :node="category" :image-loading="i <= 2 ? 'eager' : 'lazy'" />
    </div>
    <div v-if="productCategories?.length" class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4"> </div>
    <div v-else class="my-6 text-center text-gray-500 dark:text-gray-400"> {{$t('views.categoriesView.noCategoriesFound')}}</div>

  </main>
</template>

<style scoped lang="postcss">

</style>
