<template>
    <div class="task">
        <div v-if="!isLoading" class="task__body"></div>
        <div v-else class="task__body">
            <v-progress-circular indeterminate color="primary"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TaskPreview",
    created() {
      this.initTask();
    },
    data: () => ({
      isLoading: true,
      tasks: null
    }),
    computed: {
      task () {
        return false;
      }
    },
    methods: {
      async initTask () {
        this.tasks = await fetch('http://10.20.2.65:8081/task/all');
        setTimeout(() => {
          this.isLoading = false;
        }, 5000);
      }
    }
  }
</script>
