<script lang="ts">
import {defineComponent} from 'vue'
import {RouterLink, useRoute} from "vue-router";
import SEOHead from "@/components/e-commerce/generalElements/SEOHead.vue";
import ProductImageGallery from "@/components/e-commerce/productElements/ProductImageGallery.vue";
import StarRating from "@/components/e-commerce/productElements/StarRating.vue";
import ProductPrice from "@/components/e-commerce/productElements/ProductPrice.vue";
import StockStatus from "@/components/e-commerce/productElements/StockStatus.vue";
import AttributeSelections from "@/components/e-commerce/productElements/AttributeSelections.vue";
import WishlistButton from "@/components/e-commerce/productElements/WishlistButton.vue";
import ShareButton from "@/components/e-commerce/productElements/ShareButton.vue";
import ProductTabs from "@/components/e-commerce/productElements/ProductTabs.vue";
import ProductRow from "@/components/e-commerce/shopElements/ProductRow.vue";
import {PRODUCTS} from "@/data/products.ts";
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: "ProductView",
  setup(){
    const route = useRoute();
    const productByIdList = PRODUCTS.filter(product => {
      return product.frontendId === route.params.productFrontendId;
    })
    const productById = productByIdList[0]
    const { locale, t } = useI18n()

    // Change locale
    return {route,productById, t,locale}
  },
  components: {
    RouterLink,
    SEOHead,
    ProductImageGallery,
    StarRating,
    ProductPrice,
    StockStatus,
    AttributeSelections,
    WishlistButton,
    ShareButton,
    ProductTabs,
    ProductRow

  },
  data(){
    return {
      quantity: "",
      productImage: "",
      averageRating: 5,
      reviewCount: 5,
      stockStatus: "active",

      productGallery: {

      },
      displayProduct: {

      },
      activeVariation: {

      },
      storeSettings: {
        showReviews: true
      },
      priceTarget: {
        salePrice: 100,
        regularPrice: 100
      },
      mergeLiveStockStatus: true,
      product: {
        shortDescription: "",
        description: "",
        sku: "",
        attributes: {
          nodes: []
        },
        variation: "",
        productCategories: {
          nodes: [
            {
              databaseId: "",
              slug: "",
              name: ""
            }
          ]
        },
        databaseId: "",
        slug: "",
        name: ""
      },
      defaultAttributes: [],
      updateSelectedVariations: true,
    }
  },
  methods: {
    handleAddToCart(){

    }
  },
})
</script>

<template>
  <main v-if="productById" class="container relative py-6 xl:max-w-7xl">
    <div >
<!--      <SEOHead :info="product" />-->
<!--      <Breadcrumb :product class="mb-6" />-->
      {{ console.log(productById) }}
      <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
<!--        <ProductImageGallery-->
<!--          :main-image="productImage"-->
<!--          :gallery="productGallery"-->
<!--          :node="displayProduct"-->
<!--          :activeVariation="activeVariation-->
<!--          || {}" />-->
        <img  class="relative flex-1 skeleton" src="/Luke-fashion-logo.png" :alt="product.name" />

        <div class="w-full lg:max-w-md xl:max-w-lg md:py-2">
          <div class="flex justify-between mb-4">
            <div class="flex-1">
              {{console.log(locale)}}

              <h1 v-if="locale" class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold">
                {{ productById.productName   }}
<!--                <LazyWPAdminLink :link="`/wp-admin/post.php?post=${"product.databaseId"}&action=edit`">Edit</LazyWPAdminLink>-->
              </h1>
              <StarRating :rating="averageRating" :count="reviewCount"  />
            </div>
            <ProductPrice class="text-xl" :sale-price="productById?.singularPrice" :regular-price="productById?.regularPrice" />
          </div>

          <div class="grid gap-2 my-8 text-sm empty:hidden">
            <div class="flex items-center gap-2">
              <span class="text-gray-400">{{ $t('components.signInLink.availability') }}: </span>
              <StockStatus :stockStatus="stockStatus" @updated="mergeLiveStockStatus" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-gray-400">{{ $t('views.productView.sku') }}: </span>
              <span class="">{{ product?.sku || 'N/A' }}</span>
            </div>
          </div>

          <div class="mb-8 font-light prose" v-html="product.shortDescription || product.description" />

          <hr class="border-gray-300" />

          <form @submit.prevent="handleAddToCart">
            <AttributeSelections
              class="mt-4 mb-8"
              :attributes="product.attributes.nodes"
              :defaultAttributes="defaultAttributes"
              :variations="[]"
              @attrs-changed="updateSelectedVariations" />
            <div
              class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 shadow-lg bg-white/90 md:static md:bg-transparent md:p-0 md:shadow-none">
              <input
                v-model="quantity"
                type="number"
                min="1"
                aria-label="Quantity"
                class="flex items-center justify-center w-20 gap-4 p-2 text-left bg-white border border-gray-300 rounded-lg focus:outline-hidden" />
              <button class="flex-1 w-full" type="submit">
                {{ $t('components.signInLink.link') }}
              </button>
            </div>
            <a
              :href="'/link'"
              target="_blank"
              class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-37.5 p-2.5 gap-4 items-center justify-center focus:outline-hidden hover:bg-gray-700">
              {{ `View product` }}
            </a>
          </form>

          <div >
            <div class="grid gap-2 my-8 text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">{{ $t('components.signInLink.category', 2) }}:</span>
                <div class="product-categories">
                  <router-link
                    :to="`/product-category/`"
                    class="hover:text-primary"
                  >{{ productById.categories[0] }}<span class="comma">, </span>
                  </router-link>
                </div>
              </div>
            </div>
            <hr class="border-gray-300" />
          </div>

          <div class="flex flex-wrap gap-4">
<!--            <WishlistButton :product />-->
<!--            <ShareButton :product />-->
          </div>
        </div>
      </div>
      <div  class="my-32">
<!--        <ProductTabs :product />-->
      </div>
      <div class="my-32" >
        <div class="mb-4 text-xl font-semibold">{{ $t('components.signInLink.youMayLike') }}</div>
<!--        <ProductRow :products="product.related.nodes" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5" />-->
      </div>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.product-categories > a:last-child .comma {
  display: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  opacity: 1;
}

/* Dark mode uses color-scheme to style native controls */
.dark input[type='number'] {
  color-scheme: dark;
}
</style>
