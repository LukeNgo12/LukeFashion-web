<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
import PasswordInput from "@/components/e-commerce/forms/PasswordInput.vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface ChangePasswordData {
  password: {
    new: string;
    confirm: string;
  },
  loading: boolean;
  button: {
    text: string,
    color: string
  },
  viewer: {
    username: string
  },
  errorMessage: string
}


export default defineComponent({
  name: "ChangePassword",
  components: {
    IonIcon,
    PasswordInput,
    Button
  },
  data(){
    return {
      password: {
        new: '',
        confirm: ''
      },
      loading: false,
      button: {
        text: "Account Update Password", color: 'bg-primary hover:bg-primary-dark'
      },
      viewer: {
        username: ''
      },
      errorMessage: ''
    } as ChangePasswordData
  },
  props: {

  },
  methods: {
    async updatePassword(){

    }
  }

})
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{$t('forms.changePassword.password')}}</h1>
      <p class="text-gray-600 dark:text-gray-400">{{$t('forms.changePassword.updateYourPassword')}}</p>
    </div>

    <form class="bg-white dark:bg-gray-800 rounded-lg shadow-xs border border-gray-100 dark:border-gray-700 wn-form" @submit.prevent="updatePassword">
      <div class="p-6 md:px-8 pb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{$t('forms.changePassword.changePassword')}}</h3>
      </div>
      <!-- Form Fields -->
      <div class="grid p-6 md:p-8 gap-6 md:grid-cols-2">
        <input type="text" :value="viewer?.username || ''" name="username" autocomplete="username" style="display: none" />

        <div class="w-full space-y-2">
          <label for="new-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('forms.changePassword.newPassword') }}</label>
          <PasswordInput id="new-password" v-model="password.new" placeholder="••••••••••" type="text" required />
        </div>

        <div class="w-full space-y-2">
          <label for="new-password-confirm" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('forms.changePassword.confirmNewPassword') }}</label>
          <PasswordInput id="new-password-confirm" v-model="password.confirm" placeholder="••••••••••" type="text" required />
        </div>

        <!-- Password Requirements -->
        <div v-if="password.new" class="col-span-full p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
          <div class="flex items-start gap-3">
            <ion-icon name="ion:information-circle" size="20" class="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div class="text-sm text-blue-900 dark:text-blue-100">
              <p class="font-medium mb-2">{{$t('forms.changePassword.passwordRequirements')}}</p>
              <ul class="space-y-1.5 text-blue-700 dark:text-blue-300">
                <li class="flex items-center gap-2">
                  <ion-icon
                    :name="password.new.length >= 8 ? 'ion:checkmark-circle' : 'ion:ellipse-outline'"
                    size="16"
                    :class="password.new.length >= 8 ? 'text-green-600' : 'text-gray-400'" />
                  {{$t('forms.changePassword.atLeast8Characters')}}
                </li>
                <li class="flex items-center gap-2">
                  <ion-icon
                    :name="password.new === password.confirm && password.new ? 'ion:checkmark-circle' : 'ion:ellipse-outline'"
                    size="16"
                    :class="password.new === password.confirm && password.new ? 'text-green-600' : 'text-gray-400'" />
                  {{$t('forms.changePassword.passwordsMatch')}}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <Transition name="scale-y" mode="out-in">
          <div
            v-if="errorMessage"
            class="col-span-full p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
            <ion-icon name="ion:alert-circle" size="20" class="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div class="text-sm text-red-800 dark:text-red-200" v-html="errorMessage"></div>
          </div>
        </Transition>
      </div>

      <!-- Submit Button -->
      <div class="p-6 pt-4 flex bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-700">
        <Button :loading="loading" type="submit" class="ml-auto" :class="button.color">
          {{ button.text }}
        </Button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="postcss">

</style>
