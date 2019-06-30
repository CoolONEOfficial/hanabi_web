<template>
    <v-layout column>
        <v-card class="pt-1">
            <UserPreview :user="user"></UserPreview>
        </v-card>
        <SrcCode :srcCode="srcCode" readOnly>
            <ReviewAdd></ReviewAdd>
        </SrcCode>

    </v-layout>
</template>

<script>
    import SrcCode from "../SrcCode/SrcCode";
    import UserPreview from "../User/UserPreview/UserPreview";
    import ReviewAdd from "../Review/ReviewAdd/ReviewAdd";
    export default {
        props: ['srcCode', 'user'],
        name: "Solution",
        components: {
            ReviewAdd,
          UserPreview, SrcCode
        }
    }
</script>
