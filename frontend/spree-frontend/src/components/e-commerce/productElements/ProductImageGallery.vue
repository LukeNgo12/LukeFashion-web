<script lang="ts">
import {defineComponent} from 'vue'
import SaleBadge from "@/components/e-commerce/productElements/SaleBadge.vue";

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
  components:{
    SaleBadge
  },
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
      v-for="image in gallery"
      class="rounded-xl object-contain w-full min-w-87.5"
      :src="image"
     />
    <div class="my-4 gallery-images">
      <img
        class="cursor-pointer rounded-xl"

        src="/Luke-fashion-logo.png"

        loading="lazy"/>
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
