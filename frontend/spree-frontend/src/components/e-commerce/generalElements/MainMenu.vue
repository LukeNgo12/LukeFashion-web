<script lang="ts">
import {defineComponent} from 'vue'
import {useHelpers} from "@/composables/useHelpers.ts";
import Button from "@/components/e-commerce/ui/Button.vue";
import {useCart} from "@/composables/useCart.ts";
import {RouterLink} from "vue-router";

export default defineComponent({
  name: "MainMenu",
  components: {
    Button,
    RouterLink
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
    <router-link to="/">{{$t('generalElements.mainMenu.home')}}</router-link>
    <router-link to="/productsList">{{$t('generalElements.mainMenu.products')}}</router-link>
    <router-link to="/categories">{{$t('generalElements.mainMenu.category')}}</router-link>
    <router-link to="/contact">{{$t('generalElements.mainMenu.contact')}}</router-link>

    <router-link class="lg:hidden" :to="wishlistLink" :prefetch="false">{{$t('generalElements.mainMenu.wishList')}}</router-link>
    <router-link class="lg:hidden" to="/my-account" @click="navigateToLogin(route.fullPath)" :prefetch="false">{{$t('generalElements.mainMenu.myAccount')}}</router-link>
  </nav>
</template>

<style scoped lang="postcss">

</style>
