<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MainMenu",
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
    <RouterLink class="lg:hidden" :to="wishlistLink" :prefetch="false">{{$t('generalElements.mainMenu.wishList')}}</RouterLink>
    <RouterLink class="lg:hidden" to="/my-account" @click="navigateToLogin(route.fullPath)" :prefetch="false">{{$t('generalElements.mainMenu.myAccount')}}</RouterLink>
  </nav>
</template>

<style scoped lang="postcss">

</style>
