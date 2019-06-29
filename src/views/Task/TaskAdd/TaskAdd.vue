<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialog" fullscreen>
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
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
                    <SrcCode :src-code="{lang: lang, srcCode: srcCode}" class="pt-3">
                        <h3 class="ma-3">Enter code (optional):</h3>
                        <v-select
                                class="ma-3"
                                v-model="lang"
                                :items="languages"
                                label="Choose language"
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
        props: ["taskId"],
        components: {
            SrcCode,
            VueEditor: VueEditor
        },
        name: "TaskAdd",
        data() {
            return {
                srcCode: '// TODO: enter code here',
                lang: null,
                dialog: false,
                title: "",
                html: "Task description <b>here</b>",
                loading: false,
                languages: ['X-JAVA', 'JAVASCRIPT',],
            };
        },
        methods: {
            async send() {
                this.loading = true;

                let resp = await axios.post('http://10.20.2.65:8081/task/create',
                    {
                        taskId: this.taskId,
                        creatorId: 1,
                        description: this.html,
                        lang: this.lang,
                        name: this.title,
                        srcCode: this.srcCode,
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    },
                );

                console.log("resp: ", resp);

                this.$parent.reload();

                this.loading = false;
                this.dialog = false;
            }
        }
    }
</script>

<style scoped>

</style>
