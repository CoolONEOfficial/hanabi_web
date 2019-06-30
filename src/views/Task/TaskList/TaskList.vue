<template>
    <div class="wrapper py-4 px-4">
        <v-layout>
            <h1 class="font-weight-black display-2">{{ $route.name }}</h1>
            <v-spacer></v-spacer>
            <TaskAdd></TaskAdd>
        </v-layout>
        <div v-if="tasks">
            <div class="my-3">
                <v-alert :value="true"
                         color="#2196F3"
                         icon="info"
                         outline>
                    Founded: {{ tasks.length }}
                </v-alert>
            </div>
            <div v-for="(task, index) in tasks" :key="index">
                <TaskPreview :task="task" class="mb-3"/>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import TaskPreview from '../TaskPreview/TaskPreview';
  import TaskAdd from "../TaskAdd/TaskAdd";

  export default {
    name: "TaskList",
    components: {
        TaskAdd,
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
