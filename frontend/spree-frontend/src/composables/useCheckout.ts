import {ref} from "vue";
import {useAuth} from "@/composables/useAuth.ts";


export function useCheckout(){
  const {customer, loginUser} = useAuth();
  const orderInput = ref<any>({
    customerNote: '',
    paymentMethod: '',
    shipToDifferentAddress: false,
    metaData: [{ key: 'order_via', value: 'WooNuxt' }],
  });

  const isProcessingOrder = ref<boolean>(false);
  const checkoutError = ref<string | null>(null);

  // Helper function to build checkout payload
  const buildCheckoutPayload = (isPaid = false): any => {

  };

  // Helper function to check if payment method is PayPal
  const isPayPalPayment = (): any => {

  };

  // Helper function to handle PayPal redirect
  const handlePayPalRedirect = async (checkout: any, orderId: string, orderKey: string): Promise<void> => {

  };

  // Helper function to handle post-checkout account creation
  const handleAccountCreation = async (): Promise<void> => {

  };

  // Helper function to finalize checkout
  const finalizeCheckout = async (checkout: any): Promise<void> => {

  };

  // if Country or State are changed, calculate the shipping rates again
  async function updateShippingLocation() {

  }

  async function openPayPalWindow(redirectUrl: string): Promise<boolean> {
    return new Promise((resolve) => {
      const width = 750;
      const height = 750;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2 + 80;
      const payPalWindow = window.open(redirectUrl, '', `width=${width},height=${height},top=${top},left=${left}`);
      const timer = setInterval(() => {
        if (payPalWindow && payPalWindow.closed) {
          clearInterval(timer);
          resolve(true);
        }
      }, 500);
    });
  }

  const processCheckout = async (isPaid = false): Promise<any> => {

  };

  return {
    orderInput,
    isProcessingOrder,
    checkoutError,
    processCheckout,
    updateShippingLocation,
  };
}
