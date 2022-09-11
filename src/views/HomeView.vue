<template>
  <div class="home">
    <h1 class="title" v-if="stage?.title" v-text="stage?.title" />
    <component
      :is="stageComponent"
      @continue="handleContinue"
      :data="completedData"
      :checklist="checklist"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, defineAsyncComponent } from "vue";
import type { Stage, ChecklistItem } from "@/types/Stages";
const completedData = reactive({
  1: "",
  2: "",
});
const stages: Stage[] = [
  {
    id: 1,
    title: "Calculating your costs",
    component: "TheChecklist",
  },
  {
    id: 2,
    title: "Calculating your costs",
    component: "TheQuestions",
  },
  {
    id: 3,
    title: "Calculating your costs - Your results",
    component: "TheResults",
  },
];
const checklist: ChecklistItem[] = [
  {
    title: "Identify requirements",
    cost: 6,
    id: 1,
  },
  {
    title: "Request a quotation",
    cost: 3,
    id: 2,
  },
  {
    title: "Find products",
    cost: 16,
    id: 3,
  },
  {
    title: "Raise an order",
    cost: 6,
    id: 4,
  },
  {
    title: "Authorise sale",
    cost: 21.55,
    id: 5,
  },
  {
    title: "Pay provider",
    cost: 13,
    id: 6,
  },
  {
    title: "Deliver product",
    cost: 4.3,
    id: 7,
  },
  {
    title: "Invoice check",
    cost: 6,
    id: 8,
  },
  {
    title: "Place order",
    cost: 6.5,
    id: 9,
  },
];
const stageId = ref<number>(1);
const handleContinue = (data) => {
  const stagesLength = stages.length;
  completedData[stageId.value] = data;
  if (stagesLength > stageId.value) {
    stageId.value++;
  }
};
const stage = computed(() => stages.find((item) => item.id === stageId.value));
const stageComponent = computed(() => {
  return stage.value?.component
    ? defineAsyncComponent(
        () => import(`@/components/${stage.value?.component}.vue`)
      )
    : "";
});
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
}
.title {
  margin-bottom: 3.5rem;
}
</style>
