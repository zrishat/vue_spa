<script>
export default {
  data() {
    return {
      i_duration: this.$store.state.i_duration,
      i_difficult: 4,
      i_summ: true,
      i_substract: false,
      i_multiplication: true,
      i_division: false,
      i_pow: false
    }
  },
  methods: {
    changeDifficultByRange(){
        this.i_summ = false
        this.i_substract = false
        this.i_multiplication = false
        this.i_division = false
        this.i_pow = false
        if (this.i_difficult > 1){
            this.i_summ = true
        }
        if (this.i_difficult > 3){
            this.i_substract = true
        }
        if (this.i_difficult > 5){
            this.i_multiplication = true
        }
        if (this.i_difficult > 7){
            this.i_division = true
        }
        if (this.i_difficult > 9){
            this.i_pow = true
        }
    },
    changeDifficultByClick() {
        const arr1 = [this.i_summ, this.i_substract, this.i_multiplication, this.i_division, this.i_pow]
        const count = arr1.filter(Boolean).length;
        if (count == 0){
            this.i_difficult = 2
        }
        if (count > 0){
            this.i_difficult = 2
        }
        if (count > 1){
            this.i_difficult = 4
        }
        if (count > 2){
            this.i_difficult = 6
        }
        if (count > 3){
            this.i_difficult = 8
        }
        if (count > 4){
            this.i_difficult = 10
        }
    }
  }, 
  created: function(){
        this.changeDifficultByClick()
  }
}
</script>

<template>
<h2>Настройки</h2>

<p>
  <input type="range" id="i_duration" min="1" max="15" step="1" v-model="i_duration"><br>
  <label for="i_duration">Длительность {{ i_duration }} минут</label>
</p>
<p>
  <input type="range" id="i_complexity" min="2" max="10" step="2" v-model="i_difficult" v-on:change="changeDifficultByRange()"><br>
  <label for="i_complexity">Сложность {{ i_difficult }}</label>
</p>
<p>
  <input type="checkbox" id="i_summ" v-model="i_summ" v-on:change="changeDifficultByClick()" />
  <label for="i_summ">Суммирование</label>
</p>
<p>
  <input type="checkbox" id="i_substract" v-model="i_substract" v-on:change="changeDifficultByClick()" />
  <label for="i_substract">Разность</label>
</p>
<p>
  <input type="checkbox" id="i_multiplication" v-model="i_multiplication" v-on:change="changeDifficultByClick()" />
  <label for="i_multiplication">Умножение</label>
</p>
<p>
  <input type="checkbox" id="i_division" v-model="i_division" v-on:change="changeDifficultByClick()" />
  <label for="i_division">Деление</label>
</p>
<p>
  <input type="checkbox" id="i_pow" v-model="i_pow" v-on:change="changeDifficultByClick()" />
  <label for="i_pow">Возведение в степень</label>
</p>
</template>

<style scoped>

</style>
