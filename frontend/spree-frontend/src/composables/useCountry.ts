import {ref} from "vue";
import axios from "axios";

export const useCountry = () => {
  // State to store allowed countries
  const allowedCountries = ref<any[] | null>(null);
  const isLoadingAllowedCountries = ref<boolean>(false);

  // State to store the countries to be shown - init with static countries
  const countriesToShow = ref<any[]>([]);

  // State to store states for each country state
  const countryStatesDict = ref<{ [code: string]: any[] }>({});
  const isLoadingCountryStates = ref<{ [code: string]: boolean }>({});

  // Function to get allowed countries from API
  const getAllCountries = async () : Promise<any> => {
    const countryData = await axios.get("http://localhost:3000/admin/countries")
    return countryData
  }
  async function getAllowedCountries() {

  }

  // Function to get states for a specific country from API - once
  async function getStatesForCountry(countryCode: any) {

  }

  return {
    getAllowedCountries,
    countriesToShow,
    getAllCountries,
    getStatesForCountry,
    countryStatesDict,
  };
};
