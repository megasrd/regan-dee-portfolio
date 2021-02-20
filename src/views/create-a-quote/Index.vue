<template>
  <div class="create-a-quote">
    <Nav />
    <keep-alive>
      <div class="container">
        <component @comp-change="changeComponent" :is="isComponent" />
      </div>
    </keep-alive>
  </div>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
%ripple-fx {
  background-position: center;
  transition: background 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #7c72e7 radial-gradient(circle, transparent 1%, #ffffff1e 1%)
      center/15000%;
  }
  &:active {
    background-color: #7c72e7;
    background-size: 100%;
    transition: background 0s;
  }
}
.create-a-quote {
  .container {
    margin: 0 auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-width: 450px;
  }
  .header,
  h3 {
    text-align: center;
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 5rem;
  }
  .input-label {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0.3rem;
    display: block;
  }
  .input {
    background-color: #e3e6f1;
    border-radius: 4px;
    border: 2px solid #e3e6f1;
    padding: 0.5rem 0.8rem;
    display: block;
    height: 49px;
    width: 100%;
    margin: 0 auto;
    transition: all ease-in 0.3s;
    &:hover {
      border: 2px solid #bfc2ce;
      transition: all ease-out 0.3s;
    }
    &:focus {
      border: 2px solid #6457eb;
      transition: all ease-out 0.3s;
      outline: none;
    }
  }
  .btn--primary {
    @extend %ripple-fx;
    margin-top: 3rem;
    display: block;
    background: #6457eb;
    height: 39px;
    width: 162px;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
    transition: background 0.2s ease-in;
  }
  .btn--secondary {
    margin-top: 3rem;
    display: block;
    background: transparent;
    height: 39px;
    width: 162px;
    border-radius: 8px;
    border: 2px solid #6457eb;
    color: #6457eb;
    font-size: 16px;
    font-weight: bold;
    margin-left: auto;
    transition: background 0.2s ease-in;
  }
}
</style>
<script>
import Index from "./steps/Index.vue";
import PageQuantity from "./steps/PageQuantity.vue";
import Features from "./steps/Features.vue";
import Hosting from "./steps/Hosting.vue";
import HostingPlan from "./steps/HostingPlan.vue";
import Nav from "./parts/Navbar.vue";
export default {
  name: "create-a-quote",
  components: {
    Index,
    PageQuantity,
    Features,
    Hosting,
    HostingPlan,
    Nav
  },
  data() {
    return {
      isComponent: "Index"
    };
  },
  methods: {
    changeComponent(val) {
      console.log(val);
      this.isComponent = val;
    }
  }
};
</script>
