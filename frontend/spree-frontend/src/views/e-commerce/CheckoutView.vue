<script lang="ts">


  import {defineComponent} from "vue";
  import PasswordInput from "@/components/e-commerce/forms/PasswordInput.vue";
  import PaymentOptions from "@/components/e-commerce/shopElements/PaymentOptions.vue";
  import ShippingOptions from "@/components/e-commerce/shopElements/ShippingOptions.vue";
  import BillingDetails from "@/components/e-commerce/forms/BillingDetails.vue";

  export default defineComponent({
    components: {
      PasswordInput,
      PaymentOptions,
      ShippingOptions,
      BillingDetails
    },
    data(){
      return {
        cart: {
          availableShippingMethods: [
            // "MasterCard",
            {
              rates: 500,
            }

          ],
          chosenShippingMethod: ["flight"]

        },
        customer: {
          billing: {
            email: ""
          }
        },
        isInvalidEmail: false,
        shipToDifferentAddress: "",
        viewer: true,
        orderInput: {
          createAccount: "",
          username: "",
          password: "",
          customerNote: "",
          paymentMethod: ""
        },
        password:""
      }
    },
    methods: {
      navigateToLogin(url: string){

      },
      checkEmailOnBlur(email: string){

      },
      checkEmailOnInput(email: string){

      },
      payNow () {

      }
    }
  })
</script>

<template>
  <div class="flex flex-col min-h-150">
   <div >
    <h2 class="mb-2 text-2xl font-bold">{{$t('views.checkoutView.title')}}</h2>
    <span class="mb-4 text-gray-400">{{$t('views.checkoutView.addProductsInYourCart')}}</span>

     <RouterLink to="/products"
     class="flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-lg bg-primary hover:bg-primary-dark"
     >{{$t('views.checkoutView.browseOurProducts')}}</RouterLink>


   </div>

    <form class="container flex flex-wrap items-start gap-8 my-16 justify evenly lg:gap-20" @submit.prevent="payNow"
    >

      <div class="grid w-full max-w-2xl gap-8 wn-form md:flex-1">
        <div>
          <h2 class="w-full mb-2 text-2xl font-semibold leading-none dark:text-white">
            {{$t('views.checkoutView.contactInformation')}}
          </h2>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {{$t('views.checkoutView.alreadyHaveAnAccount')}}<RouterLink to="/my-account" @click="navigateToLogin('/checkout')" class="text-primary text-semibold">{{$t('views.checkoutView.logIn')}}</RouterLink>
          </p>
          <div class="w-full mt-4">
            <label for="email">{{$t('views.checkoutView.billingEmail')}}</label>
            <input
            v-model="customer.billing.email"
            placeholder="johndoe@email.com"
            autocomplete="email"
            type="email"
            name="email"
            :class="{'has-error':isInvalidEmail}"
            @blur="checkEmailOnBlur(customer.billing.email)"
            @input="checkEmailOnInput(customer.billing.email)"
            required=true
            />
            <Transition>
              <div v-if="isInvalidEmail" class="mt-1 text-sm text-red-500">{{$t('views.checkoutView.invalidEmailAddress')}}</div>
            </Transition>
          </div>
          <div v-if="orderInput.createAccount">
              <div class="w-full mt-4">
                <label for="username">{{$t('views.checkoutView.orderSummary.accountUsername')}}</label>
                <input v-model="orderInput.username" placeholder="johndoe" autocomplete="username" type="text" name="username" required/>

              </div>
            <div class="w-full my-2" v-if="orderInput.createAccount">
              <label for="email">{{$t('views.checkoutView.accountPassword')}}</label>
              <input v-model="password" class="my-2"  placeholder="••••••••••" :required="true"/>
            </div>
          </div>
          <div class="w-full my-2" v-if="orderInput.createAccount">
            <label>{{$t('views.checkoutView.accountPassword')}}</label>
            <PasswordInput id="password" class="my-2" v-model="orderInput.password" placeholder="*********" :required="true"></PasswordInput>
          </div>
          <div v-if="!viewer" class="flex items-center gap-2 my-2">
            <label>{{$t('views.checkoutView.createAnAccount')}}</label>
            <input id="creat-account" v-model="orderInput.createAccount" type="checkbox" name="creat-account" />
          </div>
        </div>
        <div v-if="cart?.availableShippingMethods?.length">
          <h2 class="mb-4 text-2xl font-semibold leading-none text-gray-900 dark:text-white">{{$t('views.checkoutView.billing')}}</h2>
          <div class="flex items-center gap-3">
            <input
              id="useSameAddress"
              v-model="shipToDifferentAddress"
              type="checkbox"
              name="useSameAddress"
              class="w-4 h-4 bg-white border-gray-300 rounded-sm text-primary dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-primary"
            />
            <label for="useSameAddress" class="text-sm font-medium t ext-gray-700 dark:text-gray-300">
              {{$t('views.checkoutView.differentAddress')}}
            </label>
          </div>
        </div>
        <div class="space-y-6">
          <div>
<!--            <ShippingDetails v-if="customer?.shipping" v-model="customer.shipping" />-->
          </div>

          <div class="flex items-center gap-3">
            <input
              id="useSameAddressEdit"
              v-model="shipToDifferentAddress"
              type="checkbox"
              name="useSameAddressEdit"
              class="w-4 h-4 bg-white border-gray-300 rounded-sm text-primary dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-primary"

            />
          <label for="userSameAddressEdit" class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{$t('views.checkoutView.differentAddress')}}
          </label>
          </div>
        </div>
      </div>
      <div v-if="shipToDifferentAddress">
        <div class="mb-6">
          <h2 class="mb-2 text-2xl font-semibold leading-none text-gray-900 dark:text-white">{{$t('views.checkoutView.shippingAddress')}}</h2>
        </div>
        <BillingDetails v-if="customer?.billing" v-model="customer.billing" />
      </div>
      <div v-if="!cart?.availableShippingMethods?.length">
        <h2 class="w-full mb-3 text-2xl font-semibold dark:text-white">{{$t('views.checkoutView.billingDetails')}}</h2>
        <BillingDetails v-if="customer?.billing" v-model="customer.billing" />
      </div>

      <hr class="border-gray-300 dark:border-gray-600" />

      <div v-if="cart?.availableShippingMethods?.length">
        <h3 class="mb-4 text-xl font-semibold leading-none dark:text-white">{{$t('views.checkoutView.shippingSelect')}}</h3>
        <ShippingOptions
        />
      </div>
      <hr class="border-gray-300 dark:border-gray-600" />
      <div>
        <h2 class="mb-4 text-xl font-semibold leading-none dark:text-white">{{$t('views.shopElements.orderSummary.paymentOptions')}}</h2>
        <PaymentOptions v-model="orderInput.paymentMethod" class="mb-4"
                        :paymentGateways={} />
      </div>
      <hr class="border-gray-300 dark:border-gray-600" />

      <div>
        <h2 class="mb-4 text-xl font-semibold leading-none dark:text-white">{{$t('views.shopElements.orderSummary.orderNote')}}</h2>
        <textarea id="order-note"
        v-model="orderInput.customerNote"
                  name="order-note"
                  class="w-full min-h-25"
                  rows="4"
                  :placeholder="'Order Note Placeholder'"
        ></textarea>
      </div>
    </form>
  </div>

</template>

<style>
/* Keep only the scale-y transition for email validation */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: all 0.2s ease-in-out;
}

.scale-y-enter-from,
.scale-y-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
</style>
