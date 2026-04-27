<script lang="ts">
import {defineComponent} from 'vue'
import LoginProviders from "@/components/e-commerce/forms/LoginProviders.vue";
import PasswordInput from "@/components/e-commerce/forms/PasswordInput.vue";
import Button from "@/components/e-commerce/ui/Button.vue";

interface LoginAndRegisterData {
  formView: string,
  FormView: {
    REGISTER: string,
    FORGOT_PASSWORD: string,
    LOGIN: string
  },
  userInfo:{
    username: string,
    password: string,
    email: string
  },
  inputPlaceholder: {
    email: string,
    username: string
  },
  message: string,
  isPending: true,
  errorMessage: string
}


export default defineComponent({
  name: "LoginAndRegister",
  components: {
    LoginProviders,
    PasswordInput,
    Button
  },
  data(){
    return {
      formView: "",
      FormView: {
        REGISTER: "",
        FORGOT_PASSWORD: "",
        LOGIN: ""
      },
      userInfo:{
        username: "",
        password: "",
        email: ""
      },
      inputPlaceholder: {
        email: "",
        username: ""
      },
      message: "",
      isPending: true,
      errorMessage: ""
    } as LoginAndRegisterData
  },
  methods : {
    navigate(view: any){

    },
    formTitle(){

    },
    buttonText(){

    },
    emailLabel(){

    },
    usernameLabel(){

    },
    passwordLabel(){

    },
    inputPlaceholder(){

    },
    handleFormSubmit(info: any){

    }
  }
})
</script>

<template>
  <div class="flex flex-col justify-center max-w-lg mx-auto my-16 text-center min-h-150 align-center">
    <div class="flex flex-col my-8">
      <h1 class="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-white">{{ formTitle }}</h1>
      <p v-if="formView === FormView.LOGIN" class="mt-2 text-gray-500 dark:text-gray-400">
        {{$t('forms.loginAndRegister.formTitle')}}
        <a class="font-semibold cursor-pointer text-primary hover:underline" @click="navigate(FormView.REGISTER)"> {{ $t('account.accountRegister') }} </a>.
      </p>
      <p v-else-if="formView === FormView.REGISTER" class="mt-2 text-gray-500 dark:text-gray-400">
        {{$t('forms.loginAndRegister.accountHasAccount')}}Account Has Account
        <a @click="navigate(FormView.LOGIN)" class="cursor-pointer text-primary text-semibold hover:underline">Sign in</a>.
      </p>
    </div>

    <LoginProviders class="mb-8" v-if="formView === FormView.LOGIN || formView === FormView.REGISTER" />

    <form @submit.prevent="handleFormSubmit(userInfo)">
      <p v-if="formView === FormView.FORGOT_PASSWORD" class="mb-8 text-sm text-gray-500 dark:text-gray-400">{{ $t('account.enterEmailOrUsernameForReset') }}</p>
      <input
        v-if="formView === FormView.REGISTER || formView === FormView.FORGOT_PASSWORD"
        id="email"
        v-model="userInfo.email"
        :placeholder="inputPlaceholder.email"
        autocomplete="email"
        type="text"
        required=true />
      <div v-if="formView !== FormView.FORGOT_PASSWORD">
        <input v-model="userInfo.username" :placeholder="inputPlaceholder.username" autocomplete="username" type="text" required />
        <PasswordInput
          v-model="userInfo.password"
          :placeholder="passwordLabel"
          :autocomplete="formView === FormView.LOGIN ? 'current-password' : 'new-password'"
          :required="true" />
      </div>
      <Transition name="scale-y" mode="out-in">
        <div v-if="message" class="my-4 text-sm text-green-500" v-html="message"></div>
      </Transition>

      <!-- Login button -->
      <Button :loading="isPending" type="submit" class="my-6 text-lg">
        {{ buttonText }}
      </Button>

      <div class="flex items-center justify-between mt-4" v-if="formView === FormView.LOGIN">
        <div class="text-sm font-semibold cursor-pointer text-primary hover:underline" @click="navigate(FormView.FORGOT_PASSWORD)">Forgot password?</div>
      </div>
    </form>

    <div class="my-8 text-center cursor-pointer text-primary hover:underline" @click="navigate(FormView.LOGIN)" v-if="formView === FormView.FORGOT_PASSWORD">
      {{$t('forms.loginAndRegister.backToLogin')}}
    </div>

    <Transition name="scale-y" mode="out-in">
      <div v-if="errorMessage" class="my-4 text-sm text-red-500" v-html="errorMessage"></div>
    </Transition>
  </div>
</template>

<style scoped lang="postcss" >
@reference "#tailwind";

input[type='text'] {
  @apply border rounded-lg mb-4 w-full p-3 px-4 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white;
}

form button {
  @apply rounded-lg font-bold bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 py-3 px-8 hover:bg-gray-900 dark:hover:bg-gray-100 mb-4 w-full;
}
</style>
