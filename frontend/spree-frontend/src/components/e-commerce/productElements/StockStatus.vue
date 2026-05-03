<script lang="ts">
import {defineComponent} from 'vue'

interface StockStatusData {
  stockStatus: string;
  StockStatusEnum: {
    IN_STOCK: string;
    OUT_OF_STOCK: string;
    ON_BACKORDER: string;
  }
}
export default defineComponent({

  name: "StockStatus",
  data(){
    return {
      stockStatus: "",
      StockStatusEnum: {
        IN_STOCK : "",
        OUT_OF_STOCK: "",
        ON_BACKORDER: ""
      }
    }
  },
  props: {
    stockStatus: {type:String, required: false}
  }
})
</script>

<template>

    <span v-if="stockStatus === StockStatusEnum.IN_STOCK" class="text-green-600 dark:text-green-400">{{ $t('components.stockStatus.inStock')}}</span>
    <span v-else-if="stockStatus === StockStatusEnum.OUT_OF_STOCK" class="text-red-600 dark:text-red-400">{{ $t('components.stockStatus.outOfStock') }}</span>
    <span v-else-if="stockStatus === StockStatusEnum.ON_BACKORDER" class="text-yellow-600 dark:text-yellow-400">{{ $t('components.stockStatus.onBackorder') }}</span>
    <span v-else class="text-gray-600 dark:text-gray-400">Loading</span>

</template>

<style scoped lang="postcss">

</style>
