<script lang="ts">
import {defineComponent} from 'vue'
import ClientOnly from "vue-client-only";
import Logo from "@/components/e-commerce/generalElements/Logo.vue";
import WebsiteShortDescription
  from "@/components/e-commerce/shopElements/WebsiteShortDescription.vue";
import LangSwitcher from "@/components/e-commerce/ui/LangSwitcher.vue";
import ColorModeSwitcher from "@/components/e-commerce/ui/ColorModeSwitcher.vue";

interface AppFooterData {
  wishlistLink: string;
  wooNuxtVersionInfo: string;
}


export default defineComponent({
  name: "AppFooter",
  components: {
    ClientOnly,
    Logo,
    WebsiteShortDescription,
    LangSwitcher,
    ColorModeSwitcher
  },
  data() {
    return {
      wishlistLink: "",
      wooNuxtVersionInfo: ""
    } as AppFooterData
  }
})
</script>

<template>
  <footer class="bg-white dark:bg-gray-800 order-last">
    <div class="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
      <div class="mr-auto">
        <Logo/>
        <WebsiteShortDescription/>
        <div class="inline-flex gap-2 justify-start mt-8">
          <LangSwitcher/>

          <ColorModeSwitcher/>

        </div>
      </div>
      <div class="w-[42.857%] lg:w-auto">
        <div class="mb-1 font-semibold text-gray-900 dark:text-white">
          {{ $t('generalElements.appFooter.information') }}
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-300">
          <a class="py-1.5 block"
             href="https://github.com/scottyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce"
             target="_blank">
            {{ $t('generalElements.appFooter.about') }}
          </a>
          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.careers') }}</a>
          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.press') }}</a>
          <a href="https://woonuxt.com/faq" class="py-1.5 block" rel="noreferrer" target="_blank">FAQ's</a>
        </div>
      </div>
      <div class="w-[42.857%] lg:w-auto">
        <div class="mb-1 font-semibold text-gray-900 dark:text-white">
          {{ $t('generalElements.appFooter.products') }}
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-300">

          <RouterLink to="/products" class="py-1.5 block">
            {{ $t('generalElements.appFooter.newArrivals') }}
          </RouterLink>
          <RouterLink to="/products?orderby=rating&order=ASC&filter=rating[1]" class="py-1.5 block">
            {{ $t('generalElements.appFooter.topRated') }}
          </RouterLink>

          <RouterLink href="/" class="py-1.5 block">
            {{ $t('generalElements.appFooter.giftCards') }}
          </RouterLink>
        </div>
      </div>
      <div class="w-[42.857%] lg:w-auto">
        <div class="mb-1 font-semibold text-gray-900 dark:text-white">
          {{ $t('generalElements.appFooter.customerService') }}
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-300">

          <RouterLink to="/contact" class="py-1.5 block"></RouterLink>
          <div>
            <a href="/contact"
               class="py-1.5 block">{{ $t('generalElements.appFooter.contactUs') }}</a>
          </div>

          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.shippingReturns') }}</a>
          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.privacyPolicy') }}</a>
          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.termsConditions') }}</a>
        </div>
      </div>
      <div class="w-[42.857%] lg:w-auto">
        <div class="mb-1 font-semibold text-gray-900 dark:text-white">
          {{ $t('generalElements.appFooter.myAccount') }}
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-300">

          <RouterLink to="/my-account/" class="py-1.5 block">
            {{ $t('generalElements.appFooter.myAccount') }}
          </RouterLink>


          <RouterLink to="/my-account/?tab=orders" class="py-1.5 block">
            {{ $t('generalElements.appFooter.orderHistory') }}
          </RouterLink>


          <RouterLink :to="wishlistLink" class="py-1.5 block">
            {{ $t('generalElements.appFooter.wishlist') }}
          </RouterLink>


          <a href="/" class="py-1.5 block">{{ $t('generalElements.appFooter.newsLetter') }}</a>
        </div>
      </div>
    </div>
    <div
      class="container border-t border-gray-200 dark:border-gray-700 flex items-center justify-center mb-4">
      <div class="copywrite">
        <p class="py-4 text-xs text-center text-gray-600 dark:text-gray-400">
          <a href="https://woonuxt.com"
             :title="`WooNuxt v${wooNuxtVersionInfo}`">{{ `WooNuxt v${wooNuxtVersionInfo}` }}</a> -
          by
          <a href="https://scottyzen.com" title="Luke Ngo - Web/Mobile Developer" target="_blank">Luke
            Ngo</a>
        </p>
      </div>
      <SocialIcons class="ml-auto"/>
    </div>
  </footer>
</template>

<style scoped lang="postcss">

</style>
