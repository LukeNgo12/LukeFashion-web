<script lang="ts">
import {defineComponent} from 'vue'

interface LogoData {
  logoUrl: string;
  faviconUrl: string;
  siteName: string;
}

export default defineComponent({
  name: "Logo",
  data(){
    return {
      logoUrl: "/src/assets/Luke-fashion-logo.png",
      faviconUrl: "",
      siteName: ""
    }
  }
})
</script>

<template>
  <RouterLink to="/" class="inline-flex items-center gap-2">
    <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="object-contain h-10" />
    <div v-else class="flex items-center gap-2 text-lg font-bold">
      <img :src="faviconUrl" alt="Logo" width="32" height="32" />
      <span>{{ siteName }}</span>
    </div>
  </RouterLink>
</template>

<style scoped lang="postcss">

</style>
