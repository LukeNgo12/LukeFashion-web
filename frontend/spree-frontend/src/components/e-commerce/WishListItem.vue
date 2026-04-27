<script lang="ts" >
import {RouterLink} from "vue-router";
import {defineComponent} from "vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface WishListItemData {

  product: {
    name: string;
    databaseId: string;
    slug: number;
    image: {
      cartSourceUrl: string,
      altText: string,
      sourceUrl: string,
    },
    regularPrice: number,
    salePrice: string,
  }
}
export default defineComponent({
  components: {
    RouterLink,
    Button
  },
  data(){
    return {
      product : {
        name: '',
        databaseId: '',
        slug: 1,
        image: {
          cartSourceUrl: '',
          altText: '',
          sourceUrl: ''
        },
        regularPrice: 500,
        salePrice: ''
      }
    } as WishListItemData
  },
  methods: {
    removeFromWishlist(databaseId: any){

    }
  }
})
</script>

<template>
  <li class="flex py-4 gap-4 items-center">
    <RouterLink v-if="product.slug" :to="`/product/${decodeURIComponent(product.slug)}`">
      <img
        v-if="product?.image?.cartSourceUrl"
        class="rounded-lg object-cover h-16 w-16"
        :src="product.image?.cartSourceUrl || product.image?.sourceUrl || '/images/placeholder.jpg'"
        :alt="product.image?.altText || product.name || 'Product image'"
        :title="product.image?.altText || product.name || 'Product image'"
        width="100"
        height="120"
        loading="lazy" />
    </RouterLink>
    <div>
      <RouterLink v-if="product.slug" class="text-lg leading-tight" :to="`/product/${decodeURIComponent(product.slug)}`">{{ product.name }}</RouterLink>
      <ProductPrice :sale-price="product.salePrice ?? undefined" :regular-price="product.regularPrice ?? undefined" class="ml-auto" />
    </div>
    <div class="ml-auto">
      <Button v-if="product.databaseId" title="Remove Item" @click="removeFromWishlist(product.databaseId)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
        </svg>
      </Button>
    </div>
  </li>
</template>

<style scoped lang="postcss">

</style>
