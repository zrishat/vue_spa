<script>
export default {
  data() {
    return {
      lastResult: 10,
      allTasks: 25,
      accuracy: 80,
      trainingDay: 24
    }
  }
}
</script>

<template>
  <h1>Привет!</h1>
  <p>Добро пожаловать на {{ trainingDay }} тренировачный день, </p>
  <p>Ваш последний результат - решено {{ lastResult }} из {{ allTasks }}.</p>
  <p>Общая точность {{ accuracy }}%.</p>
</template>
