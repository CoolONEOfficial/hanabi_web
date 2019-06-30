<template>
    <v-layout column>
        <span class="display-1">{{ review.title }}</span>
        <span v-html="review.description"></span>
        <v-divider></v-divider>
        <UserPreview :user="review.user"></UserPreview>
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
