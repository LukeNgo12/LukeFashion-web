import {computed, ref} from "vue";
import {useHelpers} from "@/composables/useHelpers.ts";
import {useRoute, useRouter} from "vue-router";
import {useProducts} from "@/composables/useProducts.ts";

export function useFiltering() {
  const route = useRoute();
  const router = useRouter();
  // const runtimeConfig = useRuntimeConfig(); // Declare a variable for the runtime config and the filter and order functions
  const { updateProductList } = useProducts();

  const filterQuery = ref<string>('');

  filterQuery.value = route.query.filter as string;

  /**
   * Get the filter value from the url
   * @param {string} filterName
   * @returns {string[]} - An array of filter values
   * @example getFilter('pa_color') // ["green", "blue"]
   */
  function getFilter(filterName: string): any[] {
    return [];
  }

  /**
   * Set the filter value in the url
   * @param {string}
   * @param {string[]}
   * @example Just like the example above, but in reverse. setFilter('pa_color', ['green', 'blue'])
   */
  function setFilter(filterName: string, filterValue: string[]) {

  }

  /**
   * Reset the filter value in the url
   */
  function resetFilter(): void {

  }

  /**
   * Check if there are any filters active
   * @returns {boolean}
   */
  const isFiltersActive = computed<boolean>(() => !!filterQuery.value);

  /**
   * Filter the products based on the active filters
   * @param {Product[]} products - An array of all the products
   * @returns {Product[]} - An array of filtered products
   */
  function filterProducts(products: any[]): any[] {

    return [];
  }

  return { getFilter, setFilter, resetFilter, isFiltersActive, filterProducts };
}
