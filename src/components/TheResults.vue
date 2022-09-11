<template>
  <div class="results__wrapper">
    <div class="results__content">
      <p class="results__heading">
        By utilising the Bridge Sales Enablement Agency calculator organisations
        can simplify the processes associated with indirect procurement and
        unlock significant typical savings of up to 60% of process costs.
      </p>
      <p class="results__body">
        Based on what you have told us about your process we can estimate that
        the following costs are being insured within your procurement processes.
      </p>
      <IconButton text="Go back" play-icon="back" />
    </div>
    <div class="results__figures">
      <ul>
        <li>supplier &amp; product - </li>
        <li>Quotation to order process - </li>
        <li>Expediting &amp; recieving orders - </li>
        <li>Processing invoices - </li>
        <li>Paying suppliers - </li>
        <li>Total process costs (year) - </li>
      </ul>
      <IconButton text="Send me this report" :play-icon="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "./IconButton.vue";
import { computed } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  checklist: {
    type: Array,
    required: true,
  },
})
const resultOne = computed(() => {
  const checklistData = props.data.1;
  const questionsData = props.data.2;
  const IR = checklistData.selected
})
</script>

<style scoped>
.results__content {
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.results__heading {
  color: var(--vt-c-red);
  font-weight: bold;
  font-size: 1.5rem;
}
.results__body {
  margin: 2rem 0;
}
</style>
