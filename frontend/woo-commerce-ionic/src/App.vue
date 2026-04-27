<template>
  <ion-app>
    <ion-router-outlet />
<!--    <explore-container />-->
  </ion-app>
</template>

<script  lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import ExploreContainer from "@/components/ExploreContainer.vue";
export default {
  components: {ExploreContainer, IonRouterOutlet, IonApp},
  data(){
    return {

    }
  }
}
</script>
