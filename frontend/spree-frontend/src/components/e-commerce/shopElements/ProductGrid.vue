<script lang="ts">
import {defineComponent} from 'vue'

interface ProductGridData {
  products: [],
  productsToShow: {id: 500}[]
}
export default defineComponent({
  name: "ProductGrid",
  data(){
    return {
      products: [],
      productsToShow: [{
        id: 500
      }]
    } as ProductGridData
  }
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <section v-if="!!products.length" class="relative w-full">
      <TransitionGroup name="shrink" tag="div" mode="in-out" class="product-grid">
        <ProductCard v-for="(node, i) in productsToShow" :key="node.id || i" :node :index="i" />
      </TransitionGroup>
      <Pagination />
    </section>
    <NoProductsFound v-else />
  </Transition>
</template>

<style scoped lang="postcss">

</style>
