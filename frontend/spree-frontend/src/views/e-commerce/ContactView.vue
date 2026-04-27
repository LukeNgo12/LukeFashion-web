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
          <h1 class="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p class="text-lg text-slate-600">
            Have a question about your order or our latest collection? We’re here to help.
          </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div class="space-y-10">
            <section>
              <h2 class="text-xl font-semibold mb-4">Get In Touch</h2>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <span class="p-3 bg-slate-100 rounded-full">✉️</span>
                  <a href="mailto:customer-service@yourbrand.com" class="text-blue-600 hover:underline font-medium">
                    customer-service@yourbrand.com
                  </a>
                </div>
                <div class="flex items-center gap-4">
                  <span class="p-3 bg-slate-100 rounded-full">📞</span>
                  <div>
                    <p class="font-medium">+1 (555) 000-0000</p>
                    <p class="text-sm text-slate-500">Mon–Fri, 9 AM – 5 PM EST</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 class="font-bold mb-2">Check our FAQs first</h3>
              <p class="text-sm text-slate-600 mb-4">Your answer might be just a click away!</p>
              <div class="flex gap-4">
                <router-link to="/faq" class="text-sm font-semibold underline">Shipping Policy</router-link>
                <router-link to="/returns" class="text-sm font-semibold underline">Returns & Exchanges</router-link>
              </div>
            </section>

            <section>
              <h2 class="text-xl font-semibold mb-4">Visit Our Boutique</h2>
              <p class="text-slate-600 mb-4">123 Fashion Ave, New York, NY 10001</p>
              <div class="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
              </div>
            </section>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 class="text-2xl font-bold mb-6">Send a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-sm font-medium mb-1">Full Name</label>
                <input v-model="form.name" type="text" required placeholder="Jane Doe"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Email Address</label>
                <input v-model="form.email" type="email" required placeholder="jane@example.com"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Order Number (Optional)</label>
                <input v-model="form.orderNumber" type="text" placeholder="#12345"
                       class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none" />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Message</label>
                <textarea v-model="form.message" rows="5" required placeholder="How can we help?"
                          class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"></textarea>
              </div>

              <button type="submit"
                      class="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition duration-200">
                Send Message
              </button>

              <p class="text-xs text-center text-slate-400 mt-4">
                We typically respond within 24 hours.
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
