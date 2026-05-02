<script lang="ts">
import {defineComponent} from 'vue'

interface SaleBadgeData {
  salePercentage: number;
  storeSettings: {
    saleBadge: string;
  },
}
export default defineComponent({
  name: "SaleBadge",
  data(){
    return {
      salePercentage: 1,
      storeSettings: {
        saleBadge: 'percent'
      },
    } as SaleBadgeData
  },
  computed: {
    showSaleBadge(){
      return this.node.rawSalePrice  && this.storeSettings.saleBadge !== 'hidden'
    },
    salePercentage(){
      if(!this.node?.rawSalePrice || !this.node?.rawRegularPrice) return '';
      const salePrice = parseFloat(this.node?.rawRegularPrice);

    },
    textToDisplay(){
      if(this.storeSettings?.saleBadge === 'percent') return this.salePercentage.value;

    }
  },

  props: {
    node: {type:Object, required: true}
  }
})
</script>

<template>
  <span class="red-badge">sale</span>

</template>

<style scoped lang="postcss">
@reference "#tailwind";

.red-badge {
  @apply rounded-md bg-red-400 dark:bg-red-500 text-xs text-white tracking-tight px-1.5 leading-6 z-10;
  background: #000 linear-gradient(0deg, #f87171, #f87171);
}

.dark .red-badge {
  background: #000 linear-gradient(0deg, #ef4444, #ef4444);
}

</style>
