<script lang="ts">
import {RouterLink} from "vue-router";
import CategoryCard from "@/components/e-commerce/CategoryCard.vue";
import HeroBanner from "@/components/e-commerce/generalElements/HeroBanner.vue";

export default {
    name: "HomeView",
    components: {RouterLink, CategoryCard,HeroBanner},
    props: {

    },
    data(){
      return {
        productCategories: [],
        popularProducts: ""
      }
    }
}
</script>

<template>
  <main>
    <HeroBanner />

    <div class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between"
    >
      <img src="/Luke-fashion-logo.png" alt="Brand 1" width="132" height="35" />
      <img src="/shop-brand/tokyo-life.png"  alt="Brand 2" width="119" height="30" />
      <img src="/Luke-fashion-logo.png"  alt="Brand 3" width="49" height="48" />
      <img src="/Luke-fashion-logo.png"  alt="Brand 4" width="78" height="30" />
      <img src="/Luke-fashion-logo.png"  alt="Brand 5" width="70" height="44" />
      <img src="/Luke-fashion-logo.png"  alt="Brand 6" width="132" height="40" />
    </div>
  </main>

  <section class="container my-16">
    <div class="flex items-end justify-between">
      <h2 class="text-lg font-semibold md:text-2xl dark:text-white">{{$t('views.orderSummaryView.shopByCategory')}}</h2>
      <RouterLink
        class="text-primary-dark dark:text-primary" to="/categories"
        >{{$t('views.orderSummaryView.viewAll')}}</RouterLink>
    </div>
    <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
      <CategoryCard v-for="(category,i) in productCategories" :key="i" class="w-full" :node="category"/>
    </div>
  </section>

  <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
    <div class="flex items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg">
      <img src="/Luke-fashion-logo.png" width="60" height="60" alt="Free Shipping" loading="lazy" />
      <div>
        <h3 class="text-xl font-semibold dark:text-white">{{$t('views.homeView.freeShipping')}}</h3>
        <p class="text-sm dark:text-gray-300">{{$t('views.homeView.freeShippingOnOrder')}}</p>
      </div>
    </div>
    <div class="flex items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg">
      <img src="/Luke-fashion-logo.png" width="60" height="60" alt="Secure Payment" loading="lazy" />
      <div>
        <h3 class="text-xl font-semibold dark:text-white">{{$t('views.homeView.paymentSource')}}</h3>
        <p class="text-sm dark:text-gray-300">{{$t('views.homeView.yourPaymentsAreSafe')}}</p>
      </div>
    </div>
    <div class="flex items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg">
      <img src="/Luke-fashion-logo.png" width="60" height="60" alt="Support 24/7" loading="lazy"/>
      <div>
        <h3 class="text-xl font-semibold dark:text-white">{{$t('views.homeView.support24/7')}}</h3>
        <p class="text-sm dark:text-gray-300">{{$t('views.homeView.onlineSupport')}}</p>
      </div>
    </div>
  </section>
  <section class="container my-16" v-if="popularProducts">
    <div><h2 class="text-lg font-semibold md:text-2xl dark:text-white">

    </h2>
    <RouterLink class="font-medium text-primary-dark dark:text-primary" to="">{{$t('views.homeView.viewAll')}}</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
