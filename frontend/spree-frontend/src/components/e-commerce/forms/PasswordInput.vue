<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";

export default defineComponent({
  name: "PasswordInput",
  components: {IonIcon},
  data(){
    return {
      showPassword: true,
      modelValue: "",
      className: "",
      placeholder: "",
      autocomplete: false,
      required: true
    }
  },
  methods: {
    handleInputChanged(){

    }
  }
})
</script>

<template>
  <div class="relative flex items-center w-full">
    <input
      :type="showPassword ? 'text' : 'password'"
      class="flex items-center flex-1"
      :value="modelValue"
      @input="handleInputChanged"
      :class="className"
      :placeholder="placeholder"
      autocomplete="autocomplete"
      :required="required" />
    <ion-icon name="ion:eye-outline" size="20" class="absolute cursor-pointer right-4" @click="showPassword = !showPassword" v-if="showPassword" />
    <ion-icon name="ion:eye-off-outline" size="20" class="absolute cursor-pointer right-4" @click="showPassword = !showPassword" v-else />
  </div>
</template>

<style scoped lang="postcss">

</style>
