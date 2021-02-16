<template>
  <div class="nav-bar">
    <div class="container">
      <div class="menu">
        <span class="logo">
          MY LOGO
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.nav-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: block;
  background: #fff;
  padding: 2rem;
  margin-bottom: -20px;
  .logo {
    display:block;
    text-align: left;
    color: $color-primary;
    font-weight: bold;
    font-size: 1.5em;
  }
  .menu {
    margin: 0 auto;
    .item {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
    }
  }
}
</style>
<script>
export default {};
</script>
