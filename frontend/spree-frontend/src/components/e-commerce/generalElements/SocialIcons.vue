<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";

export default defineComponent({
  name: "SocialIcons",
  components: {
    IonIcon
  },
  computed: {
    seoItems(){

    }
  },
  data(){
    return {
      seoItems: [
        {
          provider: "provider",
          url: "url",
        }
      ]
    }
  }
})
</script>

<template>
  <div v-if="seoItems.length" class="flex gap-4 text-xl">
    <a v-for="item in seoItems" :key="item.provider" :href="item.url" target="_blank" rel="noreferrer" :aria-label="item.provider">
      <ion-icon class="text-gray-700 hover:text-gray-900" :name="`ion:logo-${item.provider}`" />
    </a>
  </div>
</template>

<style scoped lang="postcss">

</style>
