<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialog" fullscreen>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>add</v-icon>
            </v-btn>
            <v-dialog
                    v-model="loading"
                    hide-overlay
                    persistent
                    width="300"
            >
                <v-card
                        color="primary"
                        dark
                >
                    <v-card-text>
                        Creating task...
                        <v-progress-linear
                                indeterminate
                                color="white"
                                class="mb-0"
                        ></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </template>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Create task</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="send">
                        <v-icon>send</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-layout class="pa-3 justify-center">
                <v-flex xs12 sm6>
                    <v-text-field
                            label="Заголовок"
                            box
                            v-model="title"
                    ></v-text-field>
                    <VueEditor v-model="html">
                    </VueEditor>
                    <h3 class="ma-3">Enter code (optional):</h3>
                    <SrcCode :src-code="{lang: lang, srcCode: srcCode}">
                        <v-select
                                class="ma-3"
                                v-model="lang"
                                :items="languages"
                                style="width: 100%"
                        ></v-select>
                    </SrcCode>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    import {VueEditor} from "vue2-editor";
    import axios from "axios";
    import SrcCode from "../../SrcCode/SrcCode";

    export default {
        components: {
            SrcCode,
            VueEditor: VueEditor
        },
        name: "TaskAdd",
        data() {
            return {
                srcCode: '// TODO: enter code here',
                lang: 'X_JAVA',
                dialog: false,
                title: "",
                html: "Task description <b>here</b>",
                loading: false,
                languages: ['X_JAVA', 'JAVASCRIPT',],
            };
        },
        methods: {
            async send() {
                this.loading = true;

                let resp = await axios.post('http://10.20.2.65:8081/task/create?id=' + this.$store.getters.USER.id,
                    {
                        description: this.html,
                        name: this.title,
                        src: {
                            srcCode: this.srcCode,
                            language: this.lang
                        },
                        difficulty: "HARD",
                        type: "PERFORMANCE",
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    },
                );

                console.log("resp: ", resp);

                this.$parent.loadAllTasks();

                this.loading = false;
                this.dialog = false;
            }
        }
    }
</script>

<style scoped>

</style>
