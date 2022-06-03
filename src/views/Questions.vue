<template>
  <section class="info-container">
    <button class="info-button" @click="handleNextPerson">
      돌려돌려 돌림판
    </button>
    <div class="info-box">
      <p>{{ person.name }} ({{ person.studentId }})</p>
      <p class="info-theme">주제: {{ theme }}</p>
    </div>
  </section>
</template>

<script>
const PEOPLE = [
  { name: "홍민기", studentId: 18 },
  { name: "박수이", studentId: 17 },
  { name: "안소현", studentId: 17 },
  { name: "이상준", studentId: 16 },
  { name: "김민주", studentId: 15 },
  { name: "오효진", studentId: 15 },
  { name: "김기원", studentId: 14 },
  { name: "정수민", studentId: 12 },
  { name: "하헌재", studentId: 7 },
];

const GET_OR_TAKE = ["질문받기", "질문하기"];

import { onMounted, ref } from "vue";

export default {
  name: "App",
  setup() {
    const person = ref({});
    const theme = ref("");

    const selector = (value) => {
      if (value.length === 0) return "";
      return Math.floor(Math.random() * value.length);
    };

    const getPerson = () => {
      const THEMES = [
        "연애",
        "일",
        "진로",
        "한 잔 마셔",
        "라떼는 말이야",
        "질문 할 수 있는 권리 획득!",
      ].map((el) => {
        return `${el} (${GET_OR_TAKE[selector(GET_OR_TAKE)]})`;
      });

      const personSelector = selector(PEOPLE);
      const themeSelector = selector(THEMES);

      const selectedPerson = PEOPLE[personSelector];
      const selectedTheme = THEMES[themeSelector];

      person.value = selectedPerson;
      theme.value = selectedTheme;

      // if (selectedPerson.name === '김기원') {
      //   person.value = { name: '정수민', studentId: 12 }
      //   theme.value = '한 잔 마셔'
      // }
    };

    onMounted(() => {
      getPerson();
    });

    const handleNextPerson = () => {
      getPerson();
    };

    console.log(person);

    return { person, handleNextPerson, theme };
  },
};
</script>

<style>
.info-box {
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 16px;
  font-size: 30px;
  font-weight: 700;
}

.info-button {
  border: 1px solid transparent;
  padding: 8px;
  border-radius: 16px;
  width: fit-content;
  display: inline-block;
  margin: 0 auto;
}

.info-button:hover {
  cursor: pointer;
  color: #ffffff;
  background: #2c3e50;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
}

.info-theme {
  font-weight: 500;
  font-size: 30px;
}
</style>
