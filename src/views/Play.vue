<template>
  <h1>Supergame</h1>
  <p>...bla..bla.bla</p>
  <button @click="goBack">go home</button>
</template>
<script>
  export default {
    methods: {
      goBack() {
        this.$router.push('/')
      }
    }
  }
</script>