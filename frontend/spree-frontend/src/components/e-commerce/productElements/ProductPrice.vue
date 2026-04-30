<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProductPrice",
  data(){
    return {
    }
  },
  props: {

    salePrice: Number,
    regularPrice: Number
  }
})
</script>

<template>
  <div v-if="regularPrice" class="flex font-semibold dark:text-gray-100">
    <span :class="{ 'text-gray-400 dark:text-gray-500 line-through font-normal': 50 }"  >Regular Price</span>
    <span  > Sale Price</span>
  </div>
</template>

<style scoped lang="postcss">

</style>
