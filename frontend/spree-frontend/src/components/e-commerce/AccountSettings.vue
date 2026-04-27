<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface AccountSettingsData {
  saving: boolean;
  successMessage: boolean;
  settings: {
    preferences: {
      theme: string,
      language: string,
    },
    notifications: {
      orderUpdates: boolean;
      promotions: boolean;
      newsletter: boolean;
      priceDrops: boolean;
      backInStock: boolean;
      smsNotifications: boolean;
      emailDigest: string;
    },
    themes: {
      value: string;
      label: string;
      icon: string;

    }[],
    digestFrequencies: { value: string; label: string } [],

  },
}

export default defineComponent({
  name: "AccountSettings",
  components: {
    Button,
    IonIcon
  },
  data() {
    return {
      saving: false,
      successMessage: false,
      colorMode: {
        preference: {
          theme: "",
          language: ""
        }
      },
      locale: "en",
      settings: {
        preferences: {
          theme: '',
          language: "en"
        },
        notifications: {
          orderUpdates: true,
          promotions: false,
          newsletter: true,
          priceDrops: true,
          backInStock: true,
          smsNotifications: false,
          emailDigest: 'instant'
        },
        themes:
          [
            {value: 'light', label: 'Light', icon: 'ion:sunny-outline'},
            {value: 'dark', label: 'Dark', icon: 'ion:moon-outline'},
            {value: 'system', label: 'Auto', icon: 'ion:contrast-outline'},
          ],
        digestFrequencies: [
          {value: 'instant', label: 'Instant'},
          {value: 'daily', label: 'Daily Digest'},
          {value: 'weekly', label: 'Weekly Summary'},
          {value: 'never', label: 'Never'},
        ]
      },
      languages: [
        {
          value: "kr",
          label: "Korean"
        },
        {
          value: "jp",
          label: "Japanese"
        }

      ],
    } as AccountSettingsData

  },
  methods: {
    async saveSettings() {
      this.saving = true;

      // Apply theme - colorMode module handles localStorage and DOM automatically
      this.colorMode.preference.theme = this.settings.preferences.theme;

      // Apply language
      if (this.settings.preferences.language !== this.locale) {
        await this.setLocale(this.settings.preferences.language);
      }

      // Simulate saving other settings (notifications, privacy)
      // In production, these would be saved to backend via GraphQL
      await new Promise((resolve) => setTimeout(resolve, 800));

      this.saving = false;
      this.successMessage = true;

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.successMessage = false;
      }, 3000);
    },
    setLocale() {

    },
    deleteAccount() {
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        // In production, this would call a GraphQL mutation or REST API endpoint
        alert('Account deletion would be processed here. This requires custom backend implementation.');
      }
    }

  }
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{$t('components.accountSettings.settings')}}</h1>
      <p class="text-gray-600 dark:text-gray-400">{{$t('components.accountSettings.manageYourPrefence')}}</p>
    </div>

    <form @submit.prevent="saveSettings" class="space-y-6 wn-form">
      <!-- Preferences Section -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-xs border border-gray-100 dark:border-gray-700">
        <div class="p-6 md:px-8 pb-4 border-b border-gray-100 dark:border-gray-700">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{$t('components.accountSettings.preferences')}}</h3>
        </div>

        <div class="p-6 md:p-8 space-y-6">
          <!-- Theme Selection -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{{$t('components.accountSettings.theme')}}</label>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="theme in settings.themes"
                :key="theme.value"
                type="button"
                @click="settings.preferences.theme = theme.value"
                class="flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all"
                :class="
                  settings.preferences.theme === theme.value
                    ? 'border-primary bg-primary/5 dark:bg-primary/10'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-700'
                ">
                <ion-icon :name="theme.icon" size="24"
                          :class="settings.preferences.theme === theme.value ? 'text-primary' : 'text-gray-600 dark:text-gray-400'"/>
                <span
                  class="text-sm font-medium text-center"
                  :class="settings.preferences.theme === theme.value ? 'text-primary' : 'text-gray-700 dark:text-gray-300'">
                  {{ theme.label }}
                </span>
              </button>
            </div>
          </div>

          <!-- Language -->
          <div class="space-y-2">
            <label for="language"
                   class="block text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
            <select id="language" v-model="settings.preferences.language">
              <option v-for="lang in languages" :key="lang.value" :value="lang.value">{{
                  lang.label
                }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <!-- Danger Zone -->
    <div
      class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-xs border border-red-200 dark:border-red-800 overflow-hidden">
      <div
        class="p-6 md:px-8 pb-4 border-b border-red-100 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
        <h3 class="text-lg font-semibold text-red-900 dark:text-red-400">{{$t('components.accountSettings.dangerZone')}}Danger Zone</h3>
      </div>
      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between gap-6">
          <div class="flex items-start gap-3 flex-1">
            <div
              class="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
              <ion-icon name="ion:warning-outline" size="20"
                        class="text-red-600 dark:text-red-400"/>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-1">{{$t('components.accountSettings.deleteAccount')}}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{$t('components.accountSettings.onceYouDeleteYourAccount')}}
              </p>
            </div>
          </div>
          <Button variant="danger" type="button" icon="ion:trash-outline" @click="deleteAccount">
            {{$t('components.accountSettings.button')}}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
