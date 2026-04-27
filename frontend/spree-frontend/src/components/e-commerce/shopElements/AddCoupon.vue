<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue"

export default defineComponent({
  name: "AddCoupon",
  components: {
    IonIcon,
  },
  data(){
    return {
      errorMessage: "",
      cart : {
        appliedCoupons: ""
      },
      couponCode: "",
      isUpdatingCoupon: true,
      coupon: {
        code: ""
      }
    }
  },
  computed:{
    productType(){
      return this.item.variation? this.item.variation?.node: this.item.product?.node;
    },
    productSlug(){

    }

  },

  props: {
    item: {type:Object, required:true}
  },
  methods: {
    submitCoupon(){

    },
    removeCoupon(code: ""){

    }
  }
})
</script>

<template>
  <div>
    <form class="flex gap-1" @submit.prevent="submitCoupon">
      <input
        id="couponCode"
        v-model="couponCode"
        type="text"
        :placeholder="$t('shopElements.addCoupon.couponCode')"
        class="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-xs outline-hidden dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        required="true" />
      <button :loading="isUpdatingCoupon" :disabled="couponCode === ''" type="submit" variant="primary" class="min-w-20">
        {{ $t('shopElements.addCoupon.apply') }}
      </button>
    </form>
    <Transition name="scale-y" mode="out-in">
      <div v-if="errorMessage" class="mt-2 text-xs text-red-600" v-html="errorMessage"></div>
    </Transition>
    <Transition name="scale-y" mode="out-in">
      <div v-if="cart && cart.appliedCoupons" class="text-xs font-semibold uppercase flex flex-wrap gap-2">
        <div v-for="(coupon, index) in cart.appliedCoupons" :key="coupon?.code || index" class="flex flex-wrap mt-2 flex-2">
          <div v-if="coupon?.code" class="bg-primary/5 border-primary/10 border rounded-md flex text-primary leading-none p-1.5 gap-1 items-center">
            <span v-html="coupon.code" />
            <ion-icon name="ion:close" class="rounded-full cursor-pointer hover:bg-primary hover:text-white" @click="removeCoupon(coupon.code)" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="postcss">

</style>
