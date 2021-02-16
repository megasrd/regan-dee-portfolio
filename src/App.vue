<template>
  <div>
    <NavBar />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
<script>
import NavBar from './components/NavBar';
export default {
  components: {
    NavBar
  }
}
</script>