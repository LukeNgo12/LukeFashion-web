<script lang="ts">
import {defineComponent} from 'vue'
import { twMerge } from 'tailwind-merge';
import {IonIcon} from "@ionic/vue"

interface ButtonData {
  componentType: string;
  loading: boolean;
  iconSize: number;
  icon: string;
  iconPosition: string;
  baseClasses: string;
  variantClasses: {
    value: number;
  },
  sizeClasses: {
    value: number;
  },
  attrs: {
    class: {

    }
  }
}

interface PropsType {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  to?: string;
  icon?: string;
  iconPosition?: 'left' | 'right'
}
export default defineComponent({
  name: "Button",
  components: {
    IonIcon
  } ,
  props: {

  },
  data(){
    return {
      componentType: "",
      loading: true,
      iconSize: 50,
      icon: "",
      iconPosition: "",
      baseClasses :   'inline-flex items-center justify-center cursor-pointer gap-2 font-semibold transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantClasses: {
        value: 50
      },
      sizeClasses: {
        value: 50
      },
      componentAttrs: "",
      attrs: {
        class: {

        }
      }

    } as ButtonData
  },
  computed: {
    buttonClasses(){
      return twMerge(this.baseClasses, this.variantClasses.value as any, this.sizeClasses.value as any, (this.attrs.class as string) || '')
    },
    componentAttrs(){
      const {class: _ , ...restAttrs} = this.attrs;
      const componentAttrs: Record<string, any> = {...restAttrs};
      if(this.componentType === 'button'){

      }
    },
    componentType(){


    }
  },
})
</script>

<template>
  <component :is="componentType" v-bind="componentAttrs as any" :class="buttonClasses">
    <!-- Loading Icon -->
    <LoadingIcon v-if="loading" :size="iconSize" color="currentColor" stroke="4" />

    <!-- Left Icon -->
    <ion-icon v-if="icon && iconPosition === 'left' && !loading" :name="icon" :size="iconSize" />

    <!-- Default Slot for button content -->
    <slot />

    <!-- Right Icon -->
    <ion-icon v-if="icon && iconPosition === 'right' && !loading" :name="icon" :size="iconSize" />
  </component>
</template>

<style scoped lang="postcss">

</style>
