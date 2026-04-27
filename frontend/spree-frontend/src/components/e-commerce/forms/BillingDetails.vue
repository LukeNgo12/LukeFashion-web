<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BillingDetails",
  data(){
    return {
      billing: {
        firstName: "",
        lastName: "",
        address: "",
        address1: "",
        address2: "",
        city: ""
      },
      isBillingAddressEnabled: true
    }
  },
  props : {
    modelValue : Object, required: true
  }
})
</script>

<template>
  <div class="grid w-full gap-4 lg:grid-cols-2">
    <div class="w-full">
      <label for="first-name">{{$t('forms.billingDetails.firstName')}}</label>
      <input id="first-name" v-model="billing.firstName" placeholder="John" autocomplete="given-name" type="text" required=true />
    </div>

    <div class="w-full">
      <label for="last-name">{{$t('forms.billingDetails.lastName')}}</label>
      <input id="last-name" v-model="billing.lastName" placeholder="Doe" autocomplete="family-name" type="text" required="true" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full col-span-full">
      <label for="address1">{{$t('forms.billingDetails.address1')}}</label>
      <input id="address1" v-model="billing.address1" placeholder="O'Connell Street 47" autocomplete="street-address" type="text" required />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full col-span-full">
      <label for="address2">{{$t('forms.billingDetails.address2')}}</label>
      <input id="address2" v-model="billing.address2" placeholder="Apartment, studio, or floor" autocomplete="address-line2" type="text" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full">
      <label for="city">{{ $t('forms.billingDetails.city') }}</label>
      <input id="city" v-model="billing.city" placeholder="New York" autocomplete="locality" type="text" required="true" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full">
      <label for="state">{{ $t('forms.billingDetails.state') }} ({{ $t('forms.billingDetails.optional') }})</label>
      <StateSelect
        id="state"
        v-model="billing.state"
        :default-value="billing.state"
        :country-code="billing.country"
        @change="updateShippingLocation"
        autocomplete="address-level1" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full">
      <label for="country">{{$t('forms.billingDetails.country')}}</label>
      <CountrySelect id="country" v-model="billing.country" :default-value="billing.country" @change="updateShippingLocation" autocomplete="country" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full">
      <label for="zip">{{$t('forms.billingDetails.zip')}}</label>
      <input id="zip" v-model="billing.postcode" placeholder="10001" autocomplete="postal-code" type="text" required="true" />
    </div>

    <div v-if="isBillingAddressEnabled" class="w-full col-span-full">
      <label for="phone">{{ $t('forms.billingDetails.phone') }} ({{ $t('forms.billingDetails.optional') }})</label>
      <input id="phone" v-model="billing.phone" placeholder="+1 234 567 8901" autocomplete="tel" type="tel" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
