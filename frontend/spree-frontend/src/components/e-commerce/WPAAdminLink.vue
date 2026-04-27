<script lang="ts" >
import {defineComponent} from "vue";
import ClientOnly from "vue-client-only"
import {IonIcon} from "@ionic/vue";

interface WPAAdminLinkData {

  linkStartsWithWpAdmin: boolean;
  formattedLink: string;
  wpBase: string;
}
export default defineComponent({
  components: {
    ClientOnly,
    IonIcon
  },
  data(){
    return {
      linkStartsWithWpAdmin: this.link?.startsWith('/wp-admin') || false,
      formattedLink: this.link,
      wpBase: ""
    } as WPAAdminLinkData

  },
  props: {
    link: String
  }
})
</script>

<template>
  <a
  v-if="linkStartsWithWpAdmin && wpBase && link"
  :href="formattedLink"
  target="_blank"
  class="wp-admin-link"
  title="This is a dev-only link, it will not be visible in production."
  >
  <span class="link">

  </span>
    <ion-icon name="ion:open-outline" size="14" />
  </a>
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
