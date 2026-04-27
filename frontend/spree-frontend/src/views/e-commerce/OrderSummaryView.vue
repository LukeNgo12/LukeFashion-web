<script lang="ts">
import {RouterLink} from "vue-router";
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import DownloadableItems from "@/components/e-commerce/DownloadableItems.vue";
import {useHelpers} from "@/composables/useHelpers.ts";
import LoadingIcon from "@/components/e-commerce/ui/LoadingIcon.vue";
import OrderStatusLabel from "@/components/e-commerce/shopElements/OrderStatusLabel.vue";
import axios from "axios";

export default defineComponent({
  setup(){
    const { formatDate, formatPrice, getErrorMessage } = useHelpers();
    return { formatDate, formatPrice, getErrorMessage }
  },
  components: {
    RouterLink, IonIcon,
    DownloadableItems,
    LoadingIcon,
    OrderStatusLabel
  },

  data() {
    return {
      isLoaded: false,
      order: {},

      downloadableItems: [],
      orderIsNotCompleted: true,
      errorMessage: true,
      isSummaryPage: true,
      isCheckoutPage: true,
      hasDiscount: true,
    }
  },
  methods: {
    refreshOrder() {

    }
  },
  mounted(){
    const getOrder = async () => {
      const data = await axios.get("http://localhost:3000/admin/orders").data
      const order = {
        databaseId: '1',
        date: data?.created_at,
        subtotal: data?.payment_total || 999,
        totalTax: data?.included_tax_total,
        status: data?.state,
        paymentTitle: `[#${data.admin_order.id}] Order Payment`,
        paymentMethodTitle: "CreditCard",
        lineItems: {
          nodes: [{
            variation: {
              node: {
                name: "",
                image: {
                  sourceUrl: "",
                  altText: "",
                  title: ""
                }
              }
            },
            product: {
              node: {
                slug: 'slug'
              }
            },
            total: 500,
            quantity: data?.item_count
          }]
        },
        shippingTotal: data?.shipment_total,
        discountTotal: data?.promo_total,
        total: data?.payment_total
      }
      this.order = order
    }
    getOrder()

  }
})
</script>

