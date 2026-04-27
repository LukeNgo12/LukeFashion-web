<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
import {useSearching} from "@/composables/useSearch.ts";

interface ProductSearchData{
  searchQuery: string;
}
export default defineComponent({
  name: "ProductSearch",
  components : {
    IonIcon
  },
  setup(){
    const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching();
    return {getSearchQuery, setSearchQuery,clearSearchQuery}
  },
  data(){
    return {
      searchQuery: ""
    } as ProductSearchData

  },
  methods: {
    reset(){
      this.clearSearchQuery();
      this.searchQuery = "";
    },

  },
  watch: {
    getSearchQuery(value){
      if(!value) this.reset();
    }
  }
})
</script>

<template>
  <form class="relative items-center flex-1 -space-x-px rounded-md shadow-xs" @submit.prevent="setSearchQuery(searchQuery)">
    <ion-icon name="ion:search-outline" size="20" class="absolute z-10 opacity-50 pointer-events-none left-2 dark:text-gray-400" />
    <input
      id="product-search-input"
      v-model="searchQuery"
      type="text"
      :placeholder="$t('shopElements.productSearch.searchProducts')"
      class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md shadow-inner outline-hidden bg-gray-50 dark:bg-gray-700 shadow-gray-200 dark:shadow-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
    <span
      v-if="searchQuery"
      class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded-sm cursor-pointer bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary right-2"
      @click="reset">
      <span>{{ $t('shopElements.productSearch.clear') }}</span>
      <ion-icon name="ion:close-outline" size="18" />
    </span>
  </form>
</template>

<style scoped lang="postcss">

</style>
