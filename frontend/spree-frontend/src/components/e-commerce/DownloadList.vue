<script lang="ts">
import {defineComponent} from "vue";
interface DownloadListData {
  downloads: [];
}
export default defineComponent({
  data(){
    return {
      downloads: []
    } as DownloadListData
  },
  methods: {
    refresh(){

    }
  }
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg flex shadow-xs border border-gray-100 dark:border-gray-700 min-h-62.5 p-4 md:p-8 justify-center items-center">
    <div v-if="downloads && downloads.length" class="w-full">
      <div class="text-center flex justify-center w-full mt-8">
        <button type="button" size="sm" variant="secondary" icon="icon:refresh-outline" @click="refresh">{{$t('components.downloadList.refreshList')}}</button>
      </div>
    </div>
    <div v-else-if="downloads && downloads.length === 0" class="min-h-62.5 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
      {{$t('components.downloadList.noDownloadsFound')}}}}
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
