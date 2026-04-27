<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import Button from "@/components/e-commerce/ui/Button.vue";
interface TabsProps {
  label: string;
  badge:string;
  disabled: boolean;
}

const emit = defineEmits<{
  'update:modelValue': [value: number];
}>();

export default defineComponent({
  name: "Tabs",
  components: {Button},
  props: {
    tabs: {
     type: Object as PropType<TabsProps>
    }
  },
  data(){
    return {
      modelValue: 5
    }
  },
  methods: {
    selectTab(index: number){
      if(!this.tabs[index]?.disabled ){
        emit('update:modelValue', index);

      }
    }
  }
})
</script>

<template>
  <div>
    <nav class="flex gap-8 border-b border-gray-200 dark:border-gray-700 tabs">
      <Button
        v-for="(tab, index) in tabs"
        :key="index"
        type="button"
        :disabled="tab.disabled"
        :class="[
          'border-transparent border-b-2 text-lg pb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
          modelValue === index ? 'active border-primary text-primary' : '',
          tab.disabled ? 'opacity-50 cursor-not-allowed' : '',
        ]"
        style="margin-bottom: -1px"
        @click.prevent="selectTab(index)">
        <span class="flex items-center gap-2">
          {{ tab.label }}
          <span
            v-if="tab.badge !== undefined"
            class="bg-primary rounded-full text-white leading-none min-w-4.5 p-0.75 text-[12px] inline-flex justify-center items-center">
            {{ tab.badge }}
          </span>
        </span>
      </Button>
    </nav>
    <div class="tab-contents dark:text-gray-300 mt-8">
      <slot :active-tab="modelValue" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.tabs {
  @apply border-gray-200 dark:border-gray-700;
}

.tabs button {
  @apply border-transparent border-b-2 text-lg pb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200;
  margin-bottom: -1px;
}

.tabs button.active {
  @apply border-primary text-primary;
}

.tab-contents {
  @apply dark:text-gray-300;
}
</style>
