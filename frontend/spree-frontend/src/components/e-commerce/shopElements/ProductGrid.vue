<script lang="ts">
import {defineComponent} from 'vue'
import ProductCard from "@/components/e-commerce/productElements/ProductCard.vue";
import {Pagination} from "reka-ui/namespaced";
import NoProductsFound from "@/components/e-commerce/shopElements/NoProductsFound.vue";
import axios from "axios";
import {PRODUCTS} from "@/data/products.ts";

interface ProductGridData {
  products: [],
  productsToShow: { id: 500 }[]
}

export default defineComponent({
  name: "ProductGrid",
  components: {
    ProductCard,
    Pagination,
    NoProductsFound
  },
  data() {
    return {
      products: [{
        id: ""
      }],
      productsToShow:PRODUCTS
    } as any
  },
  mounted(){
    const getProducts = async() => {
      const products = await axios.get("http://localhost:3000/admin/products")
      let shownProducts = products.data.map(product => {
        return {
            id: product.id,
            singularPrice: product.price,
            regularPrice: product.price * 130/100,
            description: product.description,
        }
      })
    }
  }
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <section v-if="!!products.length" class="relative w-full">
      <TransitionGroup name="shrink" tag="div" mode="in-out" class="product-grid">
        <div class="grid grid-cols-4 gap-4">
          <ProductCard v-for="(node, i) in productsToShow" :node :slider-images/>

        </div>
      </TransitionGroup>
      <Pagination/>

    </section>

    <NoProductsFound v-else/>
  </Transition>
</template>

<style scoped lang="scss">
@reference "#tailwind";

.product-grid {
  @apply grid my-4 min-h-37.5 transition-all gap-8 lg:my-8;
  grid-template-columns: repeat(2, 1fr);
}

.product-grid:empty {
  display: none;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
}

.shrink-move {
  transition: all 400ms;
}

.shrink-leave-active {
  transition: transform 300ms;
  position: absolute;
  opacity: 0;
}

.shrink-enter-active {
  transition: opacity 400ms ease-out 200ms,
  transform 400ms ease-out;
  will-change: opacity, transform;
}

.shrink-enter,
.shrink-leave-to,
.shrink-enter-from {
  opacity: 0;
  transform: scale(0.75) translateY(25%);
}
</style>
