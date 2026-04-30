<script lang="ts">
import {defineComponent} from 'vue'
import {RouterLink} from 'vue-router'
import SaleBadge from "@/components/e-commerce/productElements/SaleBadge.vue";
import StarRating from "@/components/e-commerce/productElements/StarRating.vue";
import ProductPrice from "@/components/e-commerce/productElements/ProductPrice.vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface ProductCardData {
  node: {
    slug: string,
    averageRating: number,
    salePrice: number,
    name: string,
    regularPrice: string,
    reviewCount: number
  },
  productLink: string,
  imgWidth: number,
  imgHeight: number,
  sliderImages: {
    src: string,
    alt: string,
    title: string,
    key: string,
  }[],
  index: number,
  currentSlide: number,
  storeSettings: {
    showReviews: boolean
  }
}

export default defineComponent({
  name: "ProductCard",
  components: {
    Button,
    RouterLink, SaleBadge, StarRating, ProductPrice
  },
  props: {
    sliderImages: {type: Object, default: {}},
    node: {type: Object, default: {}}
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.node.id)
  },
  methods: {
    updateCurrentSlide() {

    },
    scrollToSlide(dot: any) {

    }
  },
})
</script>

<template>
  <div class="relative group">
    <div class="relative block">
      <SaleBadge class="absolute z-10 top-2 right-2"/>
      <div
        ref="sliderRef"
        class="no-slider flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain overscroll-y-auto [-webkit-overflow-scrolling:touch]"
        @scroll.passive="updateCurrentSlide"
      >
        <!--        <template v-for="(image, slideIndex) in sliderImages" :key="image.key">-->
        <RouterLink
          class="product-card-slide block flex-[0_0_100%] snap-start snap-always aspect-8/9 overflow-hidden rounded-lg"
          :data-index="100"
          to="/productLink">
          <img

            src="/Luke-fashion-logo.png"
            alt="image.alt"
            sizes="`sm:${100 / 2}px md:${100}px`"
            class="object-cover object-top w-full h-full rounded-lg"

          />
        </RouterLink>
        <div
          class="product-card-slide block flex-[0_0_100%] snap-start snap-always aspect-8/9 overflow-hidden rounded-lg"
          data-index="1">
          <img
            :width="500"
            :height="500"
            src="/Luke-fashion-logo.png"
            alt="alt"
            title="title"
            :sizes="`sm:${500 / 2}px md:${500}px`"
            class="object-cover object-top w-full h-full rounded-lg"
          />
        </div>

      </div>
      <div class="absolute flex gap-1 bottom-2 justify-self-center">
        <button
          key="`dot-image-key`"
          class="product-card-dot rounded-full h-1.5 w-1.5 transition-colors cursor-pointer"
          type="button"
          tabindex="-1"
          aria-label="`View image 1 of 1`"
        >Button
        </button>
      </div>
    </div>
    <div class="p-2">
      <StarRating/>
      <RouterLink to="/productLink">
        <h2
          class="mb-2 font-light leading-tight text-gray-900 dark:text-gray-200 group-hover:text-primary">
          {{node.productName}}</h2>
      </RouterLink>

      <ProductPrice class="text-sm"
                    :regular-price="node.regularPrice"
                    :salePrice="node.salePrice"

      />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
