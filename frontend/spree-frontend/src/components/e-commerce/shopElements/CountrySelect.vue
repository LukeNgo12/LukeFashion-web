<script lang="ts">
import {defineComponent} from 'vue'
import {useCountry} from "@/composables/useCountry.ts";

interface CountrySelectData {
  countriesToShow: {name: string, code: string}[],
  modelValue: string
}
export default defineComponent({
  name: "CountrySelect",
  setup(){
    const {getAllowedCountries,countriesToShow}= useCountry();
    return {getAllowedCountries,countriesToShow}
    },
  data(){
    return {
      countriesToShow: [{
        name: "",
        code: ""
      }],
      modelValue: ""
    } as CountrySelectData
  },
  emits: [
    'update:modelValue', 'change'
  ],
  methods: {
    select(event: any){
      const value = (event.target as HTMLSelectElement | null)?.value ?? '';
      this.$emit('update:modelValue',value)
      this.$emit('change',value)
    },

  },
  mounted(){
    this.getAllowedCountries()
  }
})
</script>

<template>

  <template>
    <select v-bind="$attrs" :value="modelValue ?? ''" @change="select" required="true">
      <option value="" disabled>{{$t('shopElements.countrySelect.selectACountry')}}</option>
      <option v-for="country in countriesToShow" :key="country.code" :value="country.code">
        {{ country.name }}
      </option>
    </select>
  </template>
</template>

<style scoped lang="postcss">

</style>
