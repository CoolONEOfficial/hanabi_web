<template>
    <div class="wrapper py-4 px-4">
        <h1 class="font-weight-black display-2">{{ $route.name }}</h1>
        <div v-if="reviews">
            <div class="my-3">
                <v-alert :value="true"
                         color="#2196F3"
                         icon="info"
                         outline>
                    Founded: {{ reviews.length }}
                </v-alert>
            </div>

            <div v-for="(review, index) in reviews" :key="index">
                <TaskPreview :task="review" class="mb-3"/>
            </div>
        </div>
        <div v-else class="py-5 px-1">
            <div class="text-xs-center">
            <v-progress-circular
                    :width="3"
                    color="primary"
                    indeterminate />
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import TaskPreview from '../../Task/TaskPreview/TaskPreview';

  export default {
    name: "ReviewList",
    components: {
      TaskPreview
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
