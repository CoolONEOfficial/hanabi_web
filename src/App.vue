<template>
    <div id="app">
        <div v-if="['login'].indexOf($route.name) <= -1">
            <v-navigation-drawer v-model="open" absolute
                                 temporary>
                <v-list>
                    <v-avatar
                            class="ma-3"
                            color="grey lighten-4"
                    >
                        <v-img :src="require('@/assets/useravatar.jpg')"/>
                    </v-avatar>
                    <h1 class="headline font-weight-black mx-3">{{ $store.getters.USER.name }}</h1>
                    <h2 class="subheading font-weight-normal mb-3 mx-3">{{ $store.getters.USER.post }}</h2>
                    <v-divider class="mb-2"></v-divider>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>list</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Tasks</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Leaderboard</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar fixed>
                <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
                <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn @click="logout" flat to="/login">Logout</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <div id="background">
                <v-container id="container">
                    <v-layout row wrap>
                        <v-flex xs10 offset-xs1>
                            <v-card id="content-wrapper" style="width: 100%;">
                                <router-view/>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>

            </div>
        </div>
        <router-view v-else/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    #background {
        width: 100%;
        height: calc(100vh - 64px);
        background-image: url('assets/auth_background.jpg');
        background-position: center center;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(20, 54, 143, 0.9);
    }

    #container {
        margin-top: 64px;
    }

    #content-wrapper {
        width: min-content;
    }
</style>

<script>
    export default {
        name: 'App',
        data() {
            return {
                open: false,
            };
        },
        methods: {
            toggleDrawer() {
                this.open = !this.open;
            },
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login')
                    })
            },
        },
    }
</script>
