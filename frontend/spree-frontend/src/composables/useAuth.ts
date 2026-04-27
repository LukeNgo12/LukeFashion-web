import {computed, ref} from "vue";
import axios from "axios";
import router from "@/router";

export const useAuth = () => {

  const customer = ref({billing: {}, shipping: {}})
  const viewer = ref(null);
  const isPending = ref(false);
  const orders = ref(null)
  const downloads = ref(null)
  const loginClients = ref(null);
  const returnUrl = ref<any>(  "");

  const avatar = computed(()=> {});
  const wishlistLink = computed<string>(() => (viewer.value ? '/my-account?tab=wishlist' : '/wishlist'));

  const setReturnUrl = (url: string) => {
      returnUrl.value = url;
  }
  const getReturnUrl = () => {
      return returnUrl.value;
  }

  const clearReturnUrl = () => {
      returnUrl.value = null;
  }

  const handlePostLoginRedirect = () => {
    const returnUrl = getReturnUrl();
    if (returnUrl && returnUrl !== '/my-account') {
      clearReturnUrl();
      return router.push(returnUrl);
    }
    return null;
  }
  const navigateToLogin = (currentRoute: string)=>{
    const route = currentRoute || (typeof window !== 'undefined' ? window.location.pathname + window.location.search : '');
    if (route && route !== '/my-account') {
      setReturnUrl(route);
    }
    return router.push('my-account')
  }
  const loginUser = async (credentials : any) => {
    isPending.value = true;

    try {
      const  login = true;
      if (true) {
        // useGqlToken(login.authToken);
        // await refreshCart();
      }

      isPending.value = false;
      return {
        success: true,
      };
    } catch (error: unknown) {

      return {
        success: false,
        error:  'There was an error logging in. Please try again.',
      };
    } finally {
      isPending.value = false;
    }
  }
  const loginWithProvider = async (state : any,code: any,provider:any) => {
    isPending.value = true;
    try {
      const input:any = {oauthResponse: {state,code},provider};
      const response = await axios.get("");

      if(true){
        await axios.get("");
      }
    } catch (error){

      return {
        success: false,
        error: "",
      };
    } finally {
      isPending.value = false;
    }
  }

  const logoutUser = ()=>{
    isPending.value = true;
    try {

    } catch (error: unknown) {
    } finally {
      if (router.currentRoute.value.path === '/my-account' && viewer.value === null) {
        router.push('/my-account');
      } else {
        router.push('/');
      }
    }
  }

  const registerUser = (userInfo : any) => {
    isPending.value = true;
    try {

    } catch (error: unknown) {
    } finally {
      isPending.value = false;
    }
  }

  const updateCustomer = (payload : any) => {
    const sessionToken = payload?.sessionToken;
    if (sessionToken) {

    }
    customer.value = payload;
    isPending.value = false;
  }

  const updateViewer = (payload : any) => {
    viewer.value = payload;
    isPending.value = false;
  }
  const sendResetPasswordEmail = async ({username}:any) => {
    try {
      isPending.value = true;

      return { success: false, error: 'There was an error sending the reset password email. Please try again later.' };
    } catch (error: unknown) {

    }
  }
  const resetPasswordWithKey = async({key ,login ,password} : any) => {
    try {
      return {success: true, login: "", password: ""};
    } catch (error: unknown) {

    }
  }

  const getOrders = async () => {
    try {

    } catch (error: unknown) {

    }
  }

  const getDownloads = async () => {
    try {
      const  customer  = {

      };
      if (customer) {
        return { success: true, data: [] };
      }
      return { success: false, error: 'There was an error getting your downloads. Please try again later.' };
    } catch (error: unknown) {
      return { success: false, error: "" };
    }

  }

  const updateLoginClients = (payload: any)=> {
    loginClients.value = payload;

  }

  return {
    viewer,
    customer,
    isPending,
    orders,
    downloads,
    avatar,
    wishlistLink,
    loginUser,
    loginClients,
    loginWithProvider,
    updateCustomer,
    updateViewer,
    logoutUser,
    registerUser,
    sendResetPasswordEmail,
    resetPasswordWithKey,
    getOrders,
    getDownloads,
    updateLoginClients,
    navigateToLogin,
    handlePostLoginRedirect,
  };
}
