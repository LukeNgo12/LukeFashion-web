<script lang="ts">
import {defineComponent} from 'vue'
import StarRating from "@/components/e-commerce/productElements/StarRating.vue";

interface ProductTypeData {
  reviews: number;
  components: {
    StarRating
  },
  edges: {
    node: {
      author: {
        node: {
          avatar: string
        }
      }
    }
  }[],

}
export default defineComponent({
  name: "ProductReviews",
  props:{
    product: {type: Object, default: null}
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-32 items-start mt-8">
    <div class="flex max-w-sm gap-4 prose dark:prose-invert">
      <ReviewsScore v-if="product.reviews" :reviews="product.reviews" :productId="product.databaseId" :reviewCount="product.reviewCount" />
    </div>
    <div class="divide-y divide-gray-200 dark:divide-gray-700 flex-1" v-if="product.reviews?.edges && product.reviews.edges.length">
      <div v-for="review in product.reviews.edges" :key="review.id" class="my-2 py-8">
        <div class="flex gap-4 items-center">
          <img v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" class="rounded-full h-12 w-12" />
          <div class="grid gap-1">
            <div class="text-sm">
              <span class="font-semibold dark:text-gray-200">{{ review.node.author.node.name }}</span>
              <span class="italic text-gray-400 dark:text-gray-500">
                – {{ new Date(review.node.date).toLocaleString($t('shopElements.productReviews.langCode'), { month: 'long', day: 'numeric', year: 'numeric' }) }}</span
              >
            </div>
            <StarRating :rating="review.rating" :hide-count="true" class="text-sm" />
          </div>
        </div>
        <div class="mt-4 text-gray-700 dark:text-gray-300 italic prose-sm dark:prose-invert" v-html="review.node.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
