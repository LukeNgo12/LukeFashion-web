<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import {logoIonic} from "ionicons/icons";

interface QuantityInputData {
  isUpdatingCart: boolean,
  isOptimisticItem: boolean,
  quantity: number,
  hasNoMoreStock: boolean,
  onFocusOut: boolean,
  productType: {
    stockQuantity: number
  }
}
export default defineComponent({
  name: "QuantityInput",
  components: {
    IonIcon,
    logoIonic
  },
  data(){
    return {
      isUpdatingCart: true,
      isOptimisticItem: true,
      quantity: 100,
      hasNoMoreStock: true,
      onFocusOut: true,
      productType: {
        stockQuantity: 100
      }

    } as QuantityInputData
  },

  methods: {
    decrementQuantity(){

    },
    incrementQuantity(){

    }
  }
})
</script>

<template>
  <div class="flex rounded-sm bg-white dark:bg-gray-700 text-sm leading-none shadow-xs shadow-gray-200 dark:shadow-gray-900 isolate">
    <button
      title="Decrease Quantity"
      aria-label="Decrease Quantity"
      @click="decrementQuantity"
      type="button"
      class="focus:outline-hidden border-r w-6 h-6 border rounded-l border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300"
      :disabled="isUpdatingCart || isOptimisticItem || quantity <= 0">
      <ion-icon name="ion:remove" size="14" />
    </button>
    <input
      v-model.number="quantity"
      type="number"
      min="0"
      :max="productType.stockQuantity"
      :disabled="isOptimisticItem"
      aria-label="Quantity"
      @focusout="onFocusOut"
      class="flex items-center justify-center w-8 px-2 text-xs focus:outline-hidden border-y border-gray-300 dark:border-gray-600 text-center text-gray-900 dark:text-white dark:bg-gray-700" />
    <button
      title="Increase Quantity"
      aria-label="Increase Quantity"
      @click="incrementQuantity"
      type="button"
      class="focus:outline-hidden border-l w-6 h-6 border rounded-r hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600 disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800 text-gray-700 dark:text-gray-300"
      :disabled="isUpdatingCart || isOptimisticItem || hasNoMoreStock">
      <ion-icon name="ion:add" size="14" />
    </button>
  </div>
</template>

<style scoped lang="postcss">
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

</style>
