<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";
import Button from "@/components/e-commerce/ui/Button.vue";

export default defineComponent({
  components: {
    IonIcon,
    Button
  },
  data(){
    return {
      isPending: true,
      avatar: "",
      linkTitle: "",
      route: {
        fullPath: ""
      },
      wishlistLink: ""
    }
  },
  methods : {
    logoutUser(){

    },
    navigateToLogin(path: any){

    }
  }

})
</script>

<template>
  <RouterLink to="/my-account" :title="linkTitle" @click="navigateToLogin(route.fullPath)" class="hidden sm:inline-flex aspect-square items-center">
<!--    <Transition name="pop-in" mode="out-in">-->
      <span  class="relative avatar">
        <img
          src="/Luke-fashion-logo.png"
          class="rounded-full transform scale-125 shadow-md overflow-hidden border border-white my-auto"
          width="22"
          height="22"
          :alt="linkTitle" />
        <div class="flex account-dropdown font-semibold">
          <button to="/my-account" size="sm" variant="ghost" class="w-full justify-start" icon="ion:person"> {{$t('components.signInLink.myAccount')}}</button>
          <button :to="wishlistLink" size="sm" variant="ghost" class="w-full justify-start" icon="ion:heart"> {{$t('components.signInLink.wishList')}} </button>
          <button
            type="button"
            size="sm"
            variant="ghost"
            class="w-full justify-start text-red-600 hover:bg-red-50"
            icon="ion:log-out"
            @click="logoutUser"
            :loading="isPending">
            Logout
          </button>
        </div>
      </span>
      <ion-icon  name="ion:person-outline" size="22" class="border border-transparent" />
<!--    </Transition>-->
  </RouterLink>
</template>

<style scoped lang="postcss">
@reference "#tailwind";

.wp-admin-link {
  @apply inline-flex items-center bg-yellow-400 leading-tight py-1 px-2 rounded-sm gap-1 text-xs text-yellow-900 border-b border-yellow-500 uppercase transition-all duration-100 ease-in-out;

  &:hover {
    @apply bg-yellow-500 border-yellow-600 border-b;
  }
}
</style>
