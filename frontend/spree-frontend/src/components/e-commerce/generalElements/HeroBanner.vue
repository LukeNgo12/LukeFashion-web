<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeroBanner"
})
</script>

<template>
  <div class="relative mx-auto">
<!--    <img-->
<!--      width="1400"-->
<!--      height="800"-->
<!--      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"-->
<!--      src="/images/hero-4.jpg"-->
<!--      alt="Hero image"-->
<!--      loading="eager"-->
<!--      sizes="sm:100vw md:1400px"-->
<!--      :preload="{ fetchPriority: 'high' }"-->
<!--      placeholder=""-->
<!--      placeholder-class="blur-xl" />-->
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-linear-to-l from-gray-200 sm:bg-none dark:text-gray-700">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">{{$t('generalElements.heroBanner.justLanded')}}</h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">{{$t('generalElements.heroBanner.theNewYear')}}</h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p>{{$t('generalElements.heroBanner.ourLatestCollection')}}</p>
      </div>
      <RouterLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-800" to="/products">{{$t('generalElements.heroBanner.shopNow')}}</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
