<script lang="ts">
import {defineComponent} from 'vue'
import { Label } from 'reka-ui'

export default defineComponent({
  name: "Input",
  components: {
    Label
  },
  props: {
    label: {type: String, default: ""}
  },
  data(){
    return {
      form: {
        input: ""
      }
    }
  }
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-[15px] px-5">
    <Label
      class="text-sm font-semibold leading-[35px] text-stone-700 dark:text-white"
      for="input"
    > {{label}} </Label>
    <input
      id="input"
      :v-model="form.input"
      class="bg-white border inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-sm outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
      type="text"
      value=""
    >
  </div>
</template>
<style scoped lang="postcss">

</style>
