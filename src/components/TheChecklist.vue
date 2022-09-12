<template>
  <div class="checklist__wrapper">
    <ChecklistCard
      v-for="item in checklist"
      :key="item.id"
      :title="item.title"
      :cost="item.cost"
      :isSelected="isSelected(item.id)"
      @click="handleSelect(item)"
    />
    <ChecklistCard class="total-card">
      <div class="total-card__content">
        <p class="total-card__title">Total</p>
        <h2 class="total-card__total" v-text="totalFormatted" />
      </div>
    </ChecklistCard>
    <IconButton
      text="Continue"
      playIcon="forward"
      @click="$emit('continue', { selected, total })"
    />
  </div>
</template>

<script setup lang="ts">
import ChecklistCard from "./ChecklistCard.vue";
import { ref, computed } from "vue";
import type { ComputedRef } from "vue";
import type { ChecklistItem } from "@/types/Stages";
import IconButton from "./IconButton.vue";
const emit = defineEmits(["continue"]);
const selected = ref<Number[]>([]);
const isSelected = (id: Number): boolean => selected?.value?.includes(id);
const props = defineProps<{
  checklist: ChecklistItem[];
}>();
const handleSelect = (item: ChecklistItem) => {
  if (selected.value.includes(item.id)) {
    selected.value = selected.value.filter(
      (theItem: Number) => theItem !== item.id
    );
  } else {
    selected.value.push(item.id);
  }
};
const total = computed(() => {
  const payload = selected.value.reduce((acc, id) => {
    const item = props.checklist.find((item) => item.id === id);
    if (item && item.cost) {
      return acc + item.cost;
    }
    return acc;
  }, 0);
  return payload;
});
const totalFormatted = computed(() => {
  const payload = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(total.value.toFixed(2));
  return payload;
});
</script>

<style scoped>
.checklist__wrapper {
  width: 100%;
  /* height: 100%; */
  max-width: 62.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
  align-items: center;
}
.total-card {
  display: flex;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 2;
}
.total-card__content {
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
}
.total-card__total {
  font-size: 28px;
  margin: 0;
}
.total-card__title {
  text-transform: uppercase;
  margin: 0;
}
</style>
