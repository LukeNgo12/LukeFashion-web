<script lang="ts">
import {defineComponent} from 'vue'

interface BreadCrumpData {
  link: {
    name: string;
    slug: string;
  },
  format: []
}
export default defineComponent({
  name: "BreadCrump",
  data(){
    return {
      link: {
        name: "",
        slug: ""
      },
      format: []
    }  as BreadCrumpData
  }
})
</script>

<template>
  <div class="flex flex-wrap  text-sm leading-none text-gray-400 dark:text-gray-500 gap-1 items-center">
    <span>
      <RouterLink to="/" class="hover:text-primary">{{$t('generalElements.breadCrump.home')}}</RouterLink>
      <span> /</span>
    </span>
    <span v-for="(link, i) in format" :key="link.name || i">
      <RouterLink v-if="link.slug" :to="decodeURIComponent(link.slug)" class="hover:text-primary">{{ link.name }}</RouterLink>
      <span v-else class="text-gray-800 dark:text-gray-200">{{ link.name }}</span>
      <span v-if="i + 1 < format.length"> /</span>
    </span>
  </div>
</template>

<style scoped lang="postcss">

</style>
