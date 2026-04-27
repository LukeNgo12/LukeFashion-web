<script lang="ts">
import {defineComponent} from 'vue'
import {useSearching} from "@/composables/useSearch.ts";
import {IonIcon} from "@ionic/vue";

export default defineComponent({
  name: "SearchTrigger",
  components: {
    IonIcon
  },
  setup(){
    const { toggleSearch } = useSearching();

    return {toggleSearch}
  }
})
</script>

<template>
  <div class="relative cursor-pointer inline-flex sm:hidden" title="Cart" @click="toggleSearch">
    <ion-icon name="ion:search-outline" size="20" class="mr-1 md:mr-0" />
  </div>
</template>

<style scoped lang="postcss">

</style>
