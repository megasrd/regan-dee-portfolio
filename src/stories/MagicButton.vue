<template>
    <input class="magic-button" type="button" :value="label" />
</template>
<style>
.magic-button {
    width: 160px;
    height: 45px;
    border-radius: 32px;
    color: #fff;
    text-align: center;
    font-weight: 800;
    background: rgb(39, 39, 39);
    cursor: pointer;
    outline: none;
}
</style>
<script>
export default {
    name: 'magic-button',
        props: {
            label: {
                type: String,
                required: true,
            },
        },
         computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        label: this.label,
      };
    },
  }, 
    }
</script>
