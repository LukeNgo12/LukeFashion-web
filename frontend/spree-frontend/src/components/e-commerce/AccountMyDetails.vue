<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AccountMyDetails"
})
</script>

<template>
  <div class="grid gap-8">
    <PersonalInformation />
    <BillingAndShipping />
    <ChangePassword />
  </div>
</template>

<style scoped lang="postcss">

</style>
