<script lang="ts">
import {defineComponent} from 'vue'

interface ProductResultCountData {
  productsPerPage: number;
  page: number;
  products: [];
}
export default defineComponent({
  name: "ProductResultCount",
  data(){
    return {
      productsPerPage: 50,
      page: 5,
      products: []
    } as ProductResultCountData
  }

})
</script>

<template>
  <div class="text-sm font-light text-gray-700 dark:text-gray-300" v-if="products.length !== 0">
    <span>{{ $t('shopElements.productResultCount.showing') + ' ' }}</span>
    <span class="font-normal">{{ (page - 1) * productsPerPage + 1 + ' ' }}</span>
    <span>{{ $t('shopElements.productResultCount.to') + ' ' }}</span>
    <span class="font-normal">{{ Math.min(page * productsPerPage, products.length) + ' ' }}</span>
    (<span>{{ $t('shopElements.productResultCount.of') }}</span> <span class="font-normal">{{ products.length }}</span
  >)
  </div>
</template>

<style scoped lang="postcss">

</style>
