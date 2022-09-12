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
        <li v-for="item in resultsList" :key="item.id">
          {{ item.title }}&nbsp;&ndash;&nbsp;{{ getMoney(getResult(item)) }}
        </li>
        <li>Total process costs&nbsp;&ndash;&nbsp;{{ getTotal }}</li>
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
});
const resultsList = [
  {
    id: 1,
    checklistIds: [1, 2],
    questionId: 2,
    title: "Supplier & product",
  },
  {
    id: 2,
    checklistIds: [3, 4, 5, 6],
    questionId: 2,
    title: "Quotation to order process",
  },
  {
    id: 3,
    checklistIds: [7],
    questionId: 1,
    title: "Expediting & recieving orders",
  },
  {
    id: 4,
    checklistIds: [8],
    questionId: 2,
    title: "Processing invoices",
  },
  {
    id: 5,
    checklistIds: [9],
    questionId: 3,
    title: "Paying suppliers",
  },
];
const getResult = (item) => {
  const { checklistIds, questionId } = item;
  const { data, checklist } = props;
  const questionData = data[2];
  console.log({ questionData });
  const costs = checklistIds.reduce((acc, id) => {
    const item = checklist.find((item) => item.id === id);
    return acc + item.cost;
  }, 0);
  const questionAmount = questionData[questionId];
  const result = costs * questionAmount;
  return result;
};
const getMoney = (item) => {
  const payload = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(item.toFixed(2));
  return payload;
};
const getTotal = computed(() => {
  const payload = resultsList.reduce((acc, item) => {
    const result = getResult(item);
    return acc + result;
  }, 0);
  return getMoney(payload);
});
</script>

<style scoped>
.results__wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
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
