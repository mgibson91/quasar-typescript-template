<template>
  <div id="container-root">
    <q-select id="select-task" v-model="selectedTask" :options="adjustedTasks"></q-select>
    <q-icon class="relative-position"
            v-ripple
            :name="isActive ? 'stop' : 'play_arrow'"
            color="primary"
            @click.native ="toggleActiveState"
            size="10em">
    </q-icon>
    <p id="progress-summary">{{goalProgressString}}</p>
    <q-progress :percentage="Number(taskProgressPercentage)" stripe :animate="true"/>
  </div>
</template>

<script lang="ts">

  import { State } from 'vuex-class';

  function doRecurringTask(func: Function, intervalMillis: number) {
    const shouldContinue = func();
    if (shouldContinue) {
      setTimeout(() => {
        doRecurringTask(func, intervalMillis)
      }, intervalMillis);
    }
  }

  import { QSelect, QIcon, QProgress } from 'quasar';
  import { Component, Vue, Watch } from 'vue-property-decorator';

  @Component({
    components: {
      QSelect,
      QIcon,
      QProgress,
    },
  })
  export default class Home extends Vue {
    @State('tasks', { namespace: 'general'}) tasks;

    @Watch('tasks', { immediate: true })
    tasksUpdated() {
      this.adjustedTasks = this.tasks.map(task => ({ label: task.name, value: task.name }));
    }

    adjustedTasks: { label: string, value: string }[] = [];

    // Test Data


    goalSeconds: number = 10;
    elapsedSeconds: number = 0;

    // Data
    selectedTask: string = '';
    isActive: boolean = false;

    // @Watch()

    // Computed
    get taskProgressPercentage() {
      return this.elapsedSeconds > 0 ? Number(this.elapsedSeconds / this.goalSeconds * 100).toFixed(1) : 0;
    }

    get goalProgressString() {
      return `${this.taskProgressPercentage}%`;
    }

    // Methods
    startTimer() {
      this.isActive = true;

      // Start timer visually
      doRecurringTask(function() {
        if (!this.isActive) {
          return false;
        }
        this.elapsedSeconds = this.elapsedSeconds + 1;
        return true;
      }.bind(this), 1000)
      // Update database status
    }

    stopTimer() {
      this.isActive = false;
      // Stop timer visually
      // Update database status
      // Optionally add note
    }

    toggleActiveState() {
      if (this.isActive) {
        console.log('Deactivating');
        this.stopTimer();
      }
      else {
        console.log('Activating');
        this.startTimer();
      }
    }
  };
</script>

<style scoped lang="stylus">
  #container-root
    display flex
    flex-direction column
    padding 20px

  #progress-summary
    text-align right
</style>
