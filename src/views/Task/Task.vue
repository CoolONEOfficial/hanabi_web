<template>
    <v-container>
        <v-layout column class="pa-3">
            <div class="headline mb-3">{{ task.name }}</div>
            <span v-html="task.description" class="mb-3"></span>
            <v-divider class="my-3 mt-5"></v-divider>
            <SrcCode :src-code="task.srcCode">
                <v-toolbar dense>
                    <v-toolbar-title>{{ task.language.toLowerCase() }}</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <span style="font-size: 15pt" class="mr-3">Send your own solution</span>

                    <v-btn icon>
                        <v-icon>send</v-icon>
                    </v-btn>
                </v-toolbar>
            </SrcCode>
            <v-divider class="my-3 mt-5"></v-divider>
            <span class="display-1">Other solutions:</span>
            <Solution :key="index" v-for="(s, index) in task.solutions" :srcCode="task.srcCode"></Solution>
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
        data () {
            return {
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
            axios.get('http://10.20.2.65:8081/task/get?id=' + this.$route.params.id)
                .then(resp => this.task = resp.data)
                .catch(err => console.log(err));
        },
    }
</script>

<style scoped>

</style>
