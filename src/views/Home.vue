<template>
<span>
  <div class="overflow-hidden w-full">
  <particlesJS class="w-full h-screen absolute opacity-40"/>
    <div class="bg-white lg:h-screen h-half w-full">
      <div class="container flex items-center justify-center h-full">
        <div>       
          <img class="mx-auto md:w-40 w-24 mb-8" src="../assets/logo-black.svg"/>
          <h2 class="text-gray-900 font-bold text-center md:text-5xl text-3xl mb-5"> Front-End Web Developer </h2>
          <h2 class="text-gray-900 font-light text-center text-2xl"> Websites | Digital Solutions </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="section bg-gray-800 md:py-40 py-24 w-full h-64 p-4">
    <div class="lg:w-7/12 md:w-10/12 mx-auto text-center">
      <h2 class="text-white text-3xl font-bold mb-8"> Hi I'm Regan. <br class="md:hidden block" /> Please to meet you. </h2>
      <p class="text-gray-300 md:text-base text-lg"> I started my journey with game development which led me into the web development industry. I've been doing this for more than 5 years now, from helping out local business' with websites to contract work for large companies. I'm a humble developer that's always looking to improve my skills. </p>
    </div>
  </div>
  <div class="container md:pb-32 pb-12 -mt-24 lg:px-0 lg:px-0 md:px-5 px-6">
      <div class="bg-white text-center text-gray-900 mx-auto grid grid-cols-12 mb-12 rounded-3xl shadow-xl">
        <div class="md:col-span-4 col-span-12 px-8 pb-12 pt-12">
          <img class="mx-auto w-16 mb-8" src="../assets/images/online-shop.png"/>
          <h3 class="text-gray-900 text-2xl font-bold mb-3"> E-Commerce Websites </h3>
          <p class="text-gray-700 "> With Wordpress' Woocommerce I can create the perfect e-commerce websites to fit clients needs. </p>
        </div>
        <div class="md:col-span-4 col-span-12 px-8 pb-12 pt-12 md:border-l">
          <img class="mx-auto w-16 mb-8" src="../assets/images/web-site.png"/>
          <h3 class="text-gray-900 text-2xl font-bold mb-3"> One Page Websites </h3>
          <p class="text-gray-700 "> If you need a simple web page to promote your product or brand I'm here to help. </p>
        </div>
        <div class="md:col-span-4 col-span-12 px-8 pb-12 pt-12 md:border-l">
          <img class="mx-auto w-16 mb-8" src="../assets/images/browser.png"/>
          <h3 class="text-gray-900 text-2xl font-bold mb-3"> Basic Website </h3>
          <p class="text-gray-700 "> Or if you need a classic website with a home, about us and contact page I'm your guy. </p>
        </div>                       
      </div>
  </div>    
  <div class="container grid grid-cols-12 gap-6 lg:px-0 md:px-5 px-6">
    <div class="col-span-12 mb-16">
      <span class="text-center">
        <h2 class="text-gray-900  text-3xl font-bold mb-5"> My Recent Work </h2>
        <p class="text-gray-700"> Here are a few design projects I've worked on recently. </p>
      </span>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-300 flex items-center">
      
      </div>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-500 flex items-center">
      
      </div>      
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-800 flex items-center">
      
      </div>      
    </div>   
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-800 flex items-center">
      
      </div>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-700 flex items-center">
      
      </div>      
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <div class="cursor-pointer h-72 w-full rounded-xl bg-gray-400 flex items-center">
      
      </div>      
    </div>     
    <div class="text-center col-span-12 mt-8 mb-12">
      <a class="font-semibold mx-auto inline-block px-10 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 transition-all hover:transition-all cursor-pointer" href="https://www.linkedin.com/in/regan-duthie-683903133/" target="_blank">
        Check out my LinkedIn
      </a>
    </div>       
  </div>
  <div class="bg-white w-full py-32 section">
    <div class="container grid grid-cols-12 lg:px-0 md:px-5 px-6">
      <div class="text-center col-span-12 mb-10">
        <h2 class="text-gray-900  text-3xl font-bold mb-3"> Contact Me</h2>
        <p class="text-gray-700"> If you have any questions fill out the form below </p>
      </div>      
      <div class="lg:w-5/12 col-span-12 mx-auto">
          <div class="form">
            <input v-model="name" :class="$v.name.$error ? 'error': ''" class="form__item" placeholder="Your name" type="text" />
            <input v-model="email" :class="$v.email.$error ? 'error': ''" class="form__item" placeholder="Your email" type="email" />
            <textarea v-model="message" :class="$v.message.$error ? 'error': ''" placeholder="Your message" class="form__item py-3 h-48" />
            <p v-if="$v.$error" class="text-center text-red-500 my-2"> Oops there's a error in the form! </p>
            <input @click.prevent="submit()" class="mt-5 font-semibold mx-auto block px-10 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 transition-all hover:transition-all cursor-pointer" value="Submit" type="button">
          </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 w-full py-16">
    <div class="container grid grid-cols-12 lg:px-0 md:px-5 px-6">
      <div class="col-span-12">
        <img class="mx-auto w-20 mb-8" src="../assets/logo-white.svg"/>
      </div>
    </div>
  </div>  
</span>
</template>
<style lang="scss" scoped>
.section {
    min-height: 600px;
  @media (min-width: theme('screens.lg')) {
    min-height: 510px;    
  }
}
.form {
  &__item {
    @apply border border-gray-600 text-gray-800 px-3 rounded mb-3;
    
    transition: 0.3s ease-in-out all;
    width: 100%;
    min-height: 45px;
    background: #fff;
    &:focus, &:hover {
      outline: none;
    }
  }
}
.form__item.error {
  @apply border-red-500 text-red-500;
}
</style>
<script>
import {
  required,
  alphaNum,
  email,
} from 'vuelidate/lib/validators'
import particlesJS from '../components/Particles.vue'
export default {
  name: 'Home',
  validations: {
    name: {
      alphaNum,
      required,
    },
    email: {
      email,
      required
    },
    message: {
      required
    }
  },
  components: { particlesJS },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
    }
  }
}
</script>
