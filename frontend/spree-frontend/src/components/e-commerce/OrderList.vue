<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import LoadingIcon from "@/components/e-commerce/ui/LoadingIcon.vue";
import OrderStatusLabel from "@/components/e-commerce/shopElements/OrderStatusLabel.vue";

export default defineComponent({
  name: "OrderList",
  components: {IonIcon,LoadingIcon,OrderStatusLabel},
  data(){
    return {
      orders: [{
        databaseId: 50,
        orderNumber: 50,
        status: "",
        total: 500,
        date: ""
      }],

    }
  },
  methods: {
    goToOrder(order: any){

    },
    refresh(){

    },
    formatDate(date: any){

    }
  }
})
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg flex shadow-xs border border-gray-100 dark:border-gray-700 min-h-62.5 p-4 md:p-8 justify-center items-center">
    <div v-if="orders && orders.length" class="w-full">
      <table class="w-full text-left table-auto" aria-label="Order List">
        <thead>
        <tr>
          <th>{{$t('components.orderList.order')}}</th>
          <th>{{$t('components.orderList.date')}}</th>
          <th>{{$t('components.orderList.status')}}</th>
          <th class="text-right">{{$t('components.orderList.total')}}</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="order in orders"
          :key="order.orderNumber || String(order.databaseId)"
          class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          @click="goToOrder(order.databaseId)">
          <td class="rounded-l-lg">{{ order.orderNumber }}</td>
          <td>{{ formatDate(order.date) }}</td>
          <td><OrderStatusLabel v-if="order.status" :order="order" /></td>
          <td class="text-right rounded-r-lg" v-html="order.total"></td>
        </tr>
        </tbody>
      </table>
      <div class="text-center flex justify-center w-full mt-8">
        <button
          type="button"
          @click="refresh"
          class="flex items-center gap-1 text-sm leading-none hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
          <span>{{$t('components.orderList.refreshList')}}</span>
          <ion-icon name="ion:refresh-outline" />
        </button>
      </div>
    </div>
    <div v-else-if="orders && orders.length === 0" class="min-h-62.5 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
      {{$t('components.orderList.noOrdersFound')}}
    </div>
    <LoadingIcon v-else size="24" stroke="2" />
  </div>
</template>

<style scoped lang="postcss">
/* Table Body Row Styling */
tbody tr {
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Zebra Striping */
  &:nth-child(odd) {
    background-color: #f9fafb; /* bg-gray-50 */
  }

  &:hover {
    color: #1f2937; /* hover:text-gray-800 */
  }

  /* Dark Mode Styles */
  @media (prefers-color-scheme: dark) {
    color: #9ca3af; /* dark:text-gray-400 */

    &:nth-child(odd) {
      /* dark:bg-gray-700/50 - Using RGBA for 50% opacity */
      background-color: rgba(55, 65, 81, 0.5);
    }

    &:hover {
      color: #e5e7eb; /* dark:hover:text-gray-200 */
    }
  }
}

/* Table Cell & Header Styling */
td,
th {
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db; /* dark:text-gray-300 */
  }
}

/* Optional: Class-based Dark Mode Support */
.dark {
  & tbody tr {
    color: #9ca3af;
    &:nth-child(odd) { background-color: rgba(55, 65, 81, 0.5); }
    &:hover { color: #e5e7eb; }
  }
  & td, & th {
    color: #d1d5db;
  }
}
</style>
