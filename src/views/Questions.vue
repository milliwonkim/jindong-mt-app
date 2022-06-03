<template>
  <section class="info-container">
    <button class="info-button" @click="handleNextPerson">
      돌려돌려 돌림판
    </button>
    <info-box>
      <p>{{ person.name }} ({{ person.studentId }})</p>
      <p class="info-theme">주제: {{ theme }}</p>
    </info-box>
  </section>
</template>

<script>
import "@/views/Questions.scss";
import { onMounted, ref } from "vue";
import InfoBox from "@/components/InfoBox.vue";

const selector = (value) => {
  if (value.length === 0) return "";
  return Math.floor(Math.random() * value.length);
};

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

const getPerson = (selectedOne, selectedObj) => {
  const personSelector = selector(selectedOne);
  const selectedObject = selectedOne[personSelector];

  selectedObj.value = selectedObject;
};

export default {
  components: { InfoBox },
  name: "App",
  setup() {
    const person = ref({});
    const theme = ref("");

    onMounted(() => {
      getPerson(PEOPLE, person);
      getPerson(THEMES, theme);
    });

    const handleNextPerson = () => {
      getPerson(PEOPLE, person);
      getPerson(THEMES, theme);
    };

    return { person, handleNextPerson, theme };
  },
};
</script>
