<script lang="ts">
import {defineComponent} from 'vue'

interface ReviewsScoreData {
  reviewCount: number;
  authorEmail: string;
  reviews: {
    averageRating: number;
  },
  errorMessage: string;
  successMessage: string;
  numberAndPercentageOfEachRating: [];
  show: boolean;
}
export default defineComponent({
  name: "ReviewsScore",
  data(){
    return {
      rating: 50,
      hoverred: 50,
      size: 50,
      reviewCount: 50,
      authorEmail: "",
      reviews: {
        averageRating: 50
      },
      isPending: true,
      errorMessage: "",
      successMessage: "",
      numberAndPercentageOfEachRating: [],
      show: true
    } as ReviewsScoreData
  },
  methods: {
    setHovered(){

    },
    resetHovered(){

    },
    addComment(){

    }
  }
})
</script>

<template>
  <div>
    <h4 v-if="reviewCount" class="font-semibold text-2xl text-gray-900 dark:text-white">{{ $t('productElements.reviewsScore.customerReviews') }}</h4>
    <h4 v-else class="font-semibold text-2xl text-gray-900 dark:text-white">{{ $t('productElements.reviewsScore.noReviews') }}</h4>
    <div v-if="reviewCount" class="my-2">
      <StarRating :rating="reviews.averageRating" :hide-count="true" class="text-sm mr-2" />
      <span class="text-sm dark:text-gray-300"> {{ $t('productElements.reviewsScore.basedOn') }} {{ reviewCount }} {{ $t('productElements.reviewsScore.reviews') }}</span>
    </div>
    <div class="my-4 bars">
      <div v-for="rating in numberAndPercentageOfEachRating" :key="rating" class="flex gap-4 items-center">
        <div class="flex text-sm gap-1 items-center dark:text-gray-300">
          {{ "productElements.reviewsScore.rating "}}
          <Icon class="text-yellow-400" name="ion:star" />
        </div>
        <div class="flex-1 relative">
          <div class="rounded-full bg-gray-200 dark:bg-gray-700 h-2.5 w-full"></div>
          <div class="rounded-full bg-yellow-400 dark:bg-yellow-500 h-2.5 top-0 left-0 absolute" :style="{ width: rating.percentage + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-xl mb-2 text-gray-900 dark:text-white font-semibold">{{$t('productElements.reviewsScore.shareYourThoughts')}}Share your thoughts</div>
    <div class="text-sm mb-4 text-gray-600 dark:text-gray-400">{{$t("productElements.reviewsScore.ifYouHaveUsed")}}If you have used this product, we would love to hear about your experience.</div>
    <Button @click="show = !show" variant="outline" class="w-full mb-4">
      {{ show ? $t("productElements.reviewsScore.shopClose")  : $t("productElements.reviewsScore.shopReview") }}
    </Button>
    <transition class="ease-in-out transform transition-all" name="scale-y">
      <form v-if="show" @submit.prevent="addComment" class="writeReview">
        <div class="w-full text-gray-500 dark:text-gray-400">
          <div class="p-5 mt-3 grid gap-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div class="block text-center mb-1.5">
              <label class="text-center text-sm block relative m-auto dark:text-gray-300"
              >{{ $t("productElements.reviewsScore.shopRateReview") }} <span class="text-red-500">*</span></label
              >
              <div class="gap-1 flex justify-center mt-2 relative">
                <label
                  v-for="i in 5"
                  :key="i"
                  class="grid p-1 rounded-sm"
                  :class="rating < i && i > hovered ? 'disable-star' : 'checked-star'"
                  @mouseover="setHovered(i)"
                  @mouseout="resetHovered">
                  <input type="radio" class="overflow-hidden hidden appearance-none opacity-0 absolute" name="rating" :value="i" v-model="rating" required />
                  <Icon name="ion:star" :size="size + ''" />
                </label>
              </div>
            </div>
            <div class="w-full col-span-full">
              <label for="content" class="text-sm mb-0.5 dark:text-gray-300">{{ $t('productElements.reviewsScore.rateContent') }} <span class="text-red-500">*</span></label>
              <textarea class="w-full" id="content" placeholder="Great Quality" v-model="content" required></textarea>
            </div>
            <div class="w-full col-span-full">
              <label for="author" class="text-sm mb-0.5 dark:text-gray-300">{{ $t('productElements.reviewsScore.rateEmail') }} <span class="text-red-500">*</span></label>
              <input
                class="w-full"
                id="author"
                placeholder="example@example.com"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                v-model="authorEmail"
                required />
            </div>
            <Transition name="scale-y" mode="out-in">
              <div v-if="errorMessage" class="my-4 text-sm text-red-500" v-html="errorMessage"></div>
            </Transition>
            <Transition name="scale-y" mode="out-in">
              <div v-if="successMessage" class="my-4 text-sm text-green-500" v-html="successMessage"></div>
            </Transition>
            <div class="w-full col-span-full text-center mt-3">
              <Button :loading="isPending" type="submit" variant="primary" class="w-full">
                {{ $t('productElements.reviewsScore.submit') }}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.disable-star {
  @apply bg-white dark:bg-gray-700 shadow-xs text-gray-300 dark:text-gray-600 border border-gray-300 dark:border-gray-600;
  transition: 0.15s ease-in-out;
}
.checked-star {
  @apply text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-400 dark:border-amber-500;
  transition: 0.15s ease-in-out;
  box-shadow: 0 0px 4px 0 rgb(249 191 59 / 21%);
}
.writeReview input,
.writeReview textarea {
  @apply bg-white dark:bg-gray-700 border rounded-md outline-hidden border-gray-300 dark:border-gray-600 shadow-inner w-full py-2 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500;
}

.writeReview input:focus,
.writeReview textarea:focus {
  @apply ring-2 ring-primary/20 border-primary;
}
</style>
