<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";

interface ColorFilterData {
  isOpen: boolean;
  filterTitle: string;
  selectedTerms: string;
  checkboxChanged: boolean;
  attribute: {
    terms: [];
  }
}
export default defineComponent({
  components: {
    IonIcon,

  },
  name: "ColorFilter",
  data(){
    return {
      isOpen: true,
      filterTitle: "filterTitle",
      selectedTerms: "",
      checkboxChanged: true,
      attribute: {
        terms: [],
        slug: ""
      }
    } as ColorFilterData
  },
  methods: {
    checkboxChanged(){
    }
  }
})
</script>

<template>
  <div class="cursor-pointer flex font-semibold pt-8 pb-4 leading-none justify-between items-center text-gray-900 dark:text-white" @click="isOpen = !isOpen">
    <span>{{ filterTitle }}</span>
    <ion-icon name="ion:chevron-down-outline" class="transform text-gray-600 dark:text-gray-400" :class="isOpen ? 'rotate-180' : ''" />
  </div>
  <div  class="mr-6 max-h-60 grid gap-1.5 swatches overflow-auto custom-scrollbar">
    <div >
      <input  class="hidden" type="checkbox"  @change="checkboxChanged" />
      <label  class="cursor-pointer m-0"></label>
    </div>
  </div>

</template>

<style scoped lang="postcss">
@reference "#tailwind";

.swatches {
  grid-template-columns: repeat(auto-fit, minmax(24px, 1fr));
}

.swatches label {
  @apply rounded-md cursor-pointer shadow-xs m-0 mb-1 w-full block relative;
  background-color: var(--color, #eee);
  filter: saturate(0.75);
  aspect-ratio: 1/1;
  transition: all 0.2s ease;
}

.swatches label:hover,
.swatches input:checked + label {
  filter: saturate(1);
}

/* tick */
.swatches input:checked + label::after {
  content: '';
  width: 25%;
  height: 40%;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

/* Make tick black if the color is white */
.swatches input:checked + label[for='white']::after,
.swatches input:checked + label[for='yellow']::after {
  border-color: #666;
}
</style>
