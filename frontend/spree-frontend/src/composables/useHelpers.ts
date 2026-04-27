import {useRoute} from "vue-router";
import {computed, ref} from "vue";

export function useHelpers() {
  const route = useRoute();
  // const runtimeConfig = useRuntimeConfig();
  const requestOrigin = window.location.origin || undefined;

  const isShowingMobileMenu = ref<boolean>( false);
  const wooNuxtVersionInfo: string =  '0.0.0';
  const productsPerPage: number =  24;
  // const wooNuxtSEO = Array.isArray(runtimeConfig.public?.WOO_NUXT_SEO) ? runtimeConfig.public?.WOO_NUXT_SEO : [];
  // const frontEndUrl = runtimeConfig.public?.FRONT_END_URL?.replace(/\/$/, '') || requestOrigin;
  const isDev: boolean = process.env.NODE_ENV === 'development';
  const FALLBACK_IMG = '/images/placeholder.jpg';

  /**
   * Toggles the mobile menu.
   */
  function toggleMobileMenu(state: boolean | undefined = undefined): any {
    isShowingMobileMenu.value = state
  }

  /**
   * Clears all cookies.
   */
  function clearAllCookies(): void {

  }

  /**
   * Clear all local storage.
   */
  function clearAllLocalStorage(): void {

  }

  /**
   * Replaces a query parameter in a URL.Replace a query parameter in a URL
   * @param {string} param - The query parameter to replace.
   * @param {string} newval - The new value for the query parameter.
   * @param {string} search - The URL to search.
   * @returns {string} The updated URL.
   */
  function replaceQueryParam(param: string, newval: string, search: string): any {

  }

  /**
   * Removes a class from the body element.
   * @param {string} className - The class to remove.
   */
  function removeBodyClass(className: string): void {

  }

  /**
   * Adds a class to the body element.
   * @param {string} className - The class to add.
   */
  function addBodyClass(className: string): void {

  }

  /**
   * Toggles a class on the body element.
   * @param {string} className - The class to toggle.
   */
  function toggleBodyClass(className: string): void {

  }

  /**
   * Determines if the route query is empty.
   * @returns {boolean} True if the route query is empty, false otherwise.
   */
  const isQueryEmpty = computed<boolean>(() => Object.keys(route.query).length === 0);

  /**
   * Formats a date string.
   * @param {string} date - The date string to format.
   * @returns {string} The formatted date string.
   */
  const formatDate = (date?: string | null): any => {

  };

  /**
   * Formats a price string.
   * @param {string} price - The price string to format.
   * @returns {string} The formatted price string.
   */
  const formatPrice = (price: string): any => {

  };

  /**
   * Scrolls to the top of the page.
   */
  const scrollToTop = () => {

  };

  /**
   * Strips HTML tags from a string.
   * @param {string} str - The string to strip.
   * @returns {string} The stripped string.
   */
  const stripHtml = (str: string | null | undefined = ''): any => {

  };

  /**
   * Extract GraphQL error message and optionally log it
   * @param error - GraphQL error object
   * @returns The error message or undefined
   */
  const getErrorMessage = (error: unknown): any => {

  };

  /**
   * Check GraphQL response extensions for authentication errors
   * This handles cases where WordPress returns 403 with valid data but auth errors in extensions.debug
   * @param response - GraphQL response object that may contain extensions.debug array
   */
  const checkGraphQLExtensions = (response: any): void => {

  };

  /**
   * Get domain from URL
   * @param {string} url - The URL to get the domain from.
   * @returns {string} The domain.
   */
  const getDomain = (url: string): any => {

  };
  const debounce = (func: Function, delay: number = 100) => {

  };
  return {
    isShowingMobileMenu,
    wooNuxtVersionInfo,
    productsPerPage,
    isQueryEmpty,
    // wooNuxtSEO,
    // frontEndUrl,
    isDev,
    checkGraphQLExtensions,
    FALLBACK_IMG,
    clearAllCookies,
    clearAllLocalStorage,
    replaceQueryParam,
    addBodyClass,
    removeBodyClass,
    toggleBodyClass,
    toggleMobileMenu,
    formatDate,
    formatPrice,
    scrollToTop,
    stripHtml,
    debounce,
    getErrorMessage,
    getDomain,
  };
}
