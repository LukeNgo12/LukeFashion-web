<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";

export default defineComponent({
  name: "Pagination",
  components: {
    IonIcon
  },
  data(){
    return {
      numberOfPages: 50,
      page: 1
    }
  },
  methods:{
    prevSrc(page : any){

    },
    numberSrc(pageNumber : any){

    },
    nextSrc(page : any){

    }
  }
})
</script>

<template>
  <div class="flex justify-center mt-8 mb-16 col-span-full tabular-nums">
    <!-- Pagination -->
    <nav v-if="numberOfPages && numberOfPages > 1" class="inline-flex self-end -space-x-px rounded-md shadow-xs isolate" aria-label="Pagination">
      <!-- PREV -->
      <RouterLink
        :to="prevSrc(page)"
        class="prev"
        :disabled="page == 1"
        :class="{ 'cursor-not-allowed': page == 1 }"
        :aria-disabled="page == 1"
        aria-label="Previous">
        <ion-icon name="ion:chevron-back-outline" size="20" class="w-5 h-5" />
      </RouterLink>

      <!-- NUMBERS -->
      <RouterLink
        v-for="pageNumber in numberOfPages"
        :key="pageNumber"
        :to="numberSrc(pageNumber)"
        :aria-current="pageNumber === page ? 'page' : undefined"
        class="page-number">
        {{ pageNumber }}
      </RouterLink>

      <!-- NEXT -->
      <RouterLink
        :to="nextSrc(page)"
        class="next"
        :disabled="page === numberOfPages"
        :class="{ 'cursor-not-allowed': page === numberOfPages }"
        :aria-disabled="page === numberOfPages"
        aria-label="Next">
        <ion-icon name="ion:chevron-forward-outline" size="20" class="w-5 h-5" />
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.prev,
.next,
.page-number {
  @apply bg-white dark:bg-gray-800 border font-medium border-gray-300 dark:border-gray-600 text-sm p-2 text-gray-500 dark:text-gray-400 relative inline-flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10;
}

.prev {
  @apply rounded-l-md;
}

.next {
  @apply rounded-r-md;
}

.page-number {
  @apply px-3;
}

.page-number[aria-current='page'] {
  @apply bg-primary/10 dark:bg-primary/20 border-primary dark:border-primary border text-primary dark:text-primary z-10;
}
</style>
