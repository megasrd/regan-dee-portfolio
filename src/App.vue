<template>
  <div id="app">
    <!-- <div v-if="this.$route.path !== '/quote'" class="nav-bar flex items-center justify-between">
      <button @click="isOpen =! isOpen" class="menu-btn" :class="isOpen ? 'open text-white' : 'text-gray-900 '" aria-label="Toggle Navigation">
        <svg viewBox="-50 -40 100 80" width="50" height="40">
          <defs>
            <path class="stroke-current" id="line" fill="none" stroke-width="15" stroke-linecap="round" d="M -40 0 h 80" />
          </defs>
          <g>
            <g class="translate" transform="translate(0 -30)">
              <g class="rotate" transform="rotate(-45)">
                <use transform="rotate(45)" href="#line" />
              </g>
            </g>

            <g class="rotate" transform="rotate(45)">
              <use transform="rotate(-45)" href="#line" />
            </g>

            <g class="translate" transform="translate(0 30)">
              <g class="rotate" transform="rotate(-45)">
                <use transform="rotate(45)" href="#line" />
              </g>
            </g>
          </g>
        </svg>
      </button>         
      <div>
        <router-link to="/quote">
          <span class="px-4 py-3 rounded-full border-2 border-gray-900 font-semibold text-gray-900 cursor-pointer"> How can I help? </span>
        </router-link>
      </div>
    </div> -->
    <div v-if="isOpen" class="fixed left-0 top-0 md:w-1/2 w-screen h-screen bg-gray-900 z-50">
      <div class="container">

      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss">

html, body {
  scroll-behavior: smooth;
}

//Webkit Scrollbar
::-webkit-scrollbar {
  -webkit-appearance: none;
  -webkit-overflow-scrolling: touch;
  width: 0;
}

@media screen and (min-width: 1280px) {
  ::-webkit-scrollbar {
    width: 6px;
  }
}

::-webkit-scrollbar-thumb {
  border: 3px solid #dadada;
  -webkit-overflow-scrolling: touch;
  background: #333333;
}

::-webkit-scrollbar-track {
  background-color: #e7e7e7;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 0;
}

::-webkit-scrollbar:vertical {
  width: 12px;
  -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar:horizontal {
  height: 12px;
  -webkit-overflow-scrolling: touch;
}
.nav-bar {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 36px
}
.menu-btn svg {
  width: 100%;
  height: auto;
  display: block;
}
.menu-btn .translate {
  transition: transform 0.25s ease-in-out;
  transition-delay: 0.25s;
}
.menu-btn .rotate {
  transition: transform 0.25s ease-in-out;
  transition-delay: 0s;
}
.menu-btn.open .translate {
  transform: translateY(0);
  transition-delay: 0s;
}
.menu-btn.open .rotate {
  transform: rotate(0);
  transition-delay: 0.25s;
}

.menu-btn {
  z-index: 1000;
  width: 4rem;
  height: 4rem;
  background: none;
  border: none;
  color: inherit;
  padding: 0.5rem;
}
.menu-btn.open {
    fill: #fff;
}
.menu-btn:focus {
  outline: none;
}

#app {

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap');

  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
