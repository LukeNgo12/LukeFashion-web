<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import {logoIonic} from "ionicons/icons";
import Button from "@/components/e-commerce/ui/Button.vue";
import ProductPrice from "@/components/e-commerce/productElements/ProductPrice.vue";
import QuantityInput from "@/components/e-commerce/cartElements/QuantityInput.vue";
import SwipeCard from "@/components/e-commerce/cartElements/SwipeCard.vue";

interface CartCardData {
  isOptimisticItem: boolean;
  salePercentage: number;
  isLowStock: boolean;
  productType: {
    name: string,
    salePrice: number,
    regularPrice: number,
    image: {
      altText: string,
      title: string
    },


  };
  imgScr: string,
  productSlug: string,
  storeSettings: {
    showMoveToWishlist: boolean;
  },
  item: [],

}

export default defineComponent({
  name: "CartCard",
  components: {
    SwipeCard,
    IonIcon,
    Button,
    ProductPrice,
    QuantityInput
  },
  data() {
    return {
      isOptimisticItem: true,
      salePercentage: 100,
      isLowStock: true,
      productType: {
        name: "",
        salePrice: 100,
        regularPrice: 100,
        image: {
          altText: "",
          title: ""
        }
      },
      imgScr: "",
      productSlug: "",
      storeSettings: {
        showMoveToWishlist: true
      },
      item: []
    } as CartCardData

  },
  methods: {
    moveToWishList(){

    },
    removeItem(){

    }
  },

})
</script>

<template>
  <SwipeCard :disabled="isOptimisticItem" @remove="removeItem">
    <div v-if="productType" class="flex items-center gap-3 group">
      <RouterLink :to="productSlug">
        <img
          width="64"
          height="64"
          class="w-16 h-16 rounded-md skeleton"
          :src="imgScr"
          :alt="productType.image?.altText || productType.name"
          :title="productType.image?.title || productType.name"
          loading="lazy" />
      </RouterLink>
      <div class="flex-1">
        <div class="flex gap-x-2 gap-y-1 flex-wrap items-center">
          <RouterLink class="leading-tight line-clamp-2 text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary" :to="productSlug">{{
              productType.name
            }}</RouterLink>
          <span
            v-if="productType.salePrice"
            class="text-[10px] border-green-200 dark:border-green-800 leading-none bg-green-100 dark:bg-green-900/30 inline-block p-0.5 rounded-sm text-green-600 dark:text-green-400 border">
            {{$t('cartElements.cartCard.save')}} {{ salePercentage }}
          </span>
          <span
            v-if="isLowStock"
            class="text-[10px] border-yellow-200 dark:border-yellow-800 leading-none bg-yellow-100 dark:bg-yellow-900/30 inline-block p-0.5 rounded-sm text-orange-500 dark:text-orange-400 border">
            {{$t('cartElements.cartCard.lowStock')}}Low Stock
          </span>
        </div>
        <ProductPrice class="mt-1 text-xs" :sale-price="productType.salePrice" :regular-price="productType.regularPrice" />
      </div>
      <div class="inline-flex gap-2 flex-col items-end">
        <QuantityInput :item />
        <div class="text-xs text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 flex leading-none items-center">
          <Button
            v-if="storeSettings.showMoveToWishlist"
            class="mr-2 pr-2 border-r border-gray-300 dark:border-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="isOptimisticItem"
            @click="moveToWishList"
            type="button">
            {{$t('cartElements.cartCard.moveToWishlist')}}Move to Wishlist
          </Button>
          <Button
            title="Remove Item"
            aria-label="Remove Item"
            @click="removeItem"
            type="button"
            :disabled="isOptimisticItem"
            class="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50">
            <ion-icon name="ion:trash" class="hidden md:inline-block" size="12" />
          </Button>
        </div>
      </div>
    </div>
  </SwipeCard>
</template>

<style scoped lang="postcss">

</style>
