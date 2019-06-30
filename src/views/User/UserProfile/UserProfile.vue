<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="wrapper">

        <v-container grid-list-md>
            <v-layout column class="text-xs-center">

                <div v-if="user" class="my-3">
                    <v-avatar :size="'128px'"
                              color="grey lighten-4 mb-3">
                        <v-img :src="require('@/assets/useravatar.jpg')"/>
                    </v-avatar>
                    <h1 class="headline font-weight-black">{{ user.name }}</h1>
                    <h2 class="subheading font-weight-normal mb-3">{{ user.post }}</h2>
                    <h3><span>Rating:</span> {{ user.rating }}</h3>
                    <v-layout wrap class="mt-3 justify-center">
                        <v-chip :key="index" v-for="(language, index) in user.languages">
                            {{ language }}
                        </v-chip>
                    </v-layout>
                </div>

                <v-expansion-panel v-if="tasks" class="mb-4">
                    <v-expansion-panel-content>
                        <template v-slot:header>
                            <h3>Created Tasks</h3>
                        </template>

                        <v-card v-for="(task, index) in tasks" :key="index">
                            <v-card-text>
                                <TaskPreview :task="task"/>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel v-if="solutions">
                    <v-expansion-panel-content>
                        <template v-slot:header>
                            <h3>Solutions</h3>
                        </template>
                        <v-card v-for="(solution, index) in solutions" :key="index">
                            <v-card-text>
                                <TaskPreview :task="solution"/>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
  import axios from "axios";
  import TaskPreview from '../../Task/TaskPreview/TaskPreview';

  export default {
    name: "UserProfile",
    components: {
      TaskPreview
    },
    created() {
      this.initTasks();
      this.getSolvedTasks();
    },
    data: () => ({
      solutions: null,
      tasks: null,
      user: {
        id: 1,
        languages: [
          'PHP',
          'JavaScript',
          'NodeJS',
          'TypeScript',
        ],
        name: 'Sokolov Alexander',
        post: 'Frontend developer',
        rating: 4.6
      }
    }),
    methods: {
      initTasks() {
        axios.get(`http://10.20.2.65:8081/task/created?id=${this.$route.params.id}`)
        .then(({data}) => {
          this.tasks = data || [];
        })
        .catch((error) => {
          throw new Error(error);
        });
      },
      getSolvedTasks() {
        axios.get(`http://10.20.2.65:8081/task/solved?id=${this.$route.params.id}`)
        .then(({data}) => {
          this.solutions = data || [];
        })
        .catch((error) => {
          throw new Error(error);
        });
      }
    }
  }
</script>
