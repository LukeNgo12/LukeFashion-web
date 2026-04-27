<script lang="ts">
import {defineComponent} from 'vue'
import {useI18n} from "vue-i18n";

interface LangSwitcherData {
  locales: {
    code: string;
    name: string
  }[],
  locale: ""
}

export default defineComponent({
  name: "LangSwitcher",
  setup(){
    const { availableLocales, locale, getLocaleMessage, setLocaleMessage, } = useI18n();
    return { locale,getLocaleMessage, availableLocales, setLocaleMessage }
  },
  data(){
    return {
   } as LangSwitcherData
  },
  mounted() {
    console.log(this.availableLocales,this.locale)
  },
  watch: {
    locale(newLocale){
      if(newLocale){
        // this.setLocaleMessage(newLocale);
      }
    }
  },
  methods: {
    async switchLanguage(newLocale : any){
      this.locale = newLocale

    }
  }
})
</script>

<template>
  <select  v-model="$i18n.locale" id="language-switcher" :value="locale" aria-label="Language switcher" class="select text-sm font-medium dark:text-gray-300" @change="switchLanguage($event.target.value)">
    <option v-for="locale in availableLocales" :key="locale" :value="locale" v-html="locale" />
  </select>
</template>

<style scoped lang="postcss">

</style>
