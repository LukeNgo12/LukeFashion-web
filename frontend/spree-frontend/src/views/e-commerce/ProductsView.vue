<script lang="ts">
import {defineComponent} from "vue";
import Filters from "@/components/e-commerce/filtering/Filters.vue";
import ProductResultCount from "@/components/e-commerce/shopElements/ProductResultCount.vue";
import OrderByDropdown from "@/components/e-commerce/shopElements/OrderByDropdown.vue";
import ShowFilterTrigger from "@/components/e-commerce/filtering/ShowFilterTrigger.vue";
import ProductGrid from "@/components/e-commerce/shopElements/ProductGrid.vue";
import NoProductsFound from "@/components/e-commerce/shopElements/NoProductsFound.vue";
// import {Cart} from "./components/e-commerce/shopElements/Cart.vue"
interface ProductsViewData {
  storeSettings: {
    showFilters: boolean,
    showOrderByDropdown: boolean,
  },
  hasProducts: boolean,
}

export default defineComponent({
  name: "ProductsView",
  components: {
    Filters,
    ProductResultCount,
    OrderByDropdown,
    // ShowFilterTrigger,
    ProductGrid,
    NoProductsFound
  },
  data(){
    return {
      storeSettings: {
        showFilters: true,
        showOrderByDropdown: true
      },
      hasProducts: true
    } as ProductsViewData
  },
  methods: {

  },
  mounted(){

  }
})
</script>

<template>
  <main>
    <div class="container flex items-start gap-16" v-if="hasProducts">
      <Filters v-if="storeSettings.showFilters" />

      <div class="w-full">
        <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
          <ProductResultCount />
          <OrderByDropdown class="hidden md:inline-flex" v-if="storeSettings.showOrderByDropdown" />
<!--          <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />-->
        </div>
        <ProductGrid />
      </div>
    </div>
    <NoProductsFound v-else>{{$t('views.products.noProductsFound')}}</NoProductsFound>
  </main>
</template>

<style scoped lang="postcss">

</style>
