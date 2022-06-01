<template>
  <div>
    <button class="info-button" @click="handleNextPerson">돌려돌려 돌림판</button>
    <div class="info-box">
      <div>{{ person.name }}</div>
      <div>{{ person.studentId }}</div>
      <div>주제: {{ theme }}</div>
    </div>
  </div>
</template>

<script>
const PEOPLE = [
  { name: '홍민기', studentId: 18 },
  { name: '박수이', studentId: 17 },
  { name: '안소현', studentId: 17 },
  { name: '이상준', studentId: 16 },
  { name: '김민주', studentId: 15 },
  { name: '오효진', studentId: 15 },
  { name: '김기원', studentId: 14 },
  { name: '정수민', studentId: 12 },
  { name: '하헌재', studentId: 7 },
]

const THEMES = ['연애', '일', '진로']

import { onMounted, ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const person = ref({})
    const theme = ref('')

    const selector = (value) => {
      if (value.length === 0) return ''
      return Math.floor(Math.random() * (value.length - 1))
    }

    const getPerson = () => {
      const personSelector = selector(PEOPLE)
      const themeSelector = selector(THEMES)

      person.value = PEOPLE[personSelector]
      theme.value = THEMES[themeSelector]
    }

    onMounted(() => {
      getPerson()
    })

    const handleNextPerson = () => {
      getPerson()
    }

    console.log(person)

    return { person, handleNextPerson, theme }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.info-box {
  margin-top: 16px;
}

.info-button {
  border: 1px solid transparent;
  padding: 8px;
  border-radius: 16px;
}

.info-button:hover {
  cursor: pointer;
  color: #ffffff;
  background: #2c3e50;
}
</style>
