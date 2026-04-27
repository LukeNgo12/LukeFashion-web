<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";

interface PaymentOptionsData {
  paymentGateways: {
    nodes: [
      {
        id: number,
        gateway: {
          description: string,
          title: string,
          icon: string,
        }
      }
    ]
  }

  activePaymentMethod: {
    id:string,
    description: string
  }
}
export default defineComponent({
  name: "PaymentOptions",
  components: {
    IonIcon
  },
  data(){
    return {
      paymentGateways: {
        nodes: [
          {
            id: 5,
            gateway: {
              description: "",
              title: "",
              icon: "",
            }
          }
        ]
      },
      activePaymentMethod: {
        id:"",
        description: ""
      },

    }  as PaymentOptionsData
  },
  methods: {
    updatePaymentMethod(value : any){

    }
  },
  mounted() {

  }
})
</script>

<template>
  <div class="flex gap-4 leading-tight flex-wrap">
    <div
      v-for="gateway in paymentGateways?.nodes"
      :key="gateway.id"
      class="option"
      :class="{ 'active-option': gateway.id === activePaymentMethod.id }"
      @click="updatePaymentMethod(gateway)"
      :title="gateway?.description || gateway?.title || 'Payment Method'">
      <img
        v-if="gateway.icon"
        :src="gateway.icon"
        :alt="gateway.title || 'Payment Method'"
        width="20"
        height="20"
        class="h-5 w-5 object-contain"
        fit="outside"
        loading="lazy" />
      <ion-icon v-else-if="gateway.id === 'stripe'" name="ion:card-outline" size="20" />
      <ion-icon v-else-if="gateway.id === 'paypal'" name="ion:logo-paypal" size="20" />
      <ion-icon v-else name="ion:cash-outline" size="20" />
      <span class="whitespace-nowrap" v-html="gateway.title" />
      <ion-icon name="ion:checkmark-circle" size="20" class="ml-auto text-primary checkmark opacity-0" />
    </div>
    <div v-if="activePaymentMethod.description" class="prose block w-full">
      <p class="text-sm text-gray-500 dark:text-gray-400" v-html="activePaymentMethod.description" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.option {
  @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 cursor-pointer flex flex-1 text-sm py-3 px-4 gap-2 items-center hover:border-primary dark:hover:border-primary font-medium;

  &.active-option {
    @apply border-primary/50 cursor-default shadow-xs pointer-events-none;

    & .checkmark {
      @apply opacity-100;
    }
  }
}
</style>
