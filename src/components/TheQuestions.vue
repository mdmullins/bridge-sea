<template>
  <div class="questions__wrapper">
    <div class="questions__question">
      <button class="arrow-button" @click="handleBack">
        <img src="@/assets/img/arrow.svg" />
      </button>
      <h2 class="question__text" v-text="question.title" />
      <button class="arrow-button--forward" @click="handleNext">
        <img src="@/assets/img/arrow.svg" />
      </button>
    </div>
    <input
      v-model="data[question.id]"
      class="question__input"
      type="number"
      :placeholder="question.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, computed } from "vue";
const questions = [
  {
    id: 1,
    title: "What is your approximate annual spend on industrial items?",
    placeholder: 50000,
  },
  {
    id: 2,
    title:
      "Approximately how many unique purchase orders are raised per annum for these items?",
    placeholder: 1300,
  },
  {
    id: 3,
    title:
      "Approximately how many suppliers are you using for industrial supplies?",
    placeholder: 30,
  },
];
const emit = defineEmits(["continue", "back"]);
const currentQuestion = ref<number>(1);
const handleNext = () => {
  if (questions.length > currentQuestion.value) {
    currentQuestion.value++;
  } else {
    emit("continue", data);
  }
};
const handleBack = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--;
  } else {
    emit("back");
  }
};
const question = computed(() => questions[currentQuestion.value - 1]);
const data = reactive({
  1: "",
  2: "",
  3: "",
});
</script>

<style scoped>
.questions__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: row; */
  padding: 5rem;
}
.arrow-button--forward img {
  transform: rotate(180deg);
}
.arrow-button,
.arrow-button--forward {
  background-color: var(--vt-c-red);
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question__text {
  white-space: wrap;
  max-width: 494px;
  text-align: center;
  padding: 2.5rem;
  margin: 0;
}
.questions__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question__input {
  border-radius: 5px;
  margin-left: 4rem;
  padding: 1rem;
  border: 0;
  font-size: 2rem;
}
</style>
