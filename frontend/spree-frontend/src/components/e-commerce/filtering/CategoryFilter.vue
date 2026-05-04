<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import {chevronDown} from "ionicons/icons";
import {CATEGORIES} from "@/data/categories.ts";


interface CategoryFilterData {
  isOpen: boolean,
  showCount: boolean,
  term: {
    count: boolean,
    slug: string,
    name: string
  }[],
  selectedTerms: string
}

export default defineComponent({
  name: "CategoryFilter",
  components: {
    IonIcon
  },
  props: {
    terms: {type:
        [

      ], required: true},
    label: {
      type: String, default: ''
    },
    openByDefault: {type:Boolean, default: true}
  },
  data(){
    return  {
      isOpen: true,
      showCount: true,
      chevronDown,
      selectedTerms: "",
      categories: CATEGORIES
    } as any
  },
  methods: {
    checkboxChanged(){

    }
  }

})
</script>

<template>
  <div v-if="categories.length">
    <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center text-gray-900 dark:text-white" @click="isOpen = !isOpen">
      <span>{{ label || $t('filtering.categoryFilter.label', 2) }}</span>
      <ion-icon :icon="chevron-down-outline" class="transform text-gray-600 dark:text-gray-300" :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <div v-show="isOpen" class="mt-3 mr-1 max-h-60 grid gap-1.5 overflow-auto custom-scrollbar">
      <div v-for="category in categories"  class="flex gap-2 items-start">
        <input  v-model="selectedTerms" type="checkbox"  @change="checkboxChanged" />
        <label class="cursor-pointer m-0 text-sm flex-1 leading-tight text-gray-700 dark:text-gray-300">
          <span  v-html="category.categoryName"/>
          <small class="ml-1 text-gray-400 dark:text-gray-500 tabular-nums" aria-hidden="true">({{ category.count || 0 }})</small>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
