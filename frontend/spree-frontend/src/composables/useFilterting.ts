import {computed, ref} from "vue";
import {useHelpers} from "@/composables/useHelpers.ts";
import {useRoute, useRouter} from "vue-router";
import {useProducts} from "@/composables/useProducts.ts";

export function useFiltering() {



  function getFilter(filterName: string): any[] {
    return [];
  }


  function setFilter(filterName: string, filterValue: string[]) {

  }


  function resetFilter(): void {

  }

  /**
   * Check if there are any filters active
   * @returns {boolean}
   */

  /**
   * Filter the products based on the active filters
   * @param {Product[]} products - An array of all the products
   * @returns {Product[]} - An array of filtered products
   */
  function filterProducts(products: any[]): any[] {

    return [];
  }

  return { getFilter, setFilter, resetFilter, filterProducts };
}
