<template>
  <div>
    <h3 class="heading">Which features do you want on your website?</h3>
    <Toggle label="Live chat">
      <template v-slot:description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </template>
    </Toggle>
    <Toggle label="Google Analytics" />
    <Toggle label="Blog system">
      <template v-slot:description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </template>
    </Toggle>
    <Toggle label="Search Engine Optimization">
      <template v-slot:description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </template>
    </Toggle>
    <Toggle label="Cache & Speed Optimzation">
      <template v-slot:description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley
      </template>
    </Toggle>
    <input
      @click="nextStep()"
      type="button"
      class="btn--primary"
      value="Next"
    />
  </div>
</template>
<script>
import Toggle from "../parts/Toggle";
export default {
  name: "Page Features",
  components: {
    Toggle
  },
  methods: {
    nextStep() {
      this.$emit("comp-change", "Hosting");
    }
  }
};
</script>
