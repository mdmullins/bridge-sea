<template>
  <button class="icon-button" @click="$emit('click')">
    <IconPlay
      v-if="playIcon"
      :direction="playIcon"
      :class="{ 'reverse-arrow': playIcon === 'back' }"
    />
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
import type { PropType } from "vue";
import IconPlay from "./icons/IconPlay.vue";
const emit = defineEmits(["click"]);
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  playIcon: {
    type: [Boolean, String] as PropType<boolean | string>,
    default: false,
  },
});
</script>

<style scoped>
.icon-button {
  background-color: var(--vt-c-red);
  height: 2.5rem;
  width: 7.75rem;
  border: 0;
  border-radius: 1.25rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
}
.reverse-arrow {
  transform: rotate(180deg);
}
</style>
