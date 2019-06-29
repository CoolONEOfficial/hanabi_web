<template>
    <div class="wrapper pt-4 pl-4 pr-4 pb-4">
        <h1 class="font-weight-black mb-2">{{ review.name }}</h1>
        <p>{{ review.description }}</p>

        <v-expansion-panel class="mb-3">
            <v-expansion-panel-content>

                <template v-slot:header>
                    <h3 class="mb-0">Source</h3>
                </template>

                <v-card>
                    <v-card-text>
                        <code class="d-block py-3 px-3">{{ review.srcCode }}</code>
                    </v-card-text>
                </v-card>

            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel v-model="panel" expand>
            <v-expansion-panel-content>

                <template v-slot:header>
                    <h3 class="mb-0">Solution</h3>
                </template>

                <v-card>
                    <v-card-text>
                        <SrcCode :task="review" :readOnly="true"></SrcCode>
                    </v-card-text>
                </v-card>

            </v-expansion-panel-content>
        </v-expansion-panel>

    </div>
</template>

<script>
  import axios from 'axios';
  import SrcCode from "../../SrcCode/SrcCode";

  export default {
    name: "ReviewItem",
    components: {
      SrcCode,
    },
    created () {
      this.loadReviewItemData();
    },
    data: () => ({
      review: {},
      panel: [ true ]
    }),
    computed: {
      reviewId() {
        return this.$route.params.id;
      }
    },
    methods: {
      loadReviewItemData() {
        const request = `http://10.20.2.65:8081/task/get?id=${this.reviewId}`;
        axios.get(request)
        .then(({ data }) => {
          this.review = data;
        })
        .catch(error => {
          throw new Error(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>