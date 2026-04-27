<script lang="ts">
import {defineComponent, Transition} from 'vue'
import {useCart} from "@/composables/useCart.ts";
import {useHelpers} from "@/composables/useHelpers.ts";
import AppHeader from "@/components/e-commerce/generalElements/AppHeader.vue";

export default defineComponent({
  name: "Error",
  setup(){
    const { isShowingCart, toggleCart } = useCart();
    const { isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass } = useHelpers();
    return { isShowingCart, toggleCart ,isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass }
  },
  components: {
    AppHeader
  },
  data(){
    return {
      isShowingCart: true,
      isShowingMobileMenu: true,
      error: {
        message: "",
        statusCode: 500
      }
    }
  },
  methods: {
    closeCartAndMenu(){

    }
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <Transition name="slide-from-right">
      <LazyCart v-if="isShowingCart" />
    </Transition>

    <Transition name="slide-from-left">
      <LazyMobileMenu v-if="isShowingMobileMenu" />
    </Transition>

    <div class="flex flex-col items-center justify-center flex-1 gap-4 min-h-[500px]">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white">Error {{ error?.statusCode || '404' }}</h1>
      <p v-if="error?.message" class="text-lg text-gray-600 dark:text-gray-400">{{ error.message }}</p>
    </div>

    <Transition name="fade">
      <div v-if="isShowingCart || isShowingMobileMenu" class="bg-black opacity-25 inset-0 z-40 fixed" @click="closeCartAndMenu" />
    </Transition>

    <LazyAppFooter hydrate-on-visible />
  </div>
</template>

<style scoped lang="postcss">

</style>
