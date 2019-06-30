<template>
    <router-link :to="'/users/' + user.id" style="text-decoration: none; color: black;">
    <v-layout row class="user-preview-wrapper align-center">
        <v-avatar
                class="ma-3"
                color="grey lighten-4">
            <v-img :src="require('@/assets/' + user.id + '.jpg')"/>
        </v-avatar>

        <v-layout column class="justify-center">
            <h1 class="headline font-weight-black mx-3">{{ user.name != null ? user.name : 'Super name!' }}</h1>
            <h2 class="subheading font-weight-normal mb-3 mx-3">{{ user.post != null ? user.post : 'Super developer' }}</h2>
        </v-layout>
        <v-spacer></v-spacer>
    </v-layout>
    </router-link>
</template>

<script>
    export default {
        name: "UserPreview",
        props: ['user'],
    }
</script>

<style scoped lang="scss">
    .user-preview-wrapper {

    }
</style>
