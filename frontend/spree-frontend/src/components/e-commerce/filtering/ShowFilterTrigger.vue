<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import {useFiltering} from "@/composables/useFilterting.ts";
import {useHelpers} from "@/composables/useHelpers.ts";
const { isFiltersActive } = await useFiltering();
const { toggleBodyClass, removeBodyClass } = useHelpers();

interface ShowFilterTriggerData {
  isFiltersActive: boolean;
}

export default defineComponent({
  name: "ShowFilterTrigger",
  components: {
    IonIcon
  },
  setup(){
    const { toggleBodyClass, removeBodyClass } = useHelpers();

    return{ toggleBodyClass, removeBodyClass }
  },
  data(){
    return {
      isFiltersActive: true
    } as ShowFilterTriggerData
  },
  methods: {
    toggleBodyClass(option: any){

    }
  }

})
</script>

<template>
  <div class="relative inline-flex -space-x-px shadow-xs rounded-md isolate">
    <button
      class="relative inline-flex items-center p-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20"
      aria-label="Show filters"
      @click.prevent="toggleBodyClass('show-filters')"
      title="Show filters">
      <ion-icon name="ion:funnel-outline" size="18" class="transition-transform transform transform-origin-center dark:text-gray-300" />
    </button>
    <span class="absolute z-20 w-2.5 h-2.5 rounded-full bg-primary dark:bg-primary -top-1 -right-1" v-if="isFiltersActive" />
  </div>
</template>

<style scoped lang="postcss">

</style>
