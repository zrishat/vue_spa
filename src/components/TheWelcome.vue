<script>
export default {
  data() {
    return {
      lastResult: this.$store.state.lastResult,
      allTasks: this.$store.state.allTasks,
      accuracy: this.$store.state.accuracy,
      trainingDay: this.$store.state.trainingDay
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
