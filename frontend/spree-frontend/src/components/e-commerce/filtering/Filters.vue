<script lang="ts">
import {defineComponent} from "vue";
import OrderByDropdown from "@/components/e-commerce/shopElements/OrderByDropdown.vue";
import PriceFilter from "@/components/e-commerce/filtering/PriceFilter.vue";
import CategoryFilter from "@/components/e-commerce/filtering/CategoryFilter.vue";
import ColorFilter from "@/components/e-commerce/filtering/ColorFilter.vue";
import GlobalFilter from "@/components/e-commerce/filtering/GlobalFilter.vue";

interface Filters {
  isFilterActive: boolean;
  hideCategories: boolean;
  productCategoryTerms: string;
  attributesWithTerms: {
    slug: string,

  }[];
  isFiltersActive: boolean;
  storeSettings: {
    showReviews: boolean
  }
}


export default defineComponent({
  name: "filters",
  components: {
    OrderByDropdown,
    PriceFilter,
    CategoryFilter,
    ColorFilter,
    GlobalFilter,

  },
  data(){
    return {
        isFilterActive: true,
      hideCategories: true,
      productCategoryTerms: "Category Terms",
      attributesWithTerms: [
        {

        }
      ],
      isFiltersActive: true,
      storeSettings: {
          showReviews: true
      }
    } as Filters
  },
  methods: {
    removeBodyClass(option: any){

    },

  }
})
</script>

<template>
  <aside id="filters">
    <OrderByDropdown class="block w-full md:hidden" />
    <div class="relative z-30 grid mb-12 divide-y divide-gray-200 dark:divide-gray-700 filters-container">
      <PriceFilter />
      <CategoryFilter v-if="!hideCategories" :terms="productCategoryTerms" />
      <div v-for="attribute in attributesWithTerms" :key="attribute.slug">
        <ColorFilter v-if="attribute.slug == 'pa_color' || attribute.slug == 'pa_colour'" :attribute />
        <GlobalFilter v-else :attribute />
      </div>
      <OnSaleFilter />
      <LazyStarRatingFilter v-if="storeSettings.showReviews" />
      <LazyResetFiltersButton v-if="isFiltersActive" />
    </div>
  </aside>
  <div class="fixed inset-0 z-50 hidden bg-black dark:bg-black opacity-25 dark:opacity-50 filter-overlay" @click="removeBodyClass('show-filters')"></div>
</template>

<style scoped lang="postcss" >
@reference "#tailwind";

.show-filters .filter-overlay {
  @apply block;
}
.show-filters {
  overflow: hidden;
}

#filters {
  width: 280px;

  & .slider-connect {
    background-color: var(--color-primary);
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.price-input {
  @apply border rounded-xl outline-hidden leading-tight w-full p-2 transition-all;

  &.active {
    @apply border-gray-400 pl-6;
  }
}

@media (max-width: 768px) {
  #filters {
    @apply bg-white dark:bg-gray-800 h-full p-8 transform pl-2 transition-all ease-in-out bottom-0 left-4 -translate-x-[110vw] duration-300 overflow-auto fixed;

    box-shadow:
      -100px 0 0 white,
      -200px 0 0 white,
      -300px 0 0 white;
    z-index: 60;
  }

  .dark #filters {
    box-shadow:
      -100px 0 0 rgb(31 41 55),
      -200px 0 0 rgb(31 41 55),
      -300px 0 0 rgb(31 41 55);
  }

  .show-filters #filters {
    translate: none;
  }
}

.filters-container > div {
  @apply pb-8;
}
</style>
