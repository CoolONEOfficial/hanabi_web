<template>
    <v-layout column>
        <SrcCode :srcCode="srcCode">
            <UserPreview :user="user"></UserPreview>
        </SrcCode>
    </v-layout>
</template>

<script>
    import SrcCode from "../SrcCode/SrcCode";
    import UserPreview from "../User/UserPreview/UserPreview";
    export default {
        props: ['srcCode', 'user'],
        name: "Solution",
        components: {UserPreview, SrcCode}
    }
</script>
