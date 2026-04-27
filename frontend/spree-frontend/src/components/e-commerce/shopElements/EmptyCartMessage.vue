<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue"
import {logoIonic} from "ionicons/icons"
export default defineComponent({
  components: {
    IonIcon,
  },
  name: "EmptyCartMessage",
  methods: {
    toggleCart(event: boolean){

    }
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center flex-1 mb-20 text-gray-400 dark:text-gray-500">
    <ion-icon name="ion:cart-outline" size="96" class="opacity-75 mb-5" />
    <div class="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">{{ $t('shopElements.emptyCartMessage.cartEmpty') }}</div>
    <span class="mb-8 text-gray-500 dark:text-gray-400">{{ $t('shopElements.emptyCartMessage.addProductsInYourCart') }}</span>
    <RouterLink
      to="/products"
      @click="toggleCart(false)"
      class="flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark">
      {{ $t('shopElements.emptyCartMessage.browseOurProducts') }}
    </RouterLink>
  </div>
</template>

<style scoped lang="postcss">

</style>
