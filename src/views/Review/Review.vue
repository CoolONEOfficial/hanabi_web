<template>
    <v-layout column>
        <UserPreview :user="review.user"></UserPreview>
        <v-divider class="my-3"></v-divider>
        <span class="display-1">{{ review.title }}</span>
        <v-divider class="my-3"></v-divider>
        <span class="mt-2" v-html="review.description"></span>
    </v-layout>
</template>

<script>
    import UserPreview from "../User/UserPreview/UserPreview";
    export default {
        name: "Review",
        components: {UserPreview},
        props: ['review'],
    }
</script>

<style scoped>

</style>
