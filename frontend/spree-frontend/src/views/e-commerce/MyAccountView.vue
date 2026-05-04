<script lang="ts">
import {defineComponent} from 'vue'
import {IonIcon} from "@ionic/vue";
import LoadingIcon from "@/components/e-commerce/ui/LoadingIcon.vue";
import LoginAndRegister from "@/components/e-commerce/forms/LoginAndRegister.vue";
import PersonalInformation from "@/components/e-commerce/forms/PersonalInformation.vue";
import BillingAndShipping from "@/components/e-commerce/forms/BillingAndShipping.vue";
import ChangePassword from "@/components/e-commerce/forms/ChangePassword.vue";
import AccountActivity from "@/components/e-commerce/AccountActivity.vue";
import {
  bagCheckOutline,
  cardOutline,
  cloudDownloadOutline, heartOutline,
  lockClosedOutline, logOut,
  personOutline, settingsOutline
} from "ionicons/icons";
import OrderList from "@/components/e-commerce/OrderList.vue";
import DownloadList from "@/components/e-commerce/DownloadList.vue";
import WishList from "@/components/e-commerce/shopElements/WishList.vue";
import AccountSettings from "@/components/e-commerce/AccountSettings.vue";
import Button from "@/components/e-commerce/ui/Button.vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "MyAccountView",
  setup(){
    const router = useRoute()
    return {router}
  },
  components: {
    IonIcon,
    LoadingIcon,
    LoginAndRegister,
    PersonalInformation,
    BillingAndShipping,
    ChangePassword,
    AccountActivity,
    OrderList,
    DownloadList,
    WishList,
    AccountSettings,

  },
  props: {
    showLoader: {type: Boolean, default: true},
    isRedirecting: {type: Boolean, default: false},
  },
  data() {
    return {
      avatar: "/Luke-fashion-logo.png",
      viewer: {
        firstName: "",
        email: "",
        lastName: ""
      },
      logOut,
      cloudDownloadOutline,
      personOutline,
      bagCheckOutline,
      cardOutline,
      lockClosedOutline,
      heartOutline,
      settingsOutline,
      isPending: false,
      activeTab: "settings"
    }
  },
  methods: {
    logoutUser() {

    }
  },
})
</script>

