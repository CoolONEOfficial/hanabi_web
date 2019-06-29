<template>
    <div class="task">
        <div v-if="!isLoading" class="task__body">
            <router-link :to="`/tasks/${task[0].id}`">
                <v-card>
                    <v-card-title primary-title>
                        <div class="body-2 font-weight-bold mb-1">{{ task[0].name }}</div>
                        <div class="body-1 mb-3">{{ task[0].description }}</div>
                        <v-item-group multiple>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task[0].lang.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task[0].type.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                            <v-item>
                                <v-chip label>
                                    <span class="lang">{{ task[0].difficulty.toLowerCase() }}</span>
                                </v-chip>
                            </v-item>
                        </v-item-group>
                    </v-card-title>

                </v-card>
            </router-link>
        </div>
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
        //TODO fix
        return this.tasks.filter(task => task.creatorId === 1);
      }
    },
    methods: {
      async initTask () {
        const response = await fetch('http://10.20.2.65:8081/task/all');
        this.tasks = await response.json();
        this.isLoading = false;
      }
    }
  }
</script>

<style>
    .lang {
        text-transform: capitalize;
    }
</style>
