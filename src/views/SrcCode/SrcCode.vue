<template>
    <v-card style="width: 100%;" class="mt-3">
        <slot></slot>
        <codemirror v-model="srcCode.srcCode"
                    :options="{
                    tabSize: 4,
                    mode: 'text/' + srcCode != null && srcCode.language != null ? srcCode.language.replace('_', '-') :
                    'text',
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
