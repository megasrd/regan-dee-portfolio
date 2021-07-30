<template>
<span>
  <div class="overflow-hidden w-full">
  <particlesJS class="w-full h-screen absolute opacity-40"/>
    <div class="bg-white md:h-screen h-half w-full">
      <div class="container flex items-center justify-center h-full">
        <div>       
          <img class="mx-auto md:w-40 w-24 mb-8" src="../assets/logo-black.svg"/>
          <h2 class="text-gray-900 font-bold text-center md:text-5xl text-3xl mb-5"> Front-End Web Developer </h2>
          <h2 class="text-gray-900 font-light text-center text-2xl"> Websites | Digital Solutions </h2>
          <a class="md:block hidden" href="#about-me">
            <div class='mouse-container m-5'>
              <div class='mouse'>
                <span class='scroll-down'></span>
              </div>
            </div>          
            <p class="mx-auto absolute left-0 right-0 bottom-0 m-3 text-center"> Scroll down </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="about-me" class="section bg-gray-900 md:py-20 w-full p-4">
    <div class="text-white container">
      <img class="h-48 w-48 rounded-full mx-auto mb-16" src="../assets/images/me.jpeg"/>
      <div class="grid grid-cols-12 md:gap-12 mt-8">
        <div class="md:col-span-6 col-span-12">
          <h3 class="font-bold md:text-6xl text-4xl mb-8"> Hi, I'm Regan. </h3>
          <p class="text-gray-200 mb-5"> I started my journey with game development which led me into the web development industry. I've been doing this for more than 5 years now, from helping out local business' with websites to contract work for large companies. I'm a humble developer that's always looking to improve my skills. </p>
          <p class="text-gray-200"> Visit my <a class="underline text-yellow-400 font-semibold" target="_blank" href="https://www.linkedin.com/in/regan-duthie-683903133/"> Linkedin</a> profile for more information. </p>
          <h4 class="font-bold text-2xl mt-12"> Dev Tools I Use </h4>
          <div class="mt-6 grid items-start lg:grid-cols-6 md:grid-cols-4 grid-cols-12 text-gray-200">
            <div class="md:col-span-1 col-span-3">
              <img class="w-12 mb-3 mx-auto" src="../assets/tools/vscode.svg"/>
              <p class="font-semibold text-sm text-center "> VS Code </p>
            </div>
            <div class="md:col-span-1 col-span-3">
              <img class="w-12 mb-3 mx-auto" src="../assets/tools/git.svg"/>
              <p class="font-semibold text-sm text-center "> Git </p>
            </div>          
            <div class="md:col-span-1 col-span-3">
              <img class="w-12 mb-3 mx-auto" src="../assets/tools/slack.svg"/>
              <p class="font-semibold text-sm text-center "> Slack </p>
            </div>     
            <div class="md:col-span-1 col-span-3">
              <img class="w-12 mb-3 mx-auto" src="../assets/tools/adobe-illustrator.svg"/>
              <p class="font-semibold text-sm text-center "> Adobe Illustrator </p>
            </div>                     
          </div>
        </div>
        <div class="md:col-span-6 col-span-12">
          <h3 class="font-bold text-2xl md:mt-24 md:mb-5 mt-12 mb-5"> What I Use </h3>
          <div class="mb-6">
            <p class="mb-1 text-gray-200"> HTML5 </p>
            <div class="flex items-center">
              <img class="w-5 mr-3" src="../assets/skills/html5.svg"/>
              <div class="h-1 w-full bg-gray-700">
                <div style="width:94%; background-color: #ff8700" class="h-full"/>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <p class="mb-1 text-gray-200"> CSS / SASS </p>
            <div class="flex items-center">
              <img class="w-5 mr-3" src="../assets/skills/sass.svg"/>            
              <div class="h-1 w-full bg-gray-700">
                <div style="width:90%; background: #aa5884" class="h-full"/>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <p class="mb-1 text-gray-200"> Tailwind </p>
            <div class="flex items-center">
              <img class="w-5 mr-3" src="../assets/skills/tailwind.png"/>                
              <div class="h-1 w-full bg-gray-700">
                <div style="width:84%; background-color: #3facc9" class="h-full"/>
              </div>
            </div>
          </div>                   
          <div class="mb-6">
            <p class="mb-1 text-gray-200"> Javascript </p>
            <div class="flex items-center">
              <img class="w-5 mr-3" src="../assets/skills/javascript.svg"/>              
              <div class="h-1 w-full bg-gray-700">
                <div style="width:75%; background-color: #f7df1d" class="h-full"/>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <p class="mb-1 text-gray-200"> Vue.js </p>
            <div class="flex items-center">
              <img class="w-5 mr-3" src="../assets/skills/vue.svg"/>                
              <div class="h-1 w-full bg-gray-700">
                <div style="width:70%" class="h-full bg-green-400"/>
              </div>
              </div>
          </div>                            
        </div>
      </div>    
      <h3 class="text-center text-4xl font-bold md:mt-24 md:mb-16 mt-16 mb-32"> Services I Offer </h3>
    </div>
  </div>
  <div class="container md:pb-24 pb-12 -mt-24 lg:px-0 md:px-5 px-6">
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
        <h2 class="text-gray-900 text-4xl font-bold mb-5"> My Recent Work </h2>
        <p class="text-gray-700"> Here are a few websites/projects I've worked on recently. </p>
      </span>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <figure class="project-wrapper h-64">
        <img class="cursor-pointer h-full w-full rounded-xl flex items-center object-cover" src="../assets/images/portfolio/straussconcepts.png" alt="straussconcepts portfolio"/>
        <figcaption> 
          <div class="wrapper">
            <h3 class="text-center text-white font-semibold text-3xl"> Strauss Concepts </h3>
            <a class="block mt-3" target="_blank" href="https://straussconcepts.co.za/">
              <input  value="Check it out" type="button" class="font-semibold mx-auto block px-10 py-3 rounded-full border-2 bg-transparent border-white text-white hover:text-gray-900 hover:bg-white transition-all hover:transition-all cursor-pointer" />
            </a>
          </div>
        </figcaption>
            <div class="bg"/>        
      </figure>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <figure class="project-wrapper h-64">
        <img class="cursor-pointer h-full w-full rounded-xl flex items-center object-cover" src="../assets/images/portfolio/tritansecurity.png" alt="tritan security portfolio"/>
        <figcaption> 
          <div class="wrapper">
            <h3 class="text-center text-white font-semibold text-3xl"> Tritan Security</h3>
            <a class="block mt-3" target="_blank" href="https://www.tritansecurity.co.za/">
              <input  value="Check it out" type="button" class="font-semibold mx-auto block px-10 py-3 rounded-full border-2 bg-transparent border-white text-white hover:text-gray-900 hover:bg-white transition-all hover:transition-all cursor-pointer" />
            </a>
          </div>
        </figcaption>
            <div class="bg"/>        
      </figure>
    </div>
    <div class="lg:col-span-4 md:col-span-6 col-span-12">
      <figure class="project-wrapper h-64">
        <img class="cursor-pointer h-full w-full rounded-xl flex items-center object-cover" src="../assets/images/portfolio/jbgetfit.jpeg" alt="jbgetfit portfolio"/>
        <figcaption> 
          <div class="wrapper">
            <h3 class="text-center text-white font-semibold text-3xl"> JB Get Fit </h3>
            <a class="block mt-3" target="_blank" href="http://jbgetfit.com/">
              <input  value="Check it out" type="button" class="font-semibold mx-auto block px-10 py-3 rounded-full border-2 bg-transparent border-white text-white hover:text-gray-900 hover:bg-white transition-all hover:transition-all cursor-pointer" />
            </a>
          </div>
        </figcaption>
            <div class="bg"/>        
      </figure>
    </div>       
  </div>
  <div class="bg-white w-full py-32 section">
    <div class="container grid grid-cols-12 lg:px-0 md:px-5 px-6">
      <div class="text-center col-span-12 mb-6">
        <h2 class="text-gray-900 text-4xl font-bold mb-3"> Get In Touch</h2>
        <p class="text-gray-700"> My inbox is always open for new opportunities. </p>
      </div>      
      <div class="col-span-12">
          <div class="form">
            <a href="mailto:reganjduthie@gmail.com" class="w-56 font-semibold mx-auto block px-10 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 transition-all hover:transition-all cursor-pointer text-center"> Send Me An Email </a>
          </div>
      </div>
      <div class="col-span-12 my-8">
          <h4 class="text-center"> OR </h4>
      </div>      
      <div class="col-span-12">
          <div class="form">
            <a target="_blank" href="https://www.linkedin.com/in/regan-duthie-683903133/" class="w-72 font-semibold mx-auto block px-10 py-3 rounded-full bg-white border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 transition-all hover:transition-all cursor-pointer text-center"> Check out my LinkedIn </a>
          </div>
      </div>      
    </div>
  </div>
  <div class="bg-black w-full py-8">
    <div class="container grid grid-cols-12 lg:px-0 md:px-5 px-6">
      <div class="col-span-12 text-center">
        <img class="mx-auto w-14 mb-4" src="../assets/logo-white.svg"/>
        <p class="text-sm text-gray-400"> Regan Duthie | Created Using Vue & Tailwind </p>
      </div>
    </div>
  </div>  
