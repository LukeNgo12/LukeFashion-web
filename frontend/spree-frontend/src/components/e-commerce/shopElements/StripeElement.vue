<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StripeElement",
  props: {
    stripe: {type: Array, default: []}
  },
  data(){
    return {
      paymentMethodType: ""
    }
  }
})
</script>

<template>
  <div class="stripe-elements-container">
    <!-- Payment Element container (shows multiple payment methods in tabs/accordion) -->
    <div
      v-if="paymentMethodType === 'payment'"
      id="payment-element"
      class="stripe-element bg-white dark:bg-gray-700 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <!-- Payment Element will be mounted here -->
    </div>

    <!-- Card Element container (traditional single card input) -->
    <div v-else id="card-element" class="stripe-element bg-white dark:bg-gray-700 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <!-- Card Element will be mounted here -->
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
