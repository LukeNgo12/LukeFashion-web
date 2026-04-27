<script lang="ts">
import {defineComponent} from "vue";
import ClientOnly from 'vue-client-only'
import Button from "@/components/e-commerce/ui/Button.vue";
import EmptyCartMessage from "@/components/e-commerce/shopElements/EmptyCartMessage.vue";
import {useCart} from "@/composables/useCart.ts";

export default defineComponent({
  components: {
    Button,
    ClientOnly, EmptyCartMessage

  },
  data() {
    return {

      cart: {
        shippingTotal: 500,
        discountTotal: 500,
        subtotal: 500,
        rawDiscountTotal: 500,
        total: 500,
        isEmpty: true
      },
      isCartMutating: true
    }

  },
  mounted(){
  }

})

</script>

<template>
  <main class="container my-16 min-h-150 items-center flex flex-col">
    <!--    -->


    <div v-if="cart && !cart.isEmpty" class="grid lg:grid-cols-3 gap-8 lg:gap-12 w-full">
      <div class="lg:col-span-2">
        <ul>

        </ul>
      </div>
    </div>

    <div class="lg:col-span-1">
      <div
        class="sticky top-24 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('views.cartView.orderSummary') }}</h2>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between text-gray-700 dark:text-gray-300">
            <span>{{ $t('views.cartView.subtotal') }}</span>
            <span class="font-medium tabular-nums" v-html="cart.subtotal"></span>
          </div>
        </div>

        <div v-if="cart.shippingTotal"
             class="flex justify-between text-gray-700 dark:text-gray-300">
          <span>{{ $t('views.cartView.generalShippping') }}</span>
          <span
            class="font-medium tabular-nums"> {{ parseFloat(cart.shippingTotal) > 0 ? '+' : '' }}</span>
        </div>
        <div v-if="cart.discountTotal && parseFloat(cart.rawDiscountTotal || '0')"
             class="flex justify-between text-primary dark:text-primary-light">
          <span>{{ $t('views.cartView.shopDiscount') }}</span>
          <span class="font-medium tabular-nums"> - <span v-html="cart.discountTotal"></span></span>
        </div>
        <div
          class="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between items-center">
          <span
            class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('views.cartView.total') }}</span>
          <span class="text-2xl font-bold text-gray-900 dark:text-white tabular-nums"
                v-html="cart.total"></span>
        </div>
      </div>

      <Button
        :to="isCartMutating ? undefined: '/checkout'"
        :disabled="isCartMutating"
        class="w-full"
        size="lg"
        variant="primary"
      >
        <span
          class="mx-2">{{ isCartMutating ? $t('views.cartView.updating') : $t('views.cartView.checkout') }}</span>
      </Button>
    </div>
    <EmptyCartMessage v-if="cart && cart.isEmpty"/>
    <div v-else class="flex flex-col items-center justify-center min-h-100">
      <!--  <LoadingIcon />-->
    </div>

  </main>

</template>

<style scoped lang="postcss">

</style>
