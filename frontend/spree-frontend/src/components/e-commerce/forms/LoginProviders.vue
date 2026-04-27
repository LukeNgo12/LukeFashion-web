<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
interface LoginProvidersData {
  socialLoginProviders: [];
  socialLoginsDisplay: string;
  loginClient: {
    name: string,
    authorizationUrl: string,
    provider: string,
  },
  providerIcons: {
      abc: string,
  }
}


export default defineComponent({
  name: "LoginProviders",
  components: {IonIcon},
  data(){
    return {
      socialLoginProviders: [],
      socialLoginsDisplay: "buttons",
      loginClient: {
        name: "",
        authorizationUrl: "",
        provider: ""
      },
      providerIcons: {
        abc: "abc"
      }
    }as LoginProvidersData
  } ,
  methods:{
    labelFallback(provider: any){

    }
  }

})
</script>

<template>
  <div v-if="socialLoginProviders?.length">
    <div
      class="gap-4"
      :class="
        socialLoginsDisplay === 'buttons' ? 'grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-center' : ' flex gap-4 flex-wrap justify-center'
      ">
      <div v-for="(loginClient, index) in socialLoginProviders" :key="index">
        <RouterLink
          v-if="loginClient && loginClient?.authorizationUrl"
          :to="loginClient?.authorizationUrl"
          class="flex items-center justify-center gap-3 p-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg shadow-xs hover:shadow transition duration-100 ease-in-out">
          <ion-icon v-if="loginClient.provider" :name="providerIcons[loginClient.provider as keyof typeof providerIcons]" size="20" />
          <ion-icon v-else name="ion:log-in" size="20" />
          <span v-if="socialLoginsDisplay === 'buttons'">{{ loginClient.name || labelFallback(loginClient.provider) }}</span>
        </RouterLink>
      </div>
    </div>

    <!-- or continue with email -->
    <div class="flex items-center justify-center gap-4 mt-8 leading-none">
      <div class="border-b border-gray-300 dark:border-gray-600 w-1/3 flex-1"></div>
      <div class="text-gray-400 dark:text-gray-500">{{$t("forms.loginProviders.orContinueWithEmail")}}</div>
      <div class="border-b border-gray-300 dark:border-gray-600 w-1/3 flex-1"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
