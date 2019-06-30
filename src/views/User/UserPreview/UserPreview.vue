<template>
    <router-link :to="'/users/' + (user ? user.id : 'undefined')" style="text-decoration: none; color: black;">
        <v-layout row class="user-preview-wrapper align-top">
            <v-avatar
                    class="ma-3 pt-3"
                    color="grey lighten-4">
                <v-img :src="require('@/assets/' + (user ? user.id : 'undefined') + '.jpg')"/>
            </v-avatar>

            <v-layout column class="justify-center pt-3">
                <h1 class="headline font-weight-black mx-3">{{ user.name != null ? user.name : 'Super name!' }}</h1>
                <h2 class="subheading font-weight-normal mb-3 mx-3">{{ user.post != null ? user.post : 'Super developer' }}</h2>
                <div class="mx-3 mb-3" v-show="showAddInfo">
                    <h3><span>Rating:</span> {{ user.rating }}</h3>
                    <v-layout wrap class="mt-3">
                        <v-chip :key="index" v-for="(language, index) in user.languages">
                            {{ language }}
                        </v-chip>
                    </v-layout>
                </div>
            </v-layout>
            <v-spacer></v-spacer>

        </v-layout>
    </router-link>
</template>

<script>
    export default {
        name: "UserPreview",
        props: ['user', 'showAddInfo'],
    }
</script>

<style scoped lang="scss">
    .user-preview-wrapper {

    }
</style>
