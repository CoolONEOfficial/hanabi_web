<template>
    <div class="wrapper py-4 px-4">
        <div v-for="(task, index) in tasks" :key="index">
            <TaskPreview :task="task" class="mb-3"/>
        </div>

    </div>
</template>

<script>
  import axios from 'axios';
  import TaskPreview from '../TaskPreview/TaskPreview';

  export default {
    name: "TaskList",
    components: {
      TaskPreview
    },
    created () {
      this.loadAllTasks();
    },
    data: () => ({
      tasks: null
    }),
    methods: {
      loadAllTasks() {
        axios.get('http://10.20.2.65:8081/task/all')
        .then(({ data }) => {
          this.tasks = data;
        })
        .catch(error => {
          throw new Error(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>