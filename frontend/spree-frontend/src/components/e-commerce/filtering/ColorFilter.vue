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
      selectedTerms: "sd",
      checkboxChanged: true,
      attribute: {
        terms: [],
        slug: ""
      }
    } as ColorFilterData
  },
  methods: {
    checkboxChanged(){
      setFilter(attribute.slug, selectedTerms.value);
    }
  }
})
</script>

<template>
  <div class="cursor-pointer flex font-semibold pt-8 pb-4 leading-none justify-between items-center text-gray-900 dark:text-white" @click="isOpen = !isOpen">
    <span>{{ filterTitle }}</span>
    <ion-icon name="ion:chevron-down-outline" class="transform text-gray-600 dark:text-gray-400" :class="isOpen ? 'rotate-180' : ''" />
  </div>
  <div v-show="isOpen" class="mr-6 max-h-60 grid gap-1.5 swatches overflow-auto custom-scrollbar">
    <div v-for="color in attribute.terms" :key="color.slug" :style="{ '--color': color.slug }" :title="color.name">
      <input :id="color.slug" v-model="selectedTerms" class="hidden" type="checkbox" :value="color.slug" @change="checkboxChanged" />
      <label :for="color.slug" class="cursor-pointer m-0"></label>
    </div>
  </div>

</template>

<style scoped lang="postcss">

</style>
