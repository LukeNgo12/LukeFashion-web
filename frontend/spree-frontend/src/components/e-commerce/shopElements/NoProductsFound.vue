<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
import {logoIonic} from "ionicons/icons";

export default defineComponent({
  components: {
    IonIcon,

  },
  name: "NoProductsFound",
  methods: {
    clearAll(){

    },
    data(){
      return {
        allProducts: []
      }
    }
  }
})
</script>

<template>
  <div class="w-full my-16 lg:my-24">
    <div class="flex flex-col items-center justify-center w-full text-center text-pretty">
      <ion-icon name="ion:sad-outline" size="156" class="opacity-25 mb-10" />
      <h2 class="text-2xl font-bold">{{ $t('shopElements.noProductsFound.title') }}</h2>
      <p class="mt-4 max-w-md">
        <slot>{{ $t('shopElements.noProductsFound.subText') }}</slot>
      </p>
      <button v-if="allProducts.length" class="mt-8" @click="clearAll">
        {{ $t('shopElements.noProductsFound.clearFiltersAndSearch') }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
