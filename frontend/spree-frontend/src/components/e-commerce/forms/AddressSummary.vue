<script lang="ts">
import {defineComponent} from "vue";
import {IonIcon} from "@ionic/vue";

interface Address {
  firstName: string,
  lastName: string,
  shouldShowValidationWarning: boolean,
  phone: string,
  email: string,
  missingFields: [],
  hasAddress: boolean,
  address1: string,
  address2: string,
  city: string,
  postcode: string,
  state: string,
  country: string,
}

export default defineComponent({
  name: "AddressSummary",
  components: {
    IonIcon
  },
  data(){
    return {
      address: {
        firstName: "",
        lastName: "",
        phone: "",
        email : "",
        address1: "",
        postcode: "",
        country: ""
      } as Address,
      shouldShowValidationWarning: true,
      missingFields: [],
      hasAddress: true
    }
  },
  methods: {

  }
})
</script>

<template>
  <div class="w-full p-4 bg-white border border-gray-200 rounded-md shadow-xs outline-hidden dark:bg-gray-800 dark:border-gray-700">
    <!-- Header with name and edit button -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div>
          <h3 v-if="address?.firstName || address?.lastName" class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ [address.firstName, address.lastName].filter(Boolean).join(' ') }}
          </h3>
          <h3 v-else class="text-lg font-medium text-gray-500 dark:text-gray-400">No address provided</h3>
          <div v-if="shouldShowValidationWarning" class="flex items-center gap-1 mt-1">
            <ion-icon name="ion:warning" class="w-3 h-3 text-orange-500" />
            <span class="text-xs font-medium text-orange-600">
              {{ missingFields.length > 1 ? 'Needs attention' : 'Missing information' }}
            </span>
          </div>
        </div>
      </div>

      <Button type="button" size="sm" variant="ghost" icon="ion:pencil" @click="$emit('edit')">
        {{ $t('forms.addressSummary.edit') }}
      </Button>
    </div>

    <!-- Address details -->
    <div v-if="address && hasAddress" class="space-y-2">
      <div
        v-if="address.address1 || address.address2 || address.city || address.state || address.postcode || address.country"
        class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <ion-icon name="ion:home" />
        <span class="text-sm">
          {{
            [address.address1, address.address2, [address.city, address.state, address.postcode].filter(Boolean).join(', '), address.country]
              .filter(Boolean)
              .join(' · ')
          }}
        </span>
      </div>

      <div v-if="address.phone" class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <ion-icon name="ion:call" />
        <span class="text-sm">{{ address.phone }}</span>
      </div>

      <div v-if="address.email" class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <ion-icon name="ion:mail" />
        <span class="text-sm">{{ address.email }}</span>
      </div>
    </div>

    <div v-else class="flex items-center gap-2 italic text-gray-500 dark:text-gray-400">
      <ion-icon name="ion:add-circle-outline" />
      <span class="text-sm">{{$t('forms.addressSummary.addressSummary')}}</span>
    </div>
  </div>

</template>

<style scoped lang="postcss">

</style>
