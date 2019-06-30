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
            <v-card class="px-3 pt-2">
                <UserPreview :user="task.creator"></UserPreview>
                <v-divider class="mb-3"></v-divider>
                <div class="headline my-3">{{ task.name }}</div>
                <v-divider class="mb-3"></v-divider>
                <span v-html="task.description"></span>
                <v-divider class="mt-3"></v-divider>
            </v-card>
            <SrcCode :src-code="task.src" class="mt-3">
                <span style="font-size: 15pt" class="mr-3">Send your own solution</span>

                <v-btn icon @click="solve">
                    <v-icon>send</v-icon>
                </v-btn>
            </SrcCode>

            <span class="display-1 mt-5">Community solutions:</span>
            <v-divider class="my-3"></v-divider>
            <div v-if="task.solutions && task.solutions.length">
                <Solution :key="index" v-for="(s, index) in task.solutions"
                          :srcCode="s.src"
                          :user="s.user"
                          :solution-id="s.id"
                          :reviews="s.solutionReviews"
                          class="mb-3">
                </Solution>
            </div>
            <span v-else class="text-xs-center ma-3 display-2"><small>No solutions..</small><br><b>Be first!</b></span>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";
    import SrcCode from "../SrcCode/SrcCode";
    import Solution from "../Solution/Solution";
    import UserPreview from "../User/UserPreview/UserPreview";

    export default {
        name: "Task",
        components: {UserPreview, Solution, SrcCode},
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
                    creator: {}
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
