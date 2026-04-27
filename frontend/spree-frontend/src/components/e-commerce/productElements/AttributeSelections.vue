<script lang="ts">
import {defineComponent} from 'vue'

interface Props {
  attributes: any[];
  defaultAttributes?: {nodes: any[]} | null;
  variations?: any[] | null;
}
export default defineComponent({
  name: "AttributeSelections",
  props:{

  },
  data(){
    return {
      attr:{
        name: "",
        label: ""
      },
      attributes: [
        {
          label: "",
          name: "",
          scope: "LOCAL",
          options: "",
          terms: {
            nodes: ""
          }
        },
      ],
      selections: {
        "attributeName": ""
      }
    }
  },
  methods:{
    getSelectionHint(attr: any){
      return false;
    },
    className(){

    },
    isOptionEnabled(attributeName: any, option: any){

    },
    getSelectedName(){

    },
    handleSelectionChange(attributeName: any){

    }

  }
})
</script>

<template>
  <div class="flex flex-col justify-between gap-1" v-if="attributes">
    <div v-for="(attr, i) in attributes" :key="i" class="relative flex flex-wrap justify-between py-2">
      <!-- LOCAL -->
      <div v-if="attr.scope == 'LOCAL'" class="grid gap-2">
        <div class="text-sm dark:text-gray-300">
          {{ attr.label || attr.name }}
          <span v-if="selections[attr.name || '']" class="text-gray-400 dark:text-gray-500">: {{ getSelectedName(attr, selections[attr.name || '']) }}</span>
        </div>
        <div v-if="getSelectionHint(attr)" class="text-xs text-gray-400 dark:text-gray-500">
          {{ getSelectionHint(attr) }}
        </div>
        <div class="flex gap-2">
          <span v-for="(option, index) in (attr.options || []).filter((option): option is string => !!option)" :key="index">
            <label :for="`${option}_${index}`">
              <input
                :id="`${option}_${index}`"
                class="hidden"
                type="radio"
                :class="className(attr.name || '')"
                :name="attr.name || ''"
                :value="option"
                v-model="selections[attr.name || '']"
                :aria-disabled="!isOptionEnabled(attr.name || '', option)"
                @change="handleSelectionChange(attr.name || '')" />
              <span
                class="radio-button"
                :class="[`picker-${option}`, { 'is-disabled': !isOptionEnabled(attr.name || '', option) }]"
                :title="`${attr.label || attr.name}: ${option}`"
              >{{ option }}</span
              >
            </label>
          </span>
        </div>
      </div>

      <!-- COLOR SWATCHES -->
      <div v-else-if="attr.name == 'pa_color' || attr.name == 'color'" class="grid gap-2">
        <div class="text-sm">
          General Color
          <span v-if="selections[attr.name || '']" class="text-gray-400">{{ getSelectedName(attr, selections[attr.name || '']) }}</span>
        </div>
        <div v-if="getSelectionHint(attr)" class="text-xs text-gray-400 dark:text-gray-500">
          {{ getSelectionHint(attr) }}
        </div>
        <div class="flex gap-2">
          <span
            v-for="(term, termIndex) in 'terms' in attr && attr.terms?.nodes ? attr.terms.nodes.filter((term) => term?.slug) : []"
            :key="term.slug || termIndex">
            <Tooltip :text="term.name || ''">
              <label :for="`${term.slug || ''}_${termIndex}`">
                <input
                  :id="`${term.slug || ''}_${termIndex}`"
                  class="hidden"
                  type="radio"
                  :class="className(attr.name || '')"
                  :name="attr.name || ''"
                  :value="term.slug || ''"
                  v-model="selections[attr.name || '']"
                  :aria-disabled="!isOptionEnabled(attr.name || '', term.slug || '')"
                  @change="handleSelectionChange(attr.name || '')" />
                <span
                  class="color-button"
                  :class="[`color-${term.slug}`, { 'is-disabled': !isOptionEnabled(attr.name || '', term.slug || '') }]"
                  :title="`${attr.label || attr.name}: ${term.name || term.slug}`"></span>
              </label>
            </Tooltip>
          </span>
        </div>
      </div>

      <!-- DROPDOWN -->
      <div v-else-if="'terms' in attr && (attr.terms?.nodes?.length || 0) > 8" class="grid gap-2">
        <div class="text-sm dark:text-gray-300">
          {{ attr.label || attr.name }}
          <span v-if="selections[attr.name || '']" class="text-gray-400 dark:text-gray-500">{{ getSelectedName(attr, selections[attr.name || '']) }}</span>
        </div>
        <div v-if="getSelectionHint(attr)" class="text-xs text-gray-400 dark:text-gray-500">
          {{ getSelectionHint(attr) }}
        </div>
        <select
          :id="attr.name || ''"
          :name="attr.name || ''"
          required
          class="border-white shadow-xs select dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          v-model="selections[attr.name || '']"
          @change="handleSelectionChange(attr.name || '')">
          <option disabled hidden>{{ $t('productElements.attributeSelections.choose') }} {{ decodeURIComponent(attr.label || attr.name || '') }}</option>
          <option
            v-for="(term, dropdownIndex) in 'terms' in attr && attr.terms?.nodes ? attr.terms.nodes.filter((term) => term?.slug) : []"
            :key="term.slug || dropdownIndex"
            :value="term.slug || ''"
            :aria-disabled="!isOptionEnabled(attr.name || '', term.slug || '')"
            v-html="term.name" />
        </select>
      </div>

      <!-- CHECKBOXES -->
      <div v-else class="grid gap-2">
        <div class="text-sm dark:text-gray-300">
          {{ attr.label || attr.name }}
          <span v-if="selections[attr.name || '']" class="text-gray-400 dark:text-gray-500">: {{ getSelectedName(attr, selections[attr.name || '']) }}</span>
        </div>
        <div v-if="getSelectionHint(attr)" class="text-xs text-gray-400 dark:text-gray-500">
          {{ getSelectionHint(attr) }}
        </div>
        <div class="flex gap-2">
          <span v-for="(term, index) in 'terms' in attr && attr.terms?.nodes ? attr.terms.nodes.filter((term) => term?.slug) : []" :key="term.slug || index">
            <label :for="`${term.slug}_${index}`">
              <input
                :id="`${term.slug}_${index}`"
                class="hidden"
                type="radio"
                :class="className(attr.name || '')"
                :name="attr.name || ''"
                :value="term.slug || ''"
                v-model="selections[attr.name || '']"
                :aria-disabled="!isOptionEnabled(attr.name || '', term.slug || '')"
                @change="handleSelectionChange(attr.name || '')" />
              <span
                class="radio-button"
                :class="[`picker-${term.slug}`, { 'is-disabled': !isOptionEnabled(attr.name || '', term.slug || '') }]"
                :title="`${attr.label || attr.name}: ${term.slug}`"
              >{{ term.name }}</span
              >
            </label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.radio-button {
  @apply border-white dark:border-gray-700 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 border-2 text-sm text-center outline-2 outline-gray-100 dark:outline-gray-600 py-1.5 px-3 transition-all text-gray-800 dark:text-gray-200 inline-block hover:outline-gray-500;
}

.radio-button.is-disabled {
  @apply opacity-40 hover:outline-gray-100 dark:hover:outline-gray-600;
}

.color-button {
  @apply border-white dark:border-gray-700 cursor-pointer bg-gray-50 border-2 rounded-2xl text-sm text-center outline-2 outline-gray-100 dark:outline-gray-600 transition-all text-gray-800 inline-block hover:outline-gray-500;
  width: 2rem;
  height: 2rem;
}

.color-button.is-disabled {
  @apply opacity-40 hover:outline-gray-100 dark:hover:outline-gray-600;
}

.color-green {
  @apply bg-green-500;
}

.color-blue {
  @apply bg-blue-500;
}

.color-red {
  @apply bg-red-500;
}

.color-yellow {
  @apply bg-yellow-500;
}

.color-orange {
  @apply bg-orange-500;
}

.color-purple {
  @apply bg-purple-500;
}

.color-black {
  @apply bg-black;
}

input[type='radio']:checked ~ span {
  @apply outline-2 outline-gray-500 dark:outline-gray-300;
}
</style>
