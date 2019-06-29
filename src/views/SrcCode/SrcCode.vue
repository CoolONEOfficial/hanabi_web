<template>
    <codemirror v-model="task.srcCode"
                :options="{
                    tabSize: 4,
                    mode: 'text/' + task.lang,
                    lineNumbers: true,
                    line: true,
                }"></codemirror>
</template>

<script>
    export default {
        name: "SrcCode",
        props: ['task'],
        data () {
            return {
            }
        },
    }
</script>

<style scoped>

</style>
