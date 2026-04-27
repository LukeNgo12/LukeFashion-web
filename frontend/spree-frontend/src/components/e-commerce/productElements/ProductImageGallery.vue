<script lang="ts">
import {defineComponent} from 'vue'

interface ProductImageGallery {
  imgWidth: string,
  imageToShow: {
    altText: string;
    title: string;
    sourceUrl: string;
  },
  node: {
    name: string;
  },
  gallery: {
    nodes: [],
    sourceUrl: string;
    altText: string;
    title: string;
  },
  galleryImages: {
    databaseId: string,
    sourceUrl: string,
    altText: string,
    title: string,
  }[],
  FALLBACK_IMG: string;

}
export default defineComponent({
  name: "ProductImageGallery",
  props: {
    mainImage: {type: Object, required: true},
    gallery: {type: Object, required: true}
    }
  ,
  data(){
    return {
      imgWidth: "",
      imageToShow: {
        altText: "",
        title: "",
        sourceUrl: "",
      },
      node: {
        name: ""
      },
      gallery: {
        nodes: [],
        sourceUrl: "",
        altText: "",
        title: ""
      },
      galleryImages: [
        {
          databaseId: "",
          sourceUrl: "",
          altText: "",
          title: ""
        }
      ],
      FALLBACK_IMG: ""
    } as ProductImageGallery
  },
  methods: {
    changeImage(galleryImg: any){

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
.gallery-images {
  display: flex;
  overflow: auto;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gallery-images img {
  width: 72px;
  aspect-ratio: 5/6;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));

    img {
      width: 100%;
    }
  }
}
</style>
