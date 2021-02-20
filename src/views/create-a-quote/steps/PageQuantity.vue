<template>
  <div>
    <h3 class="heading">How many pages?</h3>
    <label class="input-label"> Number of pages </label>
    <input type="number" class="input" placeholder="" />
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
  name: "Page Quantity",
  methods: {
    nextStep() {
      this.$emit("comp-change", "Features");
    }
  }
};
</script>
