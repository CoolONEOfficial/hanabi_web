<template>
    <v-container>
        <v-dialog
                v-model="sending"
                hide-overlay
                persistent
                width="300"
        >
            <v-card
                    color="primary"
                    dark
            >
                <v-card-text>
                    Sending solution...
                    <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-layout column class="pa-3">
            <div class="headline mb-3">{{ task.name }}</div>
            <span v-html="task.description" class="mb-3"></span>
            <SrcCode :src-code="task.src">
                <v-toolbar dense>
                    <v-toolbar-title>{{ task.src.language != null ? task.src.language.replace('X_', '') : '' }}</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <span style="font-size: 15pt" class="mr-3">Send your own solution</span>

                    <v-btn icon @click="solve">
                        <v-icon>send</v-icon>
                    </v-btn>
                </v-toolbar>
            </SrcCode>
            <v-divider class="my-3 mt-5"></v-divider>
            <span class="display-1">Other solutions:</span>
            <div v-if="task.solutions && task.solutions.length">
                <Solution :key="index" v-for="(s, index) in task.solutions"
                          :srcCode="s.src"></Solution>
            </div>
            <span v-else class="text-xs-center ma-3 display-2"><small>No solutions..</small><br><b>Be first!</b></span>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";
    import SrcCode from "../SrcCode/SrcCode";
    import Solution from "../Solution/Solution";

    export default {
        name: "Task",
        components: {Solution, SrcCode},
        data() {
            return {
                sending: false,
                task: {
                    name: 'Loading...',
                    src: {
                        srcCode: '',
                        language: 'text',
                    },
                    description: 'Loading...',
                },
            }
        },
        mounted() {
            this.loadTask();
        },
        methods: {
            loadTask() {
                axios.get('http://10.20.2.65:8081/task/get?id=' + this.$route.params.id)
                    .then(resp => this.task = resp.data)
                    .catch(err => console.log(err));
            },
            async solve() {
                this.sending = true;

                let resp = await axios.post('http://10.20.2.65:8081/task/solve?userId=1&taskId=' + this.$route.params.id,
                    {
                        rating: this.rating,
                        src: this.task.src,
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    },
                );

                console.log("resp: ", resp);

                this.loadTask();

                this.sending = false;
            }
        }
    }
</script>

<style scoped>

</style>
