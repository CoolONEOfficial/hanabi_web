<template>
    <v-card style="width: 100%;">
        <v-toolbar dense class="elevation-0">
            <v-toolbar-title class="grey--text">{{ srcCode.language != null ? srcCode.language.replace('X_',
                '') : '' }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <slot></slot>
        </v-toolbar>

        <codemirror v-model="srcCode.srcCode"
                    :options="{
                    tabSize: 4,
                    mode: 'text/' + (this.srcCode != null && this.srcCode.language != null ?
                        this.srcCode.language.replace('_', '-').toLowerCase() :
                        'javascript'),
                    lineNumbers: true,
                    line: true,
                    readOnly: this.readOnly,
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
        mounted() {
            console.log(this.srcCode.language.replace('_', '-').toLowerCase());
        }
    }
</script>
