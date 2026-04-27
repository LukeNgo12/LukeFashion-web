<script lang="ts">
import {defineComponent} from "vue";
import {useFiltering} from "@/composables/useFilterting.ts";

export default defineComponent({
  name: "ResetFiltersButton",
  setup(){
    const { resetFilter } = useFiltering();
    return {resetFilter}
  },
  data(){
    return {}
  },
  methods: {

  }

})
</script>

<template>
  <Button class="mt-8 w-full" @click="resetFilter">
    {{ $t('filtering.resetFiltersButton.clearFilters') }}
  </Button>
</template>

<style scoped lang="postcss">

</style>
