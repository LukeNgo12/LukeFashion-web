<script lang="ts">
import {defineComponent} from "vue";

interface SwipeCardData {
  isAlive: boolean;
  isSwiping: boolean;
  disabled: boolean;
  displayLengthX: number;
}
export default defineComponent({
  name: "SwipeCard",
  data(){
    return {
      isAlive:true,
      isSwiping: true,
      disabled: true,
      displayLengthX: 50
    } as SwipeCardData
  }
})
</script>

<template>
  <div v-if="isAlive" class="rounded-lg flex h-16 w-full overflow-hidden relative items-center">
    <TrashIcon class="transform transition-all right-0 w-6 scale-0 absolute" :class="{ 'scale-100': displayLengthX > 40, 'delete-ready': displayLengthX > 80 }" />
    <div
      class="rounded-lg inset-0 absolute"
      :class="{ 'transition-all': !isSwiping || disabled }"
      ref="el"
      :style="{ transform: isSwiping && !disabled ? `translateX(-${displayLengthX}px)` : `none` }">
      <slot />
    </div>
  </div>

</template>

<style scoped lang="postcss">
@reference "#tailwind";

.underlay {
  @apply flex p-4 inset-0 transition-all justify-end absolute items-center;
}
.delete-ready {
  @apply text-red-500;
}
</style>
