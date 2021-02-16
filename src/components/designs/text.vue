<template>
  <div class="text">
    <label class="text__label"> {{ label }} </label>
    <input class="text__input" type="text" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/components.scss";
.text {
  width: 325px;
  margin: 30px;
  &__label {
    @extend %label;
  }
  &__input {
    @extend %input;
  }
}
</style>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Insert text here"
    }
  }
};
</script>
