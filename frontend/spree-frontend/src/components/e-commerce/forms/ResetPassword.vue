<script lang="ts">
import {defineComponent} from 'vue'
import Logo from "@/components/e-commerce/generalElements/Logo.vue";
import PasswordInput from "@/components/e-commerce/forms/PasswordInput.vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface ResetPasswordData {
  password: string;
  confirmPassword: string;
  errorMessage: string;
  isInvalidLink: boolean;
  isPending: boolean;
}


export default defineComponent({
  name: "ResetPassword",
  components:{
    Logo,
    PasswordInput,
    Button
  },
  data(){
    return {
      password: "",
      confirmPassword: "",
      errorMessage: "",
      isInvalidLink: false,
      isPending: true
    } as ResetPasswordData
  },
  methods: {
    handlePasswordReset(){

    }
  }
})
</script>

<template>
  <div class="max-w-lg mx-auto my-16 min-h-150 lg:my-24">
    <div class="flex flex-col items-center">
      <Logo class="mb-6 scale-125" />
      <h1 class="text-xl font-semibold lg:text-3xl">{{$t('forms.resetPassword.accountResetPassword')}}</h1>
    </div>

    <form class="mt-6 flex flex-col" @submit.prevent="handlePasswordReset">
      <label for="password" class="mb-4">
        {{$t('forms.resetPassword.newPassword')}} <span class="text-red-500">*</span><br />
        <PasswordInput id="password" className=" border rounded-lg w-full p-3 px-4 bg-white" v-model="password" placeholder="New Password" :required="true" />
      </label>

      <label for="confirmPassword" class="mb-4">
        {{$t('forms.resetPassword.confirmNewPassword')}}<span class="text-red-500">*</span><br />
        <PasswordInput
          id="confirmPassword"
          className="border rounded-lg w-full p-3 px-4 bg-white"
          v-model="confirmPassword"
          placeholder="Confirm Password"
          :required="true" />
      </label>

      <Transition name="scale-y" mode="out-in">
        <div v-if="errorMessage" class="text-sm mb-4">
          <span class="text-red-500" v-html="errorMessage"></span>
          <RouterLink v-if="isInvalidLink" class="underline cursor-pointer pl-1" to="/my-account?action=forgotPassword">
              {{$t('forms.resetPassword.requestNewLink')}}
            </RouterLink>
        </div>
      </Transition>

      <Button :loading="isPending" type="submit" class="mt-4">
        {{$t('forms.resetPassword.backToLogin')}}
      </Button>
    </form>

    <div class="my-8 text-center cursor-pointer">
      <RouterLink to="/my-account">{{$t('forms.resetPassword.backToLogin')}}</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss" >
@reference "#tailwind";

input {
  @apply border rounded-lg mb-4 w-full p-3 px-4 bg-white border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white;
}

form button {
  @apply rounded-lg font-bold bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 py-3 px-8 hover:bg-gray-900 dark:hover:bg-gray-100 mb-4 w-full;
}
</style>
