<script lang="ts">
import {defineComponent} from 'vue'

interface StateSelectProps {
  countryCode: string;
  modelValue: string;
  countryStatesDict: {
    kr: [],
    jp: [],
    sg: [],
    tw: [],
  }
}
export default defineComponent({
  name: "StateSelect",
  props: defineProps<StateSelectProps>(),
  data(){
    return {
      modelValue: ""
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    updateState(){

    },
    select(evt: any){
      const value = (evt.target as HTMLSelectElement | HTMLInputElement | null)?.value ?? '';
      this.$emit('update:modelValue',value);
      this.$emit('change',value)
    },
  }
})
</script>

<template>
  <select v-bind="$attrs" @change="select" v-if="countryStatesDict[countryCode ?? '']?.length">
    <option value="" :selected="!(modelValue ?? '')">{{$t('shopElements.stateSelect')}}</option>
    <option
      v-for="state in countryStatesDict[countryCode ?? '']"
      :key="state.code"
      :value="state.code"
      :selected="state.code === (modelValue ?? '')">
      {{ state.name }}
    </option>
  </select>
  <input v-else v-bind="$attrs" type="text" @change="select" placeholder="State" />
</template>

<style scoped lang="postcss">

</style>
