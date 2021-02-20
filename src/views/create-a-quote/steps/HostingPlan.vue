<template>
  <div>
    <h3 class="heading">Please select a hosting plan?</h3>
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
  name: "Hosting Plan",
  methods: {
    nextStep() {
      this.$emit("comp-change", "PageQuantity");
    }
  }
};
</script>
