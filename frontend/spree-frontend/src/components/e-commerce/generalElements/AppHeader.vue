<script lang="ts">
import {defineComponent, Transition} from 'vue'
import SearchTrigger from "@/components/e-commerce/generalElements/SearchTrigger.vue";
import SignInLink from "@/components/e-commerce/SignInLink.vue";
import CartTrigger from "@/components/e-commerce/cartElements/CartTrigger.vue";
import ProductSearch from "@/components/e-commerce/shopElements/ProductSearch.vue";
import MenuTrigger from "@/components/e-commerce/generalElements/MenuTrigger.vue";
import Logo from "@/components/e-commerce/generalElements/Logo.vue";
import MainMenu from "@/components/e-commerce/generalElements/MainMenu.vue";

interface AppHeaderData {
  isShowingSearch: boolean;
}


export default defineComponent({
  name: "AppHeader",
  components: {
    SearchTrigger,
    SignInLink,
    CartTrigger,
    MenuTrigger,
    Logo,
    MainMenu,
    ProductSearch
  },
  data(){
    return {
      isShowingSearch: true,

    } as AppHeaderData
  }
})
</script>

<template>
  <header class="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm shadow-gray-200 dark:shadow-gray-900 border-b border-transparent dark:border-gray-700">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <MenuTrigger class="lg:hidden" />
        <Logo class="w-40" />
      </div>
      <MainMenu class="items-center hidden gap-6 text-sm text-gray-500 dark:text-gray-400 lg:flex lg:px-4" />
      <div class="flex justify-end items-center w-40 flex-1 ml-auto gap-4 md:gap-6">
        <ProductSearch class="hidden sm:inline-flex max-w-80 w-[60%]" />
        <SearchTrigger />
        <div class="flex gap-4 items-center">

          <SignInLink />
          <CartTrigger />
        </div>
      </div>
    </div>
    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 -mt-1 sm:hidden" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
</template>

<style scoped lang="postcss">

</style>
