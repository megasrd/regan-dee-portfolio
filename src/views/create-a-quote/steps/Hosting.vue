<template>
  <div>
    <h3 class="heading">Will you be needing website hosting?</h3>
    <div class="d-flex justify-content-between">
      <input
        @click="nextStep()"
        type="button"
        class="btn--primary m-0 "
        value="Yes"
      />
      <input
        @click="nextStepV2()"
        type="button"
        class="btn--secondary m-0 "
        value="No"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Hosting",
  methods: {
    nextStep() {
      this.$emit("comp-change", "HostingPlan");
    },
    nextStepV2() {
      this.$emit("comp-change", "PageQuantity");
    }
  }
};
</script>
