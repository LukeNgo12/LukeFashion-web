<script lang="ts">
import {defineComponent} from 'vue'
import { RouterLink } from 'vue-router'

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
RouterLink
  },
  props:{

  },
  data(){
    return {
      node: {
        slug: "",
        averageRating: 5,
        salePrice: 600,
        name:"",
        regularPrice: "",
        reviewCount: 600
      },
      productLink: "",
      imgWidth: 50,
      imgHeight: 50,
      sliderImages: [{
        src : "",
        alt: "",
        title: "",
        key: ""
      }],
      index: 4,
      currentSlide: 6,
      storeSettings: {
        showReviews: true
      }

    } as ProductCardData
  },
  methods: {
    updateCurrentSlide(){

    },
    scrollToSlide(dot: any){

    }
  }
})
</script>

<template>
  <div class="relative group">
    <div class="relative block">
      <SaleBadge :node class="absolute z-10 top-2 right-2" />
      <div
        ref="sliderRef"
        class="no-slider flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x overscroll-x-contain overscroll-y-auto [-webkit-overflow-scrolling:touch]"
        @scroll.passive="updateCurrentSlide">
        <template v-for="(image, slideIndex) in sliderImages" :key="image.key">
          <RouterLink
            v-if="node.slug"
            class="product-card-slide block flex-[0_0_100%] snap-start snap-always aspect-8/9 overflow-hidden rounded-lg"
            :data-index="slideIndex"
            :to="productLink">
            <img
              :width="imgWidth"
              :height="imgHeight"
              :src="image.src"
              :alt="image.alt"
              :title="image.title"
              :loading="slideIndex === 0 && index <= 3 ? 'eager' : 'lazy'"
              :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
              class="object-cover object-top w-full h-full rounded-lg"
              placeholder=""
              placeholder-class="blur-xl" />
          </RouterLink>
          <div v-else class="product-card-slide block flex-[0_0_100%] snap-start snap-always aspect-8/9 overflow-hidden rounded-lg" :data-index="slideIndex">
            <img
              :width="imgWidth"
              :height="imgHeight"
              :src="image.src"
              :alt="image.alt"
              :title="image.title"
              :loading="slideIndex === 0 && index <= 3 ? 'eager' : 'lazy'"
              :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
              class="object-cover object-top w-full h-full rounded-lg"
              placeholder=""
              placeholder-class="blur-xl" />
          </div>
        </template>
      </div>
      <div v-if="sliderImages.length > 1" class="absolute flex gap-1 bottom-2 justify-self-center">
        <button
          v-for="(image, dotIndex) in sliderImages"
          :key="`dot-${image.key}`"
          class="product-card-dot rounded-full h-1.5 w-1.5 transition-colors cursor-pointer"
          :class="dotIndex === currentSlide ? 'bg-white' : 'bg-gray-400/60'"
          type="button"
          tabindex="-1"
          :aria-label="`View image ${dotIndex + 1} of ${sliderImages.length}`"
          @click="scrollToSlide(dotIndex)" />
      </div>
    </div>
    <div class="p-2">
      <StarRating v-if="storeSettings.showReviews" :rating="node.averageRating ?? undefined" :count="node.reviewCount ?? undefined" />
      <RouterLink v-if="node.slug" :to="productLink" :title="node.name || undefined">
        <h2 class="mb-2 font-light leading-tight text-gray-900 dark:text-gray-200 group-hover:text-primary">{{ node.name }}</h2>
      </RouterLink>
      <ProductPrice class="text-sm" :sale-price="node.salePrice ?? undefined" :regular-price="node.regularPrice ?? undefined" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
