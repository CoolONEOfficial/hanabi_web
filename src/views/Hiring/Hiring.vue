<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-layout column class="align-center justify-center fill-height" style="min-height: calc(100vh - 124px)">
        <span class="display-4 text-xs-center mt-5 pt-5" style="max-height: 20vh">Hire by<br><b>arbitrary</b><br>
            criteria</span>
        <v-layout row style="height: min-content" class="align-center">
            <v-combobox
                    v-model="model"
                    :items="items"
                    :search-input.sync="search"
                    hide-selected
                    multiple
                    persistent-hint
                    deletable-chips chips
            >
                <template v-slot:no-data>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a
                                new one
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-combobox>
            <v-btn icon large @click="search">
                <v-icon>search</v-icon>
            </v-btn>
        </v-layout>
        <v-card v-for="(u, index) of users" :key="index" style="max-width: 33vw">
            <UserPreview :user="u"></UserPreview>
        </v-card>

    </v-layout>
</template>

<script>
    import axios from "axios";
    import UserPreview from "../User/UserPreview/UserPreview";

    export default {
        name: "Hiring",
        components: {UserPreview},
        data() {
            return {
                items: ['SQL', 'Design', 'Vue', 'Node.js', 'Python', 'Java', 'Data Science', 'Gamedev', 'Ruby',
                    'Dart', 'UE4', 'Vim', 'Brainfuck'],
                model: ['Node.js', 'Angular'],
                users: [],
            };
        },
        watch: {
            model(val) {
                if (val.length > 5) {
                    this.$nextTick(() => this.model.pop())
                }
            }
        },
        methods: {
            search() {
                axios.post('http://10.20.2.65:8081/task/suitable?id=1', {
                        filters: this.model
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    },)
                    .then(({data}) => {
                        this.users = data;
                    })
                    .catch(error => {
                        throw new Error(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
