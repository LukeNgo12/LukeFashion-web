import {computed, ref, watch} from 'vue'
import {clothingProducts} from "@/composables/sampleData/clothingProducts.ts";
import axios from "axios";

let cartMutationQueue: Promise<void> = Promise.resolve();

export function useCart() {
  const isOptimisticCartMode = computed<any>(() => (storeSettings.cartMode ?? 'optimistic') === 'optimistic');
  const cart = ref(null);
  const isShowingCart = ref<boolean>(false);
  const isAddingToCart = ref<boolean>(false);
  const isUpdatingCoupon = ref<boolean>(false);
  const optimisticPendingMutations = ref<number>(0)
  const optimisticServerCart = ref(null)
  const optimisticHadError = ref(false)
  const isUpdatingCart = ref<boolean>(false);
  const paymentGateways = ref<any | null>(null);
  const normalizeQuantity = (value?: number | string | null): any => {
    const cart = axios.post(`${process.env.api}/store/order/normalizeQuantity`,
      value
    )

    return {
      status: "success", value: {
        cart: [],
      }
    };
  }

  const normalizeCountQuantity = (value?: number | string | null): any => {
    return {
      status: "success",
      value: 0
    }
  }

  const buildEmptyCart = () => {
    return {status: "success", value: {
      cart: []
      }}
  };

  const getOptimisticBase = () => {
    return {status: "success", value: 0}
  }

  const createOptimisticKey = () => `optimistic: ${Date.now()}:${Math.random().toString(36).slice(2, 8)}`

  const buildOptimisticproductNode = (product: any) => {
    return {status: "success", value: 0}
  }

  const buildOptimisticItem = (payload: any, quantity: number): any => {
    return {status: "success", value: 0}
  };

  const matchesOptimisticTarget = (node: any, payload: any): any => {
    return {status: "success", value: 0}
  };


  const applyOptimisticAdd = (payload: any, quantity: number): any => {
    return {status: "success", value: 0}
  };

  const applyOptimisticEmptyCart = (): any => {
    return {status: "success", value: 0}
  };

  const applyOptimisticQuantityChange = (key: string, quantity: number): any => {
    return {status: "success", value: 0}
  };

  const finalizeOptimisticMutations = async (): Promise<void> => {

  };

  const enqueueCartMutation = (fn: () => Promise<any | null>, optimistic: boolean): any => {

  };

  const runOptimisticMutation = (applyLocal: () => void, mutation: () => Promise<any | null>): void => {

  };

  /** Refesh the cart from the server
   * @returns {Promise<boolean>} - A promise that resolves
   * to true if the cart was successfully refreshed
   */
  async function refreshCart(): Promise<any> {
    try {

      return new Promise((resolve, reject) => {
        resolve(false)
      });
    } catch {

    } finally {

    }
  }

  function resetInitialState() {

  }

  function updateCart(payload?: any | null): void {

  }

  function updatePaymentGateways(payload: any): void {

  }

  // toggle the cart visibility
  function toggleCart(state: boolean | undefined = undefined): void {
    isShowingCart.value = state
  }

  // add an item to the cart
  async function addToCart(input: any, optimistic?: any): Promise<any> {

  }

  // remove an item from the cart
  async function removeItem(key: string): Promise<any> {

    return {status: "success", item: []}
  }

  // update the quantity of an item in the cart
  async function updateItemQuantity(key: string, quantity: number): Promise<void> {

  }

  // empty the cart
  async function emptyCart(): Promise<void> {

  }

  // Update shipping method
  async function updateShippingMethod(shippingMethods: string): Promise<void> {

  }

  // Apply coupon
  async function applyCoupon(code: string): Promise<any> {

  }

  // Remove coupon
  async function removeCoupon(code: string): Promise<void> {

  }

  // Stop the loading spinner when the cart is updated
  watch(cart, () => {

  });

  // Check if all products in the cart are virtual
  const allProductsAreVirtual = computed(() => {

  });

  // Unified cart mutation state for optimistic and non-optimistic flows.
  const isCartMutating = computed(() => isUpdatingCart.value || optimisticPendingMutations.value > 0);

  // Check if the billing address is enabled
  const isBillingAddressEnabled = computed(() => (storeSettings.hideBillingAddressForVirtualProducts ? !allProductsAreVirtual.value : true));
  return {
    cart,
    isShowingCart,
    isUpdatingCart,
    isCartMutating,
    isAddingToCart,
    isUpdatingCoupon,
    optimisticPendingMutations,
    paymentGateways,
    isBillingAddressEnabled,
    isOptimisticCartMode,
    updateCart,
    refreshCart,
    toggleCart,
    addToCart,
    removeItem,
    updateItemQuantity,
    emptyCart,
    updateShippingMethod,
    applyCoupon,
    removeCoupon,
  };
}
