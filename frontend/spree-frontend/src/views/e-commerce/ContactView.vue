<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ContactView",
  data(){
    return {
      form:
        {
          name: "",
          email: "",
          orderNumber: "",
          message: ""
        }

    }
  },
  methods:{
    handleSubmit(){

    }
  }
})
</script>

<template>
  <div class="container my-8">
    <div class="my-8 prose">
      <div class="max-w-7xl mx-auto px-4 py-12 font-sans text-slate-800">
        <header class="text-center mb-16">
          <h1 class="text-4xl font-bold tracking-tight mb-4">{{$t('views.contactView.contactUs')}}</h1>
          <p class="text-lg text-slate-600">
            {{$t('views.contactView.haveAQuestion')}}
          </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div class="space-y-10">
            <section>
              <h2 class="text-xl font-semibold mb-4">{{$t('views.contactView.getInTouch')}}</h2>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <span class="p-3 bg-slate-100 rounded-full">✉️</span>
                  <a href="mailto:customer-service@yourbrand.com" class="text-blue-600 hover:underline font-medium">
                    ngothehieu12@gmail.com
                  </a>
                </div>
                <div class="flex items-center gap-4">
                  <span class="p-3 bg-slate-100 rounded-full">📞</span>
                  <div>
                    <p class="font-medium">+84 0338934743</p>
                    <p class="text-sm text-slate-500">{{$t('views.contactView.monToFri')}}</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 class="font-bold mb-2">{{$t('views.contactView.checkOurFAQs')}}</h3>
              <p class="text-sm text-slate-600 mb-4">{{$t('views.contactView.yourAnswer')}}</p>
              <div class="flex gap-4">
                <router-link to="/faq" class="text-sm font-semibold underline">{{$t('views.contactView.shippingPolicy')}}</router-link>
                <router-link to="/returns" class="text-sm font-semibold underline">{{$t('views.contactView.returnsAndExchange')}}</router-link>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-semibold mb-4">{{$t('views.contactView.visitOurBoutique')}}</h2>
              <p class="text-slate-600 mb-4">{{$t('views.contactView.76LeBinh')}}</p>
              <p class="text-slate-600 mb-4">Portfolio:</p>
              <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 shadow-inner">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2432161900742!2d106.6577588!3d10.792675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752934bcdb39d9%3A0xde5af116c85ae74e!2zMTI3NyBIaeG7h3AgTmjhuqV0LCBQaMaw4budbmcgNCwgVMOibiBTxqFuIE5o4bqldCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1777544146331!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </section>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 class="text-2xl font-bold mb-6">{{$t('views.contactView.sendAMessage')}}</h2>
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-sm font-medium mb-1">{{$t('views.contactView.fullName')}}</label>
                <input v-model="form.name" type="text" required placeholder="Jane Doe"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">{{$t('views.contactView.emailAddress')}}</label>
                <input v-model="form.email" type="email" required placeholder="jane@example.com"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">{{$t('views.contactView.orderNumber')}}</label>
                <input v-model="form.orderNumber" type="text" placeholder="#12345"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">{{$t('views.contactView.message')}}</label>
                <textarea v-model="form.message" rows="5" required placeholder="How can we help?"
                          class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"></textarea>
              </div>

              <button type="submit"
                      class="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition duration-200">
                {{$t('views.contactView.sendMessage')}}
              </button>

              <p class="text-xs text-center text-slate-400 mt-4">
                {{$t('views.contactView.weTypicallyRespond')}}
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
