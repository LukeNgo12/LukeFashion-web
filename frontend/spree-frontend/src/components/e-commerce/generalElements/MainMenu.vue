<script lang="ts">
import {defineComponent} from 'vue'
import {useHelpers} from "@/composables/useHelpers.ts";
import Button from "@/components/e-commerce/ui/Button.vue";
import {useCart} from "@/composables/useCart.ts";

export default defineComponent({
  name: "MainMenu",
  components: {
    Button
  },
  setup(){
    const {toggleMobileMenu} = useHelpers()
    const {toggleCart}= useCart()
    return {toggleMobileMenu,toggleCart}
  },
  data(){
    return {
      wishlistLink : "",
      route: {
        fullPath: ""
      }

    }
  },
  methods :{
    navigateToLogin(route: any){

    }
  }

})
</script>

<template>
  <nav>
    <RouterLink to="/">{{$t('generalElements.mainMenu.home')}}</RouterLink>
    <RouterLink to="/products">{{$t('generalElements.mainMenu.products')}}</RouterLink>
    <RouterLink to="/categories">{{$t('generalElements.mainMenu.category')}}</RouterLink>
    <RouterLink to="/contact">{{$t('generalElements.mainMenu.contact')}}</RouterLink>
    <button @click="() => toggleMobileMenu(true)">Mobile Menu</button>
    <button @click="() => toggleCart(true)">Cart</button>
    <RouterLink class="lg:hidden" :to="wishlistLink" :prefetch="false">{{$t('generalElements.mainMenu.wishList')}}</RouterLink>
    <RouterLink class="lg:hidden" to="/my-account" @click="navigateToLogin(route.fullPath)" :prefetch="false">{{$t('generalElements.mainMenu.myAccount')}}</RouterLink>
  </nav>
</template>

<style scoped lang="postcss">

</style>
