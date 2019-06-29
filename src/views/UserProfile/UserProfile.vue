<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="wrapper">
        <v-container grid-list-md>
            <v-layout row wrap>

                <v-flex md4>
                    <div v-if="user">
                        <v-avatar :size="'128px'"
                                  color="grey lighten-4 mb-3">
                            <img src="../../assets/useravatar.jpg" alt="" style="max-width: 100%; height: auto"/>
                        </v-avatar>
                        <h1 class="headline font-weight-black">{{ user.name }}</h1>
                        <h2 class="subheading font-weight-normal mb-3">{{ user.post }}</h2>
                        <h3><span>Rating:</span> {{ user.rating }}</h3>
                        <v-layout wrap class="align-content-space-between mt-3">
                            <v-chip :key="index" v-for="(language, index) in user.languages">
                                {{ language }}
                            </v-chip>
                        </v-layout>

                    </div>
                </v-flex>

                <v-flex md8>

                    <v-expansion-panel>
                        <v-expansion-panel-content v-for="(panel, index) in panelItems"
                                                   :key="index">
                            <template v-slot:header>
                                <h3>{{ panel.name }}</h3>
                            </template>

                            <v-card>
                                <v-card-text>
                                    <TaskPreview/>
                                </v-card-text>
                            </v-card>

                        </v-expansion-panel-content>
                    </v-expansion-panel>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TaskPreview from '../Task/TaskPreview';

    export default {
        name: "UserProfile",
        components: {
            TaskPreview
        },
        created() {
            this.user = this.$store.getters.USER;
            this.panelItems = [
                {
                    name: 'My tasks',
                    expand: false
                }
            ];
        },
        data: () => ({
            user: null,
        }),
    }
</script>
