<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
import {logoIonic} from "ionicons/icons";

interface ShippingOptionsData {
  options: {
    id: string,
    label: string,
    cost: number
  }[]

  activeOption: string;
  currencySymbol: string;
}

export default defineComponent({
  name: "ShippingOptions",
  components: {
    IonIcon,

  },
  data() {
    return {
      options: [
        {
          id: "",
          label: "",
          cost: 50
        }
      ],
      activeOption: "",
      currencySymbol: ""
    } as ShippingOptionsData
  }
  ,
  props: {}
  ,
  methods: {
    setActiveOption(option: any) {

    }
  }
})
</script>

<template>
  <div class="grid gap-4 shipping-options">
    <div
      v-for="option in options"
      :key="option.id"
      class="flex items-center justify-between option"
      :class="{ 'active-option': option.id === activeOption }"
      @click="setActiveOption(option.id)">
      <div>
        <div class="text-sm leading-tight text-gray-600 dark:text-gray-200"
             v-html="option.label"></div>
        <div class="font-semibold text-gray-800 dark:text-white">{{ currencySymbol }}{{
            option.cost
          }}
        </div>
      </div>

      <ion-icon name="ion:checkmark-circle" size="20"
                class="ml-auto opacity-0 text-primary checkmark"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.shipping-options {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  .option {
    @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer flex flex-1 text-sm py-3 px-4 gap-2 items-center hover:border-primary dark:hover:border-primary transition-colors;

    &.active-option {
      @apply border-primary/50 cursor-default shadow-xs pointer-events-none;

      & .checkmark {
        @apply opacity-100;
      }
    }
  }
}
</style>
