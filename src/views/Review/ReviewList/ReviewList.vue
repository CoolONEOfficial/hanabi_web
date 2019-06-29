<template>
    <div class="wrapper pt-4 pl-4 pr-4 pb-4">
        <v-layout row wrap>

            <v-flex md12 class="mb-3">
                <h1 class="page-title font-weight-black mb-1">{{ $route.name }}</h1>
                <p>In this section you can find free tasks waiting for you professional review.</p>
            </v-flex>

            <v-flex md12 v-for="(review, reviewIndex) in reviews" :key="reviewIndex">
                <ReviewListItem :review="review" />
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
  import axios from 'axios';
  import ReviewListItem from '../ReviewListItem/ReviewListItem';

  export default {
    name: "ReviewList",
    components: {
      ReviewListItem
    },
    created () {
      this.loadReviewedTask();
    },
    data: () => ({
      reviews: null
    }),
    methods: {
      loadReviewedTask() {
        axios.get('http://10.20.2.65:8081/task/all')
        .then(response => {
          this.reviews = response.data || [];
        })
        .catch(error => {
          throw new Error(error);
        });
      }
    }
  }
</script>
