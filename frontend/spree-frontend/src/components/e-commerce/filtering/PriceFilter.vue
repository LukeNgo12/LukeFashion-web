<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import {chevronDown, logoIonic} from "ionicons/icons";
import {SliderRange, SliderRoot, SliderThumb, SliderTrack} from "reka-ui";
chevronDown
interface PriceFilterData {
  model: number;
  price: string[];
  isOpen: boolean;
  maxPrice: number;
  applyPrice: number
}

export default defineComponent({
  name: "PriceFilter",
  components: {
    IonIcon,
    SliderRoot,
    SliderTrack,
    SliderThumb,
    SliderRange
  },
  data(){
    return {
      model: 2,
      price: [
        "5",
      ],
      chevronDown,
      isOpen: true,
      maxPrice: 500,
      applyPrice: 500,
      currencySymbol : "",
    } as any
  }
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between mt-8 font-semibold leading-none text-gray-900 cursor-pointer dark:text-white" @click="isOpen = !isOpen">
      <span>{{$t('filtering.priceFilter.price')}}</span>
      <ion-icon :icon="chevronDown" class="text-gray-600 transform dark:text-gray-400" :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <div v-show="isOpen" class="grid grid-cols-2 gap-4 mt-3">
      <div class="relative flex items-center">
        <input
          id="price-from"
          v-model.number="price[0]"
          class="w-auto max-w-full p-2 pl-6 leading-none text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 md:text-sm dark:text-white"
          type="number"
          placeholder="From"
          min="0" />
        <label for="price-from" class="absolute px-2 leading-none text-gray-400 dark:text-gray-500" v-html="currencySymbol" />
      </div>
      <div class="relative flex items-center">
        <input
          id="price-to"
          v-model.number="price[1]"
          class="w-auto max-w-full p-2 pl-6 leading-none text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 md:text-sm dark:text-white"
          type="number"
          placeholder="Up to"
          min="1" />
        <label for="price-to" class="absolute px-2 leading-none text-gray-400 dark:text-gray-500" v-html="currencySymbol" />
      </div>
      <div class="mx-1 mt-1 col-span-full">
        <SliderRoot
          :v-model="price"
          :min="0"
          :max="maxPrice"
          aria-labelledby="price-from price-to"
          :@valueCommit="applyPrice"
          class="relative flex items-center w-full">
          <SliderTrack class="relative flex-1 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
            <SliderRange class="absolute h-full rounded-full bg-primary" />
          </SliderTrack>
          <SliderThumb class="block w-5 h-5 bg-white border border-gray-300 rounded-full dark:bg-gray-200 dark:border-gray-500" />
          <SliderThumb class="block w-5 h-5 bg-white border border-gray-300 rounded-full dark:bg-gray-200 dark:border-gray-500" />
        </SliderRoot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
