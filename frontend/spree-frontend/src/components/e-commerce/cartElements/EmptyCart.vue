<script>
export default {
  name: "EmptyCart",
  methods: {
    emptyCart(){

    }
  }
}
</script>

<template>
  <button class="cursor-pointer top-6 right-6 md:right-8 absolute flex item-center" title="Empty Cart" @click="emptyCart">
    <TrashIcon />
  </button>
</template>

<style scoped lang="postcss">

</style>
