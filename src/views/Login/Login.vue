<template>
    <div id="content">
        <v-card id="auth-card">
            <v-layout
                    text-xs-center
                    wrap
                    fill-height
            >
                <v-flex xs12>
                    <v-img
                            :src="require('../../assets/favicon.png')"
                            class="my-3"
                            contain
                            height="160"
                    ></v-img>
                </v-flex>

                <v-flex>
                    <h1 class="display-3 mb-3">
                        Log in as...
                    </h1>
                    <v-layout row>
                        <v-avatar class="ma-3" v-for="i in Array(3).keys()" :key="i" style="cursor: pointer"
                                  @click="login(i + 1)"
                                  :size="$store.getters.USER.id
                         ===
                         i + 1 ?
                         120 : 90">
                            <v-img
                                    :src="require('../../assets/' + (i + 1) + '.jpg')"
                                    class="my-3"
                                    contain
                            ></v-img>
                        </v-avatar>
                    </v-layout>
                </v-flex>

            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            async login(id) {

                await this.$store.dispatch('LOGIN', id);
                this.$router.push('/users/' + id);
            }
        },
    }
</script>

<style lang="scss">
    #content {
        width: 100vw;
        height: 100vh;
        background-image: url('../../assets/auth_background.jpg');
        background-position: center center;
        background-size: cover;
        box-shadow: inset 0 0 0 1000px rgba(20, 54, 143, 0.9);
    }

    #auth-card {
        width: min-content;
        min-width: 400px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        padding: 20px;
    }
</style>
