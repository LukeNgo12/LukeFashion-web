<script  lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue"
import {logoIonic} from "ionicons/icons"
export default defineComponent({
  name: "WishlistButton",
  components: {
    IonIcon,
  },
  data(){
    return {
      isWishlisted: true
    }
  },
  props: {
    product: {

    }
  },
  methods: {
    toggleWishlist(){

    }
  },
  computed: {
    isWishListed(){

    }
  }
})
</script>

<template>
  <button type="button" class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center" @click="toggleWishlist">
    <ion-icon v-if="isWishlisted" name="ion:heart" size="18" class="text-red-400" />
    <ion-icon v-else name="ion:heart-outline" size="18" />
    <span>{{ isWishlisted ? $t('shop.wishlistRemove') : $t('shop.wishlistAdd') }}</span>
  </button>
</template>

<style scoped lang="postcss">

</style>
