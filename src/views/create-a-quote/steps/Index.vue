<template>
  <div>
    <h3 class="heading">What kind of website do you need?</h3>
    <select class="input">
      <option> option </option>
    </select>
    <input
      @click="nextStep()"
      type="button"
      class="btn--primary"
      value="Next"
    />
  </div>
</template>
<script>
export default {
  name: "Index",
  methods: {
    nextStep() {
      this.$emit("comp-change", "PageQuantity");
    }
  }
};
</script>
