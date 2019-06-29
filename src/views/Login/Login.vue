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

                <v-flex mb-4>
                    <h1 class="display-3 mb-3">
                        Login
                    </h1>
                    <v-form>
                        <v-text-field
                                prepend-icon="face"
                                type="text"
                        >
                        </v-text-field>
                        <v-text-field
                                prepend-icon="lock"
                                type="password"
                        >
                        </v-text-field>
                    </v-form>
                    <br>
                    <v-btn color="primary" style="background: rgb(20, 54, 143)" large to="/users/1">Enter</v-btn>
                </v-flex>

            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Login"
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
