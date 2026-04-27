<script lang="ts">
import {defineComponent} from 'vue'

interface ProductTabs {
  imgWidth: number,
  imageToShow: {
    altText: string,
    sourceUrl: string,
    title: string
  },
  galleryImages: {databaseId: number,sourceUrl: string, altText: string, title: string}[],
  FALLBACK_IMG: string
}
export default defineComponent({
  name: "ProductTabs",
  props:{
    mainImage: {type: Object, required: true},
    gallery: {type: Object, required: true},
    node: {type: Object, required: true},
    activeVariation: {type: Object, required: false}
  },
  data(){
    return {
      imgWidth: 100,
      imageToShow: {
        altText: "",
        sourceUrl: "",
        title: ""
      },
      galleryImages: [{
        databaseId: 1,
        sourceUrl: "",
        altText: "",
        title: ""
      }],
      FALLBACK_IMG: ""
    }
  },
  methods: {
    changeImage(image : any){

    }
  }
})
</script>

<template>
  <div>
    <SaleBadge :node class="absolute text-base top-4 right-4" />
    <img
      class="rounded-xl object-contain w-full min-w-87.5"
      :width="imgWidth"
      :height="imgWidth"
      :alt="imageToShow.altText || node.name"
      :title="imageToShow.title || node.name"
      :src="imageToShow.sourceUrl || FALLBACK_IMG"
      :preload="{ fetchPriority: 'high' }"
      placeholder=""
      placeholder-class="blur-xl" />
    <div v-if="gallery.nodes.length" class="my-4 gallery-images">
      <img
        v-for="galleryImg in galleryImages"
        :key="galleryImg.databaseId"
        class="cursor-pointer rounded-xl"
        :width="imgWidth"
        :height="imgWidth"
        :src="galleryImg.sourceUrl || FALLBACK_IMG"
        :alt="galleryImg.altText || node.name"
        :title="galleryImg.title || node.name"
        placeholder=""
        placeholder-class="blur-xl"
        loading="lazy"
        @click.native="changeImage(galleryImg)" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
