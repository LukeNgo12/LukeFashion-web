<script lang="ts">
import {defineComponent} from 'vue'
// const { description } = useAppConfig();

export default defineComponent({
  name: "WebsiteShortDescription",
  data(){
    return {
      description: ""
    }
  }
})
</script>

<template>
  <p class="mt-4 text-sm text-gray-700 dark:text-gray-300 xl:max-w-md">{{ description }}</p>

</template>

<style scoped lang="postcss">

</style>
