<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";

export default defineComponent({
  name: "MenuTrigger",
  components: {IonIcon},
  methods: {
    toggleMobileMenu(){

    }
  }
})
</script>

<template>
  <div>
    <ion-icon name="ion:menu-outline" size="26" class="mr-4 cursor-pointer" @click="toggleMobileMenu" />

  </div>
</template>

<style scoped lang="postcss">

</style>
