<script lang="ts">
import {defineComponent} from 'vue'
interface OrderStatusLabelData {
  order: {
    status: string
  }
}

export default defineComponent({
  name: "OrderStatusLabel",
  computed: {
    readableStatus() {
      return this.order?.status?.replace(/_/g,' ') || '';
    }
  },
  props: {
    order: {
      type: Object
    }
  },
  data(){
    return {
      order: {
        status: ""
      }
    } as OrderStatusLabelData
  }
})
</script>

<template>
  <span :class="`order-${order?.status}`" class="order-status">{{ readableStatus }}</span>

</template>

<style scoped lang="postcss">
/* Base Status Badge Styling */
.order-status {
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem; /* rounded-md */
  font-weight: 600; /* font-semibold */
  font-size: 0.75rem; /* text-xs */
  line-height: 1; /* leading-none */
  padding: 0.375rem; /* p-1.5 */
  display: inline-block;

  /* Default Colors (Light) */
  background-color: #f3f4f6; /* bg-gray-100 */
  border-color: #e5e7eb; /* default border */
  color: #374151; /* gray-700 */

  /* Default Colors (Dark) */
  @media (prefers-color-scheme: dark) {
    background-color: #374151; /* bg-gray-700 */
    border-color: #4b5563; /* border-gray-600 */
    color: #d1d5db; /* text-gray-300 */
  }
}

/* Status Specific Variations */
.order-COMPLETED {
  background-color: #f0fdf4; /* green-50 */
  border-color: #dcfce7; /* green-100 */
  color: #16a34a; /* green-600 */

  @media (prefers-color-scheme: dark) {
    background-color: rgba(20, 83, 45, 0.2); /* green-900/20 */
    border-color: #065f46; /* green-800 */
    color: #4ade80; /* green-400 */
  }
}

.order-CANCELLED {
  background-color: #fef2f2; /* red-50 */
  border-color: #fee2e2; /* red-100 */
  color: #dc2626; /* red-600 */

  @media (prefers-color-scheme: dark) {
    background-color: rgba(127, 29, 29, 0.2); /* red-900/20 */
    border-color: #991b1b; /* red-800 */
    color: #f87171; /* red-400 */
  }
}

.order-PENDING {
  background-color: #fefce8; /* yellow-50 */
  border-color: #fef9c3; /* yellow-100 */
  color: #ca8a04; /* yellow-600 */

  @media (prefers-color-scheme: dark) {
    background-color: rgba(113, 63, 18, 0.2); /* yellow-900/20 */
    border-color: #854d0e; /* yellow-800 */
    color: #facc15; /* yellow-400 */
  }
}

.order-PROCESSING {
  background-color: #eff6ff; /* blue-50 */
  border-color: #dbeafe; /* blue-100 */
  color: #2563eb; /* blue-600 */

  @media (prefers-color-scheme: dark) {
    background-color: rgba(30, 58, 138, 0.2); /* blue-900/20 */
    border-color: #1e40af; /* blue-800 */
    color: #60a5fa; /* blue-400 */
  }
}
</style>
