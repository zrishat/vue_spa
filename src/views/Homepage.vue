<script setup>
import SettingsMenu from '../components/SettingsMenu.vue'
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <TheWelcome />
  <SettingsMenu />
  <button @click="goPlay">Play</button>
</template>


<script>
  export default {
    methods: {
      goPlay() {
        this.$router.push('/play')
      }
    }
  }
</script>


<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
input{
  margin: 10px;
  display: inline-block;
}
</style>
