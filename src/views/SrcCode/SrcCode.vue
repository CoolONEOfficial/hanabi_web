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
        ></codemirror>
    </v-card>
</template>

<script>
    export default {
        name: "SrcCode",
        props: {
            srcCode: {
                type: Object,
                default: () => {
                }
            },
            readOnly: {
                type: Boolean,
                default: false
            }
        },
    }
</script>
