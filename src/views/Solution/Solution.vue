<template>
    <v-layout column>
        <v-card class="py-2 px-3">
            <UserPreview :user="user"></UserPreview>
            <v-rating v-model="rating" readonly small />
        </v-card>

        <SrcCode :srcCode="srcCode" readOnly>
            <v-rating v-model="rating" readonly></v-rating>
            <ReviewAdd :solution-id="solutionId"></ReviewAdd>
        </SrcCode>
        <v-layout column v-if="reviews && reviews.length" class="ml-3">
            <span class="display-1 ma-3">Reviews:</span>
            <v-card v-for="(r, index) of reviews" :key="index" class="pa-3">
                <Review :review="r"></Review>
                <v-rating v-model="r.rating" readonly small></v-rating>
            </v-card>
        </v-layout>
        <v-layout v-else class="align-center justify-center">
            <span class="display-1 ma-3">No reviews</span>
        </v-layout>
    </v-layout>
</template>

<script>
    import SrcCode from "../SrcCode/SrcCode";
    import UserPreview from "../User/UserPreview/UserPreview";
    import ReviewAdd from "../Review/ReviewAdd/ReviewAdd";
    import Review from "../Review/Review";

    export default {
        props: ['srcCode', 'user', 'solutionId', 'rating', 'reviews'],
        name: "Solution",
        components: {
            Review,
            ReviewAdd,
            UserPreview, SrcCode
        },
    }
</script>