<template>
  <div class="container py-8 min-h-150">
    <div class="flex flex-col min-h-125">
      <LoadingIcon class="m-auto"/>
    </div>
    <div>
      <LoginAndRegister/>
      <div class="flex flex-col items-start justify-between w-full gap-8 mb-24 lg:flex-row">
        <!-- Enhanced Sidebar -->
        <aside class="w-full lg:w-72 lg:sticky lg:top-20 shrink-0">
          <!-- User Profile Card -->
          <div class="p-5 mb-6 bg-white border border-gray-100 rounded-lg shadow-xs">
            <div class="flex items-center gap-6">
              <img :src="avatar" class="rounded-full aspect-square ring-4 ring-primary/10"
                   alt="user-image" width="64" height="64"/>
              <div
                class="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white rounded-full bg-linear-to-br from-primary to-primary-dark">
                {{ viewer?.firstName?.charAt(0) }}{{ viewer?.lastName?.charAt(0) }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-lg font-semibold text-gray-900 truncate">{{ viewer?.firstName }}
                  {{ viewer?.lastName }}
                </div>
                <span class="block text-sm text-gray-500 truncate"
                      :title="viewer?.email">{{ viewer?.email }}</span>
              </div>
            </div>
          </div>

          <!-- Navigation Card -->
          <nav class="p-3 mb-6 bg-white border border-gray-100 rounded-lg shadow-xs">
            <router-link to="/my-account?tab=personal-info" class="nav-link"
                         :class="{ active: activeTab == 'personal-info' }">
              <ion-icon :icon="personOutline" size="20"/>
              <span>{{ $t("views.myAccountView.personalInformation") }}</span>
            </router-link>
            <router-link to="/my-account?tab=addresses" class="nav-link"
                         :class="{ active: activeTab == 'addresses' }">
              <ion-icon :icon="cardOutline" size="20"/>
              <span>{{ $t("views.myAccountView.billingAndShipping") }}</span>
            </router-link>
            <router-link to="/my-account?tab=password" class="nav-link"
                         :class="{ active: activeTab == 'password' }">
              <ion-icon :icon="lockClosedOutline" size="20"/>
              <span>{{ $t("views.myAccountView.Password") }}</span>
            </router-link>
            <!--  TODO: Enable when backend support is added for activity logs -->
            <!-- <NuxtLink to="/my-account?tab=activity" class="nav-link" :class="{ active: activeTab == 'activity' }">
              <Icon name="ion:time-outline" size="20" />
              <span>Account Activity</span>
            </NuxtLink> -->
            <div class="h-px my-2 bg-gray-200"></div>
            <router-link to="/my-account?tab=orders" class="nav-link"
                         :class="{ active: activeTab == 'orders' }">
              <ion-icon :icon="bagCheckOutline" size="20"/>
              <span>{{ $t('views.myAccountView.order', 2) }}</span>
            </router-link>
            <router-link to="/my-account?tab=downloads" class="nav-link"
                         :class="{ active: activeTab == 'downloads' }">
              <ion-icon :icon="cloudDownloadOutline" size="20"/>
              <span>{{ $t('views.myAccountView.downloads') }}</span>
            </router-link>
            <router-link to="/my-account?tab=wishlist" class="nav-link"
                         :class="{ active: activeTab == 'wishlist' }">
              <ion-icon :icon="heartOutline" size="20"/>
              <span>Wishlist</span>
            </router-link>
            <div class="h-px my-2 bg-gray-200"></div>
            <router-link to="/my-account?tab=settings" class="nav-link"
                         :class="{ active: activeTab == 'settings' }">
              <ion-icon :icon="settingsOutline" size="20"/>
              <span>{{ $t('views.myAccountView.settings') }}</span>
            </router-link>
          </nav>

          <button class="w-full mt-2" :icon="logOut" :loading="isPending" @click="logoutUser">
            {{ $t('views.myAccountView.accountLogout') }}
          </button>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 w-full min-w-0">
          <PersonalInformation v-if="activeTab === 'personal-info'"/>
          <BillingAndShipping v-else-if="activeTab === 'addresses'"/>
          <ChangePassword v-else-if="activeTab === 'password'"/>
          <AccountActivity v-else-if="activeTab === 'activity'"/>
          <OrderList v-else-if="activeTab === 'orders'"/>
          <DownloadList v-else-if="activeTab === 'downloads'"/>
          <WishList v-else-if="activeTab === 'wishlist'"/>
          <AccountSettings v-else-if="activeTab === 'settings'"/>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Variables
$gray-50: #f9fafb;
$gray-700: #374151;
$gray-900: #111827;
$primary-blue: #3b82f6;
$transition-default: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

// Mixin for standard transitions
@mixin transition-standard($prop: all) {
  transition: $prop 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: $gray-700;
  margin-bottom: 0.25rem;
  @include transition-standard(all);

  &:hover {
    background-color: $gray-50;
    color: $gray-900;

    svg {
      transform: scale(1.1);
    }
  }

  &.active {
    background-image: linear-gradient(
      to right,
      var(--color-primary-10, rgba($primary-blue, 0.1)),
      var(--color-primary-5, rgba($primary-blue, 0.05))
    );
    color: var(--color-primary, $primary-blue);
    font-weight: 600;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    svg {
      color: var(--color-primary, $primary-blue);
    }
  }

  svg {
    @include transition-standard(transform);
  }
}

// Nested Media Query
aside {
  @media (max-width: 1024px) {
    position: relative !important;
    top: auto !important;
  }
}
</style>
