/* eslint-disable vue/valid-v-slot */
<template>
  <transition v-if="isOpen" appear mode="out-in" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="msg-modal">
          <div @click.prevent="close()" class="close-btn">
            x
          </div>
          <!-- <slot> </slot> -->
          <div class="title">
            <slot name="header"></slot>
          </div>
          <div class="body">
            <slot name="body" />
          </div>
          <div class="footer">
            <button @click.prevent="close()" class="modal-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
%ripple-fx {
  background-position: center;
  transition: background 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #ffffff1e 1%)
      center/15000%;
  }
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-mask {
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: table;
  z-index: 9999;
  .modal-wrapper {
    background-color: rgba(53, 60, 67, 0.3);
    display: table-cell;
    vertical-align: middle;
    z-index: 300;
    position: relative;
    height: 100%;
    @media (max-width: 780px) {
      display: block;
    }
    .msg-modal {
      background: #fff;
      padding: 1rem;
      border-radius: 16px;
      margin: 0 auto;
      width: 100%;
      @media (min-width: 400px) {
        width: 600px;
      }
      .title {
        padding: 0 1rem;
        margin-top: 2rem;
        text-align: left;
        font-size: 24px;
        font-weight: 600;
      }
      .body {
        @media (min-width: 400px) {
          min-height: 200px;
        }
        min-height: 40vh;
        max-height: 500px;
        padding: 2rem 1rem;
      }
      .footer {
        .modal-btn {
          border: none;
          background: #6457eb;
          padding: 1rem;
          width: 100%;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          border-radius: 16px;
          @extend %ripple-fx;
        }
      }
      .close-btn {
        float: right;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
