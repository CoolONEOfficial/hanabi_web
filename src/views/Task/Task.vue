<template>
    <v-container>
        <v-layout column class="pa-3">
            <div class="headline">{{ title != null ? title : 'Loading...' }}</div>
            <span v-html="html"></span>
            <codemirror v-model="code" :options="cmOptions"></codemirror>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Task",
        data () {
            return {
                code: null,
                title: null,
                html: null,
                cmOptions: {
                    // codemirror options
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'base16-dark',
                    lineNumbers: true,
                    line: true,
                },
            }
        }
    }
</script>

<style scoped>

</style>
