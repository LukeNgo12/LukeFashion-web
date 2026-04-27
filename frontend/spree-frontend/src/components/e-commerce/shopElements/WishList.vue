<script lang="ts">
import {defineComponent} from 'vue'
import ClientOnly from 'vue-client-only'


interface WishListData {
  theList: {databaseId: number}[]
}
export default defineComponent({
  name: "WishList",
  components: {
    ClientOnly
  },
  data(){
    return {
      theList: [
        {
          databaseId: 5
        }
      ]
    } as WishListData
  }
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow min-h-100 w-full p-4 md:p-12 justify-center items-start">
    <div class="container">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('views.wishlist.title') }}</h1>
        <span class="text-gray-400 dark:text-gray-500">{{$t('views.wishlist.item')}} {{ theList.length }}</span>
      </div>

        <ul v-if="theList.length" class="grid divide-y divide-gray-100 dark:divide-gray-700">
          <WishListItem v-for="product in theList" :key="product.databaseId" :product="product" />
        </ul>
        <div v-else class="flex text-center min-h-150 text-gray-500 dark:text-gray-400 items-center justify-center">
          <p>{{ $t('views.wishlist.wishlistNoItems') }}</p>
        </div>

    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