<template>
  <div
    class="w-full min-h-[600px] flex items-center p-4 text-gray-800 dark:text-gray-200 md:bg-white md:dark:bg-gray-800 md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16 flex-col">
    <LoadingIcon v-if="!isLoaded" class="flex-1"/>
    <template v-else>
      <div v-if="order" class="w-full">
        <template v-if="isSummaryPage">
          <div class="flex items-center gap-4">
            <RouterLink
              to="/my-account?tab=orders"
              class="inline-flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="Back to orders"
              aria-label="Back to orders">
              <ion-icon name="ion:chevron-back-outline"/>
            </RouterLink>
            <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('views.orderSummaryView.orderSummary') }}</h1>
          </div>
        </template>
        <template v-else-if="isCheckoutPage">
          <div class="flex items-center justify-between w-full mb-2">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('views.orderSummaryView.orderReceived') }}</h1>
            <button
              v-if="orderIsNotCompleted"
              type="button"
              class="inline-flex items-center justify-center p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              title="Refresh order"
              aria-label="Refresh order"
              @click="refreshOrder">
              <ion-icon name="ion:refresh-outline"/>
            </button>
          </div>
          <p class="text-gray-600 dark:text-gray-400">{{ $t('views.orderSummary.orderThanks') }}</p>
        </template>
        <hr class="my-8 border-gray-200 dark:border-gray-700"/>
      </div>
      <div v-if="order" class="flex-1 w-full">
        <div class="flex items-start justify-between">
          <div class="w-[21%]">
            <div class="mb-2 text-xs text-gray-400 dark:text-gray-500 uppercase">
              {{ $t('views.orderSummary.shopOrder') }}
            </div>
            <div class="leading-none text-gray-900 dark:text-white">#{{ order.databaseId! }}</div>
          </div>
          <div class="w-[21%]">
            <div class="mb-2 text-xs text-gray-400 dark:text-gray-500 uppercase">
              {{ $t('views.orderSummary.generalDate') }}
            </div>
            <div class="leading-none text-gray-900 dark:text-white">{{
                formatDate(order?.date)
              }}
            </div>
          </div>
          <div class="w-[21%]">
            <div class="mb-2 text-xs text-gray-400 dark:text-gray-500 uppercase">
              {{ $t('views.orderSummary.generalStatus') }}
            </div>
            <OrderStatusLabel v-if="order?.status" :order="order"/>
          </div>
          <div class="w-[21%]">
            <div class="mb-2 text-xs text-gray-400 dark:text-gray-500 uppercase">
              {{ $t('views.orderSummary.generalPaymentMethod') }}
            </div>
            <div class="leading-none text-gray-900 dark:text-white">{{
                order?.paymentMethodTitle
              }}
            </div>
          </div>
        </div>

        <template v-if="order.lineItems">
          <hr class="my-8 border-gray-200 dark:border-gray-700"/>

          <div class="grid gap-2">
            <div v-for="item in order.lineItems.nodes" :key="item.id"
                 class="flex items-center justify-between gap-8">
              <RouterLink v-if="item.product?.node" :to="`/product/${item.product.node.slug}`">
                <img
                  class="w-16 h-16 rounded-xl"
                  :src="item.variation?.node?.image?.sourceUrl || item.product.node?.image?.sourceUrl || '/images/placeholder.png'"
                  :alt="item.variation?.node?.image?.altText || item.product.node?.image?.altText || 'Product image'"
                  :title="item.variation?.node?.image?.title || item.product.node?.image?.title || 'Product image'"
                  width="64"
                  height="64"
                  loading="lazy"/>
              </RouterLink>
              <div class="flex-1 leading-tight text-gray-900 dark:text-white">
                {{ item.variation ? item.variation?.node?.name : item.product?.node.name! }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ $t('views.orderSummaryView.quantity') }} {{ item.quantity }}
              </div>
              <span class="text-sm font-semibold text-gray-900 dark:text-white">{{
                  formatPrice(item.total!)
                }}</span>
            </div>
          </div>
        </template>

        <hr class="my-8 border-gray-200 dark:border-gray-700"/>

        <div v-if="downloadableItems.length && !orderIsNotCompleted">
          <DownloadableItems :downloadableItems="downloadableItems"/>
          <hr class="my-8 border-gray-200 dark:border-gray-700"/>
        </div>

        <div class="text-gray-800 dark:text-gray-200">
          <div class="flex justify-between">
            <span>{{ $t('views.orderSummaryView.shopSubtotal') }}</span>
            <span v-html="order?.subtotal"></span>
          </div>
          <div class="flex justify-between">
            <span>{{ $t('views.orderSummaryView.generalTax') }}</span>
            <span v-html="order?.totalTax"></span>
          </div>
          <div class="flex justify-between">
            <span>{{ $t('views.orderSummaryView.generalShipping') }}</span>
            <span v-html="order?.shippingTotal"></span>
          </div>
          <div v-if="hasDiscount" class="flex justify-between text-primary">
            <span>{{ $t('views.orderSummaryView.shopDiscount') }}</span>
            <span>- <span v-html="order?.discountTotal"></span></span>
          </div>
          <hr class="my-8 border-gray-200 dark:border-gray-700"/>
          <div class="flex justify-between text-gray-900 dark:text-white">
            <span class>{{ $t('views.orderSummaryView.shopTotal') }}Shop Total:</span>
            <span class="font-semibold" v-html="order?.total"></span>
          </div>
        </div>
      </div>
      <div v-else-if="errorMessage"
           class="flex flex-col items-center justify-center flex-1 w-full gap-4 text-center">
        <ion-icon name="ion:sad-outline" size="96" class="text-gray-700 dark:text-gray-400"/>
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ $t('views.orderSummaryView.error') }}Error</h1>
        <div v-if="errorMessage" class="text-sm text-red-500 dark:text-red-400"
             v-html="errorMessage"/>
      </div>
    </template>
  </div>
</template>

<style scoped lang="postcss">

</style>
