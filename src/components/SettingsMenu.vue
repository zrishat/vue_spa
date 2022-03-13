<script>
export default {
  data() {
    return {
      range1: 3,
      difficult: 4,
      checkbox1: true,
      checkbox2: false,
      checkbox3: true,
      checkbox4: false,
      checkbox5: false
    }
  },
  methods: {
    changeDifficultByRange(){
        this.checkbox1 = false
        this.checkbox2 = false
        this.checkbox3 = false
        this.checkbox4 = false
        this.checkbox5 = false
        if (this.difficult > 1){
            this.checkbox1 = true
        }
        if (this.difficult > 3){
            this.checkbox2 = true
        }
        if (this.difficult > 5){
            this.checkbox3 = true
        }
        if (this.difficult > 7){
            this.checkbox4 = true
        }
        if (this.difficult > 9){
            this.checkbox5 = true
        }
    },
    changeDifficultByClick() {
        const arr1 = [this.checkbox1, this.checkbox2, this.checkbox3, this.checkbox4, this.checkbox5]
        const count = arr1.filter(Boolean).length;
        if (count == 0){
            this.difficult = 1
        }
        if (count > 0){
            this.difficult = 2
        }
        if (count > 1){
            this.difficult = 4
        }
        if (count > 2){
            this.difficult = 6
        }
        if (count > 3){
            this.difficult = 8
        }
        if (count > 4){
            this.difficult = 10
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
  <input type="range" id="range1" min="1" max="15" step="1" v-model="range1"><br>
  <label for="range1">Длительность {{ range1 }} минут</label>
</p>
<p>
  <input type="range" id="range2" min="1" max="10" step="1" v-model="difficult" v-on:change="changeDifficultByRange()"><br>
  <label for="range2">Сложность {{ difficult }}</label>
</p>
<p>
  <input type="checkbox" id="checkbox1" v-model="checkbox1" v-on:change="changeDifficultByClick()" />
  <label for="checkbox1">Суммирование</label>
</p>
<p>
  <input type="checkbox" id="checkbox2" v-model="checkbox2" v-on:change="changeDifficultByClick()" />
  <label for="checkbox2">Разность</label>
</p>
<p>
  <input type="checkbox" id="checkbox3" v-model="checkbox3" v-on:change="changeDifficultByClick()" />
  <label for="checkbox3">Умножение</label>
</p>
<p>
  <input type="checkbox" id="checkbox4" v-model="checkbox4" v-on:change="changeDifficultByClick()" />
  <label for="checkbox4">Деление</label>
</p>
<p>
  <input type="checkbox" id="checkbox5" v-model="checkbox5" v-on:change="changeDifficultByClick()" />
  <label for="checkbox5">Возведение в степень</label>
</p>
</template>

<style scoped>

</style>
