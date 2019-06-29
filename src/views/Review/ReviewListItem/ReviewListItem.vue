<template>
    <div class="review-list-item">
        <router-link :to="reviewItemLink">
            <v-card v-if="review" class="mb-3">
                <v-card-text>
                    <article>
                        <header class="mb-2">
                            <h2 class="font-weight-bold title">{{ review.name }}</h2>
                        </header>
                        <p class="mb-4">{{ review.description }}</p>
                        <div class="text-md-left">
                            <v-item-group multiple>
                                <v-item>
                                    <v-chip label outline>
                                        <span class="lang">{{ review.lang.toLowerCase() }}</span>
                                    </v-chip>
                                </v-item>
                                <v-item>
                                    <v-chip label outline>
                                        <span class="lang">{{ review.type.toLowerCase() }}</span>
                                    </v-chip>
                                </v-item>
                                <v-item>
                                    <v-chip label outline>
                                        <span class="lang">{{ review.difficulty.toLowerCase() }}</span>
                                    </v-chip>
                                </v-item>
                            </v-item-group>
                        </div>
                    </article>

                </v-card-text>
            </v-card>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: "ReviewListItem",
    props: {
      review: {
        type: Object,
        required: true
      }
    },
    computed: {
      reviewItemLink () {
        return `/reviews/${this.review.id}`;
      }
    }
  }
</script>

<style scoped>

</style>