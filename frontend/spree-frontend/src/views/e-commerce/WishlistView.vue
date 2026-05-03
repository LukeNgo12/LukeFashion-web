<script lang="ts">
import {defineComponent} from 'vue'
import WishListItem from "@/components/e-commerce/WishListItem.vue";

export default defineComponent({
  name: "Wishlist",
  components: {
    WishListItem
  }

})
</script>

<template>
  <WishlistItem />
</template>

<style scoped lang="postcss">

</style>
