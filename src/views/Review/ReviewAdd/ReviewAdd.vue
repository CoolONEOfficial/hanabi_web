<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialog" fullscreen>
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>rate_review</v-icon>
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
                        Adding review...
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
                <v-toolbar-title>Add review</v-toolbar-title>
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
                    <v-rating v-model="rating"></v-rating>
                    <VueEditor v-model="html">
                    </VueEditor>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    import {VueEditor} from "vue2-editor";
    import axios from "axios";

    export default {
        props: ['solutionId'],
        name: "ReviewAdd",
        components: {VueEditor},
        data() {
            return {
                dialog: false,
                title: "",
                html: "Write review there..",
                loading: false,
              rating: 0
            };
        },
        methods: {
            async send() {
                this.loading = true;

                let resp = await axios.post('http://10.20.2.65:8081/solution/review?userId=1&solutionId=' + this.solutionId,
                    {
                        description: this.html,
                        title: this.title,
                        rating: this.rating,
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    },
                );

                console.log("resp: ", resp);

                this.$parent.$parent.$parent.$parent.$parent.loadTask();

                this.loading = false;
                this.dialog = false;
            }
        },
        mounted() {
            console.log('sol id: ' + this.solutionId);
        }
    }
</script>

<style scoped>

</style>
