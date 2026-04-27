<script lang="ts">
import {defineComponent} from 'vue'

interface PersonalInformationData {
  customer: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
  }
  loading: boolean;
  button: {
    text: string;
    color: string;
  }
}

export default defineComponent({
  name: "PersonalInformation",
  data() {
    return {
      customer: {
        firstName: "",
        lastName: "",
        username: "",
        email: ""
      },
      loading: true,
      button: {
        text: "",
        color: ""
      }
    } as PersonalInformationData
  },
  methods: {
    saveChanges(){

    }
  }
})
</script>

<template>
  <div v-if="customer">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ $t('forms.personalInformation.personalInformation') }}</h1>
      <p class="text-gray-600 dark:text-gray-400">
        {{ $t('forms.personalInformation.mangageYourPersonal') }}
      </p>
    </div>

    <form
      class="bg-white dark:bg-gray-800 rounded-lg shadow-xs border border-gray-100 dark:border-gray-700 wn-form"
      @submit.prevent="saveChanges">
      <div class="p-6 md:px-8 pb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{$t('forms.personalInformation.personalDetails')}}</h3>
      </div>
      <!-- Form Fields -->
      <div class="grid gap-6 p-6 md:p-8 md:grid-cols-2">
        <div class="w-full space-y-2">
          <label for="first-name"
                 class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('forms.personalInformation.personalDetails')
            }}</label>
          <input id="first-name" v-model="customer.firstName" placeholder="John"
                 autocomplete="given-name" type="text"/>
        </div>

        <div class="w-full space-y-2">
          <label for="last-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('forms.personalInformation.lastName')
            }}</label>
          <input id="last-name" v-model="customer.lastName" placeholder="Doe"
                 autocomplete="family-name" type="text"/>
        </div>

        <div class="w-full space-y-2">
          <label for="username" class="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('forms.personalInformation.username') }}
          </label>
          <input
            id="username"
            v-model="customer.username"
            placeholder="johndoe"
            autocomplete="username"
            type="text"
            disabled="true"
            class="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed opacity-60"/>
        </div>

        <div class="w-full space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('forms.personalInformation.email') }}
          </label>
          <input id="email" v-model="customer.email" placeholder="johndoe@email.com"
                 autocomplete="email" type="email"/>
        </div>
      </div>

      <!-- Submit Button -->
      <div
        class="p-6 pt-4 flex bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-700">
        <Button :loading="loading" type="submit" class="ml-auto" :class="button.color">
          {{ button.text }}
        </Button>
      </div>
    </form>
  </div>

</template>

<style scoped lang="postcss">

</style>