</span>
</template>
<style lang="scss" scoped>
@-webkit-keyframes scroll-inner {
    from {margin-top: 15%;}
    to {margin-top: 50%;}
}
@keyframes scroll-inner {
    from {margin-top: 15%;}
    to {margin-top: 50%;}
}
@-webkit-keyframes scroll-mouse {
    from {margin-top: 0;}
    to {margin-top: 15px;}
}
@keyframes scroll-mouse {
    from {margin-top: 0;}
    to {margin-top: 15px;}
}

div.mouse-container{
  position: absolute;
  height:100px;  
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity 1s ease-in;
  &:hover {
    transition: opacity 1s ease-out;
    opacity: 0.5;
  }  
}
div.mouse{
  position:relative;
  margin:0 auto;
  display:block;
  width:40px;
  height:60px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 25px;
  -webkit-animation: scroll-mouse 1.5s; 
  animation: scroll-mouse 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  animation-fill-mode: backwards;    
  
  span.scroll-down{
    display:block;
    width:10px;
    height:10px;
    background:rgb(0, 0, 0);
    border-radius:50%;
    margin:15% auto auto auto;
    
    -webkit-animation: scroll-inner 1.5s; 
    animation: scroll-inner 1.5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function:ease;
    animation-timing-function:ease;
    animation-direction: alternate-reverse;
    animation-fill-mode: backwards;     
      
  }
}
.project-wrapper {
  cursor: pointer;
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
  border-color: transparent;
  border-width: 2px;
  transition: all 0.3s ease-in;  
  &:hover {
    transition: all 0.3s ease-out;  
    border-color: red;
  }  
  .bg {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 8999; 
  }
  figcaption {
    z-index: 9000;     
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex-flow: column;
      justify-items: center;
      justify-content: center;
      padding: 4rem 1rem;
      height: 100%;
    }
  }
  figcaption, .bg {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;    
  }
  &:hover {
    figcaption, .bg {
      opacity: 1;
      transition: all 0.3s ease-in;    
    }
  }
}
.section {
    min-height: 650px;
}
.form {
  &__item {
    @apply border-2 border-gray-600 text-gray-800 px-3 rounded mb-3;
    
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
// const nodemailer = require("nodemailer");
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
    // async sendMail() {
    //   let testAccount = await nodemailer.createTestAccount();
    //   let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: testAccount.user, // generated ethereal user
    //       pass: testAccount.pass, // generated ethereal password
    //     },
    //   });      
    //   // send mail with defined transport object
    //     let info = await transporter.sendMail({
    //       from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //       to: "bar@example.com, baz@example.com", // list of receivers
    //       subject: "Hello ✔", // Subject line
    //       text: "Hello world?", // plain text body
    //       html: "<b>Hello world?</b>", // html body
    //     });

    //     console.log("Message sent: %s", info.messageId);
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...      
    // },
    submit() {
      this.sendMail().catch(console.error);
      this.$v.$touch()
    }
  }
}
</script>
