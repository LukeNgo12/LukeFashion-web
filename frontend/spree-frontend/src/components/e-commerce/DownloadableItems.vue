<script lang="ts">
import {defineComponent} from "vue";
interface DownloadableItemsData {
  downloadableItems: {
    id: string,
    name: string,
    product: {
      slug: string,
    },
    downloadsRemaining: string;
    accessExpires: boolean;
    url: string;
  }[]
}
export default defineComponent({
  data() {
    return {
      downloadableItems: [
        {
          id: "5",
          name: "",
          product: {
            slug: ""
          },
          downloadsRemaining: "",
          accessExpires: true,
          url: ""
        }
      ]
    } as DownloadableItemsData
  },
  methods: {

  },
  props: {
    downloadableItems: Array
  }
})
</script>

<template>
  <table class="w-full text-left table-auto" aria-label="Download List">
    <thead>
    <tr>
      <th>{{$t('components.downloadableItems.product')}}</th>
      <th>{{$t('components.downloadableItems.downloadsRemaining')}}</th>
      <th>{{$t('components.downloadableItems.expires')}}</th>
      <th>{{$t('components.downloadableItems.download')}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in downloadableItems" :key="item.id">
      <td class="rounded-l-lg">
        <RouterLink v-if="item.product" :to="`/product/${item.product.slug}`" class="hover:underline">{{ item.product.name }}</RouterLink>
      </td>
      <td>{{ item.downloadsRemaining || '∞' }}</td>
      <td>{{ item.accessExpires ? formatDate(item.accessExpires) : 'Never' }}</td>
      <td v-if="item.url">
        <a :href="item.url" :download="item.name" class="text-primary hover:text-primary-dark hover:underline">{{ item.name }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

tbody tr:nth-child(odd) {
  @apply bg-gray-50 dark:bg-gray-700/50;
}

thead tr {
  @apply text-xs sm:text-base;
}

tbody tr {
  @apply text-xs sm:text-sm text-gray-500 dark:text-gray-400;
}

td,
th {
  @apply py-2 px-3 dark:text-gray-300;
}
</style>
