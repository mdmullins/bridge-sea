<template>
  <button
    :class="{
      checklist__card__wrapper: true,
      'checklist__card__wrapper--selected': isSelected,
    }"
  >
    <slot>
      <IconTick
        class="checklist__card__icon"
        :fill="isSelected ? '#fff' : '#5F259F'"
      />
      <p class="checklist__card__title" v-text="title" />
      <div class="checklist__card__cost">
        <p class="checklist__card__cost__title">estimate</p>
        <p class="checklist__card__cost__amount" v-text="renderedCost" />
      </div>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import type { PropType } from "vue";
import IconTick from "./icons/IconTick.vue";
const props = defineProps({
  title: {
    type: String as PropType<string>,
    required: false,
  },
  cost: {
    type: Number as PropType<number>,
    required: false,
  },
  isSelected: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
const renderedCost = computed(() => {
  const payload = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(props.cost.toFixed(2));
  return payload;
});
</script>

<style scoped>
.checklist__card__wrapper {
  display: flex;
  box-shadow: 0px 3px 6px var(----vt-c-shadow);
  height: 4.5rem;
  width: 100%;
  border-radius: 2.75rem;
  border: 0;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease-in-out;
}
.checklist__card__wrapper--selected {
  background-color: var(--vt-c-purple);
}
.checklist__card__wrapper--selected .checklist__card__title,
.checklist__card__wrapper--selected .checklist__card__cost__amount {
  color: var(--vt-c-white);
}
.checklist__card__title,
.checklist__card__cost__title,
.checklist__card__cost__amount {
  margin: 0;
  color: var(--vt-c-purple);
  transition: color 0.2s ease-in-out;
}
.checklist__card__cost__title,
.checklist__card__cost__amount {
  font-size: 0.75rem;
}
.checklist__card__cost__title {
  text-transform: uppercase;
  color: var(--vt-c-light-purple);
  font-weight: bold;
}
</style>
