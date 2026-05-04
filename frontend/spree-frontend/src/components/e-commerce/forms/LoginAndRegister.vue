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
      errorMessage: "",
      buttonText: "Log In"
    }
  },
  methods : {
    navigate(view: any){

    },
    formTitle(){

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
      <p  class="mt-2 text-gray-500 dark:text-gray-400">
        {{$t('forms.loginAndRegister.formTitle')}}
        <a class="font-semibold cursor-pointer text-primary hover:underline" @click="navigate(FormView.REGISTER)"> {{ $t('components.loginAndRegister.accountRegister') }} </a>.
      </p>
      <p  class="mt-2 text-gray-500 dark:text-gray-400">
        {{$t('forms.loginAndRegister.accountHasAccount')}}Account Has Account
        <a @click="navigate(FormView.LOGIN)" class="cursor-pointer text-primary text-semibold hover:underline">{{$t('components.loginAndRegister.signIn')}}Sign in</a>.
      </p>
    </div>

    <LoginProviders class="mb-8" />

    <form @submit.prevent="handleFormSubmit(userInfo)">
      <p  class="mb-8 text-sm text-gray-500 dark:text-gray-400">{{ $t('components.loginAndReigster.enterEmailOrUsernameForReset') }}</p>
      <input

        id="email"
        v-model="userInfo.email"
        :placeholder="inputPlaceholder.email"
        autocomplete="email"
        type="text"
        required=true />
      <div >
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
      <button :loading="isPending" type="submit" class="my-6 text-lg">
        {{ buttonText }}
      </button>

      <div class="flex items-center justify-between mt-4" v-if="formView === FormView.LOGIN">
        <div class="text-sm font-semibold cursor-pointer text-primary hover:underline" @click="navigate(FormView.FORGOT_PASSWORD)">{{$t('components.loginAndRegister.forgotPassword')}}Forgot password?</div>
      </div>
    </form>

    <div class="my-8 text-center cursor-pointer text-primary hover:underline" @click="navigate(FormView.LOGIN)" v-if="formView === FormView.FORGOT_PASSWORD">
      {{$t('components.loginAndRegister.backToLogin')}}
    </div>

    <Transition name="scale-y" mode="out-in">
      <div v-if="errorMessage" class="my-4 text-sm text-red-500" v-html="errorMessage"></div>
    </Transition>
  </div>
</template>

<style scoped lang="postcss" >
@reference "#tailwind";

input[type='text'] {
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem; /* 8px */
  margin-bottom: 1rem;   /* 16px */
  width: 100%;
  padding: 0.75rem 1rem; /* 12px vertical, 16px horizontal */
  background-color: #ffffff;
  border-color: #d1d5db; /* gray-300 */
  color: #111827;        /* gray-900 */
}

form button {
  /* Layout & Sizing */
  width: 100%;
  margin-bottom: 1rem; /* 16px */
  padding: 0.75rem 2rem; /* 12px top/bottom, 32px left/right */

  /* Typography */
  font-weight: 700;
  color: #ffffff;

  /* Visuals */
  background-color: #1f2937; /* gray-800 */
  border-radius: 0.5rem; /* 8px */
  transition: background-color 0.2s; /* standard tailwind hover transition */
}

form button:hover {
  background-color: #111827; /* gray-900 */
}

@media (prefers-color-scheme: dark) {
  .form button {
    background-color: #e5e7eb; /* gray-200 */
    color: #1f2937; /* gray-800 */
  }

  .form button:hover {
    background-color: #f3f4f6; /* gray-100 */
  }
}
</style>
