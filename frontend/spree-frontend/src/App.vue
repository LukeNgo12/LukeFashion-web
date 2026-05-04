<script lang="ts">
import {defineComponent, Transition, useSlots} from "vue";
import Cart from "@/components/e-commerce/shopElements/Cart.vue";
import AppHeader from "@/components/e-commerce/generalElements/AppHeader.vue";
import MobileMenu from "@/components/e-commerce/generalElements/MobileMenu.vue";
import {useCart} from "@/composables/useCart.ts";
import {useHelpers} from "@/composables/useHelpers.ts";
import {RouterView} from "vue-router";
import AppFooter from "@/components/e-commerce/generalElements/AppFooter.vue";
import router from "@/router";
import axios from "axios";

export default defineComponent({
  setup() {
    const {isShowingCart, toggleCart} = useCart();
    const {isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass} = useHelpers();
    return {

      isShowingCart,
      toggleCart,
      isShowingMobileMenu,
      toggleMobileMenu, addBodyClass, removeBodyClass
    }
  },
  components: {
    Cart,
    Transition,
    AppHeader,
    MobileMenu,
    RouterView,
    AppFooter
  },

  data() {
    return {
      linkStartsWithWpAdmin: this.link?.startsWith('/wp-admin') || false,
      formattedLink: this.link,

    }

  },
  methods: {
    closeCartAndMenu() {
      this.toggleCart(false);
      this.toggleMobileMenu(false);

    },
    handleBodyScroll() {
      if (this.isShowingCart || this.isShowingMobileMenu) {
        this.addBodyClass('overflow-hidden');
      } else {
        this.removeBodyClass('overflow-hidden');
      }
    },
  },
  props: {
    link: String,

  },
  watch: {
    // Watch the first property
    isShowingCart: 'handleBodyScroll',

    // Watch the second property
    isShowingMobileMenu: 'handleBodyScroll',
  },
  mounted(){
    const getOrders = async()=> {
      // const data = await axios.get("http://localhost:3000/admin/orders");



    }
    getOrders();
  }
})

</script>

<template>
  <!--  <NuxtLoadingIndicator />-->

  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <Transition name="slide-from-right">
      <Cart v-if="isShowingCart"/>
    </Transition>

    <Transition name="slide-from-left">
      <MobileMenu v-if="isShowingMobileMenu"
      />
    </Transition>

    <!--    <NuxtPage />-->

    <Transition name="fade">
      <div v-if="isShowingCart || isShowingMobileMenu"
           class="bg-black opacity-25 inset-0 z-40 fixed" @click="closeCartAndMenu"/>
    </Transition>

    <router-view/>
    <Transition>
      <AppFooter />

    </Transition>
  </div>
</template>

<style lang="postcss">
@import "tailwindcss";

@reference "#tailwind";

html,
body {
  background-color: #f3f4f6; /* bg-gray-100 */
  color: #111827; /* text-gray-900 */
  scroll-behavior: smooth;

  /* Dark Mode */
  @media (prefers-color-scheme: dark) {
    background-color: #18202f; /* custom hex */
    color: #f3f4f6; /* text-gray-100 */
  }
}

html {
  scrollbar-gutter: stable both-edges;
}

img {
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;
}

/* Code Blocks */
pre {
  border-radius: 0.125rem; /* rounded-sm */
  background-color: #1f2937; /* bg-gray-800 */
  margin-top: 2rem; /* my-8 */
  margin-bottom: 2rem;
  font-size: 0.75rem; /* text-xs */
  color: #ffffff; /* text-white */
  padding: 1rem; /* p-4 */
  white-space: pre-wrap;
  overflow: auto;
}

/* Slide Animations */
.slide-from-right,
.slide-from-left {
  &-leave-active,
  &-enter-active {
    transition: transform 300ms ease-in-out;
  }
}

.slide-from-right {
  &-enter-from,
  &-leave-to {
    transform: translateX(500px);
  }
}

.slide-from-left {
  &-enter-from,
  &-leave-to {
    transform: translateX(-500px);
  }
}

/* Fade Transitions */
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

/* Scale Y Transitions */
.scale-y {
  &-enter-active,
  &-leave-active {
    transition: all 500ms linear;
    will-change: max-height, opacity;
    max-height: 9999px;
    overflow: hidden;
    opacity: 1;
  }

  &-enter-from,
  &-leave-to {
    max-height: 0;
    opacity: 0;
  }
}

/* Scrollbar Customization */
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 0.375rem; /* w-1.5 */

    &-track {
      border-radius: 0.125rem; /* rounded-sm */
      background-color: #f3f4f6; /* bg-gray-100 */
    }

    &-thumb {
      border-radius: 0.125rem; /* rounded-sm */
      background-color: #9ca3af; /* bg-gray-400 */
    }
  }
}

/* Keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  0% { opacity: 0.001; }
  100% { opacity: 1; }
}

@keyframes fadeDisabledIn {
  0% { opacity: 0.001; }
  100% { opacity: 0.7; }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0.001; }
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 20ms;
  animation-duration: 200ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-active {
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}

.page-leave-active {
  animation-name: fadeOut;
}

/* Skeleton Loading Animation */
@keyframes skelaton {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

img.skeleton {
  animation: skelaton 2000ms infinite cubic-bezier(0.4, 0, 0.2, 1);
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
}

/* Custom Checkboxes and Radios */
input[type='checkbox'],
input[type='radio'] {
  /* @apply replacement */
  background-color: #ffffff;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 0.5rem; /* 8px */
  cursor: pointer;
  font-family: inherit;
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: 1em; /* Overridden manually below */
  height: 1em;
  padding: 0;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  appearance: none;
  position: relative;

  &:hover {
    border-color: var(--color-primary, #3b82f6);
  }

  /* Dark Mode */
  @media (prefers-color-scheme: dark) {
    background-color: #374151; /* gray-700 */
    border-color: #4b5563; /* gray-600 */
  }

  /* Pseudo-elements for Icons */
  &:after {
    content: '';
    display: block;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.65, -0.43, 0.4, 1.71);
  }

  &:checked {
    background-color: var(--color-primary, #3b82f6);
    border-color: transparent;
    border-width: 0;

    &:after {
      opacity: 1;
    }
  }

  /* Label Styling Hook */
  & + label {
    cursor: pointer;
    color: #4b5563; /* gray-600 */
    transition: color 150ms;

    &:hover {
      color: var(--color-primary, #3b82f6);
    }

    @media (prefers-color-scheme: dark) {
      color: #9ca3af; /* gray-400 */
    }
  }

  &:checked + label {
    color: #1f2937; /* gray-800 */

    @media (prefers-color-scheme: dark) {
      color: #ffffff;
    }

    &:hover {
      color: var(--color-primary-dark, #2563eb);
    }
  }
}

/* Specific Shapes & Icon Offsets */
input[type='radio'] {
  border-radius: 50%;

  &:after {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: scale(0);
    position: absolute;
    background: #fff;
    top: 4px;
    left: 4px;
  }

  &:checked:after {
    transform: scale(1);
  }
}

input[type='checkbox'] {
  border-radius: 4px;

  &:after {
    width: 5px;
    height: 9px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(0deg) translate(-1px, 1px) scale(0.75);
    position: absolute;
    top: 3px;
    left: 6.5px;
  }

  &:checked:after {
    transform: rotate(45deg) translate(-1px, 1px) scale(1);
  }
}

/* Global Dark Scheme Utility */
.dark input {
  color-scheme: dark;
}

</style>
