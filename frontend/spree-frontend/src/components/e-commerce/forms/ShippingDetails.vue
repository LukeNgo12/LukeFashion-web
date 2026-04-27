<script lang="ts">
import {defineComponent, toRef} from 'vue'
interface ShippingDetailsData {
  shipping: {
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    postcode:string;
    phone: string;
  }
}
export default defineComponent({
  name: "ShippingDetails",
  data(){
    return {
      shipping: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        postcode: "",
        phone: ""
      }
     } as ShippingDetailsData
  },
  methods: {
    updateShippingLocation(){

    }
  },
  props: {
    modelValue: {
      type: Object, required: true
    }
  },
  setup(props){
    const titleRef = toRef(props, 'title')
    return {titleRef}
  }
})
</script>

<template>
  <div class="grid w-full gap-4 lg:grid-cols-2">
    <div class="w-full">
      <label for="first-name">{{$t('forms.shippingDetails.firstName')}}</label>
      <input id="first-name" v-model="shipping.firstName" placeholder="John" autocomplete="given-name" type="text" required=true />
    </div>

    <div class="w-full">
      <label for="last-name">{{$t('forms.shippingDetails.lastName')}}</label>
      <input id="last-name" v-model="shipping.lastName" placeholder="Doe" autocomplete="family-name" type="text" required />
    </div>

    <div class="w-full col-span-full">
      <label for="address1">{{$t('forms.shippingDetails.billingAddress')}}Billing Address:</label>
      <input id="address1" v-model="shipping.address1" placeholder="O'Connell Street 47" autocomplete="street-address" type="text" required />
    </div>

    <div class="w-full col-span-full">
      <label for="address2">{{$t('forms.shippingDetails.billingAddress2')}}Billing Address2 General Optional</label>
      <input id="address2" v-model="shipping.address2" placeholder="Apartment, studio, or floor" autocomplete="address-line2" type="text" />
    </div>

    <div class="w-full">
      <label for="city">{{$t('forms.shippingDetails.billingCity')}}Billing City</label>
      <input id="city" v-model="shipping.city" placeholder="New York" autocomplete="locality" type="text" required />
    </div>

    <div class="w-full">
      <label for="state">{{ $t('forms.shippingDetails.billingStateGeneralOption') }} Billing State General Option</label>
      <StateSelect id="state" v-model="shipping.state" :default-value="shipping.state" :country-code="shipping.country" @change="updateShippingLocation" />
    </div>

    <div class="w-full">
      <label for="country">{{ $t('forms.shippingDetails.billingCountry') }} Billing Country</label>
      <CountrySelect id="country" v-model="shipping.country" :default-value="shipping.country" @change="updateShippingLocation" />
    </div>

    <div class="w-full">
      <label for="zip">{{ $t('forms.shippingDetails.billingZip') }} Billing Zip</label>
      <input id="zip" v-model="shipping.postcode" placeholder="10001" autocomplete="postal-code" type="text" required />
    </div>

    <div class="w-full col-span-full">
      <label for="phone">{{ $t('forms.shippingDetails.billingPhoneGeneralOption') }} Billing phone general option</label>
      <input id="phone" v-model="shipping.phone" placeholder="+1 234 567 8901" autocomplete="tel" type="tel" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
