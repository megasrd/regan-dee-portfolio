<template>
  <span>
    <span class="toggle">
      <div @click.prevent="info = true" class="info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
          />
        </svg>
      </div>
      <div
        :class="toggle ? 'highlight' : ''"
        @click.prevent="toggle = !toggle"
        class="toggle-wrapper"
      >
        <label class="label">
          {{ label }}
        </label>
        <label class="switch">
          <input v-model="toggle" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </span>
    <Modal @close="info = false" :isOpen="info">
      <template v-slot:header>
        {{ label }}
      </template>
      <template v-slot:body>
        <slot name="description"></slot>
      </template>
    </Modal>
  </span>
</template>
<style lang="scss" scoped>
.toggle {
  display: flex;
  align-items: baseline;
  .info {
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .toggle-wrapper.highlight {
    &:hover,
    &:focus {
      border: 2px solid #6457eb;
    }
  }
  .toggle-wrapper {
    width: 100%;
    margin-bottom: 1rem;
    cursor: pointer;
    background: #e3e6f1;
    border: 2px solid #e3e6f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    transition: 0.2s ease-in all;
    &:hover {
      border: 2px solid #bfc2ce;
      transition: all ease-out 0.3s;
    }
    &:focus {
      border: 2px solid #6457eb;
      transition: all ease-out 0.3s;
      outline: none;
    }
    label {
      margin: 0;
    }
    switch {
      margin: 0;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(172, 172, 172);
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #6457eb;
    }

    input:focus + .slider {
      box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.7);
      outline: none;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
}
</style>
<script>
import Modal from "../../../components/designs/modal.vue";
export default {
  components: {
    Modal
  },
  props: {
    label: {
      default: "Feature",
      type: String
    },
  },
  data() {
    return {
      toggle: false,
      info: false
    };
  }
};
</script>
