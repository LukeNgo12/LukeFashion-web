<script lang="ts">
import {defineComponent} from 'vue'
import ProductCard from "@/components/e-commerce/productElements/ProductCard.vue";
interface ProductRowData {
  products: {databaseId: string}[]
}

export default defineComponent({
  name: "ProductRow",
  components: {
    ProductCard
  },
  data(){
    return {
      products: [
        {
          databaseId: ""
        }
      ]
    } as ProductRowData
  }
})
</script>

<template>
  <div v-if="products" class="grid gap-8">
    <ProductCard
      v-for="(node, i) in products"
      :key="node.databaseId"
      class="w-full"
      :node="node"
      :index="i"
      :class="{
        hidden: i === products.length - 1,
        'lg:block': i === products.length - 1,
      }" />
  </div>
</template>

<style scoped lang="postcss">

</style>
