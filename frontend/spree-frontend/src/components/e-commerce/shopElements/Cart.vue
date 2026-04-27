<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue"
import Button from "@/components/e-commerce/ui/Button.vue";
import ClientOnly from 'vue-client-only'

interface CartData {
  data: [];
  isCartMutating: boolean;
  cart: {
    isEmpty: boolean;
    subtotal: number;
    contents: {
      productCount: number;
      nodes: {key: string, subtotal: number}[]
    },
    rawDiscountTotal: string;
    shippingTotal: string;
  discountTotal: 500;
  total: number;
  }
}
export default defineComponent({
  components: {
    IonIcon,
    Button,
    ClientOnly
  },
  name: "Cart",
  methods: {
    toggleCart(){

    }
  },
data(){
    return {
      data: [],
      isCartMutating: true,

      cart : {
        isEmpty: false,
        subtotal: 500,
        contents: {
          productCount: 500,
          nodes: [{
            key: "",
            subtotal: 500
          }]
        },
        shippingTotal: "500",
        rawDiscountTotal: "500",
        discountTotal: 500,
        total: 500,
      }
    } as CartData
}
})
</script>

<template>
  <div class="fixed top-0 bottom-0 right-0 z-50 flex flex-col w-11/12 max-w-lg overflow-x-hidden bg-white dark:bg-gray-800 shadow-lg">
    <ion-icon
      name="ion:close-outline"
      class="absolute p-1 rounded-lg shadow-lg top-6 left-6 md:left-8 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      size="34"
      @click="toggleCart()" />

    <EmptyCart v-if="cart && !cart.isEmpty" class="rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white" />

    <div class="mt-8 text-center text-gray-900 dark:text-white font-semibold">
      {{ $t('shopElements.cart.shopCart') }}
      <span v-if="cart?.contents?.productCount"> ({{ cart?.contents?.productCount }}) </span>
    </div>


      <template v-if="cart && !cart.isEmpty">
        <ul class="flex flex-col flex-1 gap-4 p-6 overflow-y-scroll md:p-8">
          <CartCard v-for="item in cart.contents?.nodes" :key="item.key" :item />
        </ul>
        <div class="px-6 pb-8 mb-safe md:px-8 space-y-4">
          <!-- Order Summary -->
          <div class="grid gap-1 text-sm font-semibold text-gray-500 dark:text-gray-300 tabular-nums">
            <!-- Subtotal -->
            <div class="flex justify-between">
              <span>{{ $t('shopElements.cart.subTotal') }}</span>
              <span class="text-gray-800 dark:text-gray-100" v-html="cart.subtotal" />
            </div>
            <!-- Shipping -->
            <div v-if="cart.shippingTotal" class="flex justify-between">
              <span>{{ $t('shopElements.cart.generalShipping') }}</span>
              <span class="text-gray-800 dark:text-gray-100">
                {{ parseFloat(cart.shippingTotal) > 0 ? '+' : '' }} <span v-html="cart.shippingTotal"></span>
              </span>
            </div>
            <!-- Discount -->
            <div v-if="cart.discountTotal && parseFloat(cart.rawDiscountTotal || '0') > 0" class="flex justify-between">
              <span>{{ $t('shopElements.cart.discount') }}</span>
              <span class="text-primary dark:text-primary-light">- <span v-html="cart.discountTotal" /></span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <button to="/cart" variant="outline" @click="toggleCart()">
              {{ $t('shopElements.cart.viewCart') }}
            </button>
            <button
              :to="isCartMutating ? undefined : '/checkout'"
              class="flex-1"
              variant="primary"
              @click="!isCartMutating && toggleCart()"
              :disabled="isCartMutating">
              {{ $t('shopElements.cart.checkout') }} <span v-html="cart.total" />
            </button>
          </div>
        </div>
      </template>
      <!-- Empty Cart Message -->
      <EmptyCartMessage v-else-if="cart && cart.isEmpty" />
      <!-- Cart Loading -->
      <div v-else class="flex flex-col items-center justify-center flex-1 mb-20">
        <LoadingIcon />
      </div>

    <!-- Cart Loading Overlay -->
    <div v-if="isCartMutating" class="absolute inset-0 flex items-center justify-center bg-white/25 dark:bg-gray-800/50">
      <LoadingIcon />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
