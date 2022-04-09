<template>
  <button @click="goBack">Отмена</button>
  <p>Время раунда {{roundTime}}</p>
</template>

<script>
  export default {
    data(){
      return {
        roundTime: this.$store.state.i_duration,
      }
    },
    methods: {
      goBack() {
        clearInterval(this.timer);
        this.$router.push('/')
      },
    },
    mounted() {
      this.currentTime = this.roundTime;
    }
  }
</script>