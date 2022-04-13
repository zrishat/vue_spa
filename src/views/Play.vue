<template>
  <button @click="goBack">Отмена</button>
  <p>Время до конца раунда {{timeLeft}}</p>


      <!-- <div no-gutters v-bind:class="d-none">
        <div>
        {{ (currentTask === null ? '' : currentTask.question) }}
        </div>
      </div> -->
      <div no-gutters v-if="exercise !== null">
          <span v-for="chunk in exercise" :key="chunk.index">
            <span v-if="chunk.known">
              {{ chunk.operand }}</span> 
            <span v-else>
              <input 
                v-model.number="chunk.answer" 
                :data-index="chunk.index"
                @focus="focusAnswer"
                size="2" 
                placeholder="?"
                class="answer" />
            </span>
            <span v-if="chunk.followingOperator !== null">
              {{ chunk.followingOperator }}
            </span>
          </span>
          <span>
           = {{ (currentTask === null ? '' : currentTask.answer) }}?
          </span>
        </div>


<table>
        <tr>
          <td v-for="num in [1, 2, 3]" :key="num">
            <button class="error" @click="clickNum($event, num)">{{ num }}</button>
          </td>
          <td>
            <button class="normal" @click="moveFocus($event, -1)">&lt;</button>
          </td>
        </tr>
        <tr>
          <td v-for="num in [4, 5, 6]" :key="num">
            <button class="error" @click="clickNum($event, num)">{{ num }}</button>
          </td>
          <td>
            <button class="normal" @click="moveFocus($event, +1)">></button>
          </td>
        </tr>
        <tr>
          <td v-for="num in [7, 8, 9]" :key="num">
            <button class="error" @click="clickNum($event, num)">{{ num }}</button>
          </td>
          <td><button class="normal" @click="nextTask">?</button></td>
        </tr>
        <tr>
          <td></td>
          <td v-for="num in [0]" :key="num">
            <button class="error" @click="clickNum($event, num)">{{ num }}</button>
          </td>
          <td></td>
          <td><button class="normal" @click="answer">=</button></td>
        </tr>
      </table>

</template>

<script>
import * as OperationsMath from '../utils/math.js';
import * as Utils from '../utils/utils.js';

  export default {
    name: 'Game',
    created: function() {
      const t = this;
      console.log("t.$store.state.settings.duration",t.$store.state.settings.duration);
      const timeout = parseInt(t.$store.state.settings.duration) * 60 * 1000;
      console.log("timeout", timeout)
      setTimeout(function() {
        t.goBack();
      }, timeout);
      setInterval(function() {
        t.now = Date.now();
      }, 1000);
      t.nextTask();
    },
    props: {
      settings: Object,
    },
    data(){
      const dt = new Date();
      dt.setMinutes(dt.getMinutes() + this.$store.state.settings.duration);
      return {
        roundTime: this.$store.state.settings.duration,
        now: Date.now(),
        endTime: dt,
        currentTask: null,
        exercise: null,
        focusedAnswer: null,
        total: 0,
        solved: 0,
      }
    },
    computed: {
      timeLeft: function() {
        console.log("endTime", this.endTime)
        console.log("now", this.now)
        const totalSeconds = Math.floor((this.endTime - this.now) / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return minutes + ':' + (seconds >= 10 ? seconds : '0' + seconds);
      }
    },
    methods: {
      goBack() {
        clearInterval(this.timer);
        this.$router.push('/')
      },
      nextTask() {
        this.currentTask = OperationsMath.inventTask(
          this.$store.state.settings.operations,
          this.$store.state.settings.difficulty
        );
        const exercise = [];
        for (let i = 0; i < this.currentTask.operands.length; i++) {
          exercise.push({
            index: i,
            operand: this.currentTask.operands[i],
            followingOperator: (i + 1 < this.currentTask.operands.length)
              ? this.currentTask.operators[i]
              : null,
            known: null,
            answer: '',
          });
        }
        const knownState = OperationsMath.getKnownIndices(exercise.length)
        this.focusedAnswer = null;
        for (let i = 0; i < exercise.length; i++) {
          exercise[i].known = knownState[i];
          if (this.focusedAnswer === null && !exercise[i].known)
            this.focusedAnswer = i;
        }
        this.exercise = exercise;
        this.total++;
      },
      focusAnswer(evt) {
        this.focusedAnswer = evt.target.getAttribute('data-index');
      },
      moveFocus(evt, direction) {
        this.focusedAnswer = Utils.slideTo(
          this.exercise,
          this.focusedAnswer,
          direction,
          chunk => !chunk.known
        );
      },
      clickNum(evt, num) {
        this.exercise[this.focusedAnswer].answer += '' + num;
      },
      answer() {
        let success = true;
        const toSolve = this.exercise.filter(chunk => !chunk.known);
        for (let i = 0; i < toSolve.length && success; i++) {
          if (parseInt(toSolve[i].answer) !== toSolve[i].operand)
            success = false;
        }
        if (success) {
          this.solved++;
        }
        this.nextTask();
      },
    },
    mounted() {
      // this.currentTime = this.roundTime;
    }
  }
</script>
<style>
.error, .normal{
  background-color: tomato;
  width: 80px;
  padding: 20px;
  border-radius: 40px;
  font-size: 30px;
}
.normal{
  background-color: aquamarine;
}
</style>