import {useI18n} from "vue-i18n";
import {ref} from "vue";

export const useUserPreferences = () => {
  // const colorMode = useColorMode();
  const { locale } = useI18n();

  // Get saved currency preference
  const savedCurrency = ref<string>("");

  // Cycle through themes (for toggle button)
  const toggleTheme = () => {

  };

  // Save currency preference
  const setCurrency = (currency: string) => {

  };

  // Get all preferences
  const getPreferences = () => {

  };

  return {
    // Expose colorMode directly for full access to preference, value, unknown, forced
    // colorMode,
    // Convenience methods
    toggleTheme,
    currency: savedCurrency,
    setCurrency,
    getPreferences,
  };
};
