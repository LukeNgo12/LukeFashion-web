<script lang="ts">
import {defineComponent} from "vue";
import {useFiltering} from "@/composables/useFilterting.ts";

export default defineComponent({
  name: "ResetFiltersButton",
  setup(){

  },
  data(){
    return {}
  },
  methods: {
    resetFilter(){

    }
  }

})
</script>

<template>
  <button class="mt-8 w-full" @click="resetFilter">
    {{ $t('filtering.resetFiltersButton.clearFilters') }}
  </button>
</template>

<style scoped lang="postcss">

</style>
