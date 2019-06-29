<template>
    <v-card>
        <slot></slot>
        <codemirror v-model="srcCode.srcCode"
                    :options="{
                    tabSize: 4,
                    mode: 'text/' + srcCode.lang,
                    lineNumbers: true,
                    line: true,

                }"
                    @input="onCodeChange"></codemirror>
    </v-card>
</template>

<script>
    export default {
        name: "SrcCode",
        props: ['srcCode'],
        data() {
            return {}
        },
        methods: {
            onCodeChange() {
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
