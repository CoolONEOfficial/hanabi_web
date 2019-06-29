<template>
    <v-container>
        <v-layout column class="pa-3">
            <div class="headline mb-3">{{ task.name }}</div>
            <span v-html="task.description" class="mb-3"></span>
            <SrcCode :task="task"></SrcCode>
            <v-divider class="my-3 mt-5"></v-divider>
            <span class="display-2">Best solutions</span>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";
    import SrcCode from "../SrcCode/SrcCode";

    export default {
        name: "Task",
        components: {SrcCode},
        data () {
            return {
                task: {
                    name: 'Loading...',
                    srcCode: 'Loading...',
                    lang: 'text',
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
