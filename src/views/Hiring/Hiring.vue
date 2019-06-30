<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>

        <v-layout row class="align-center justify-center fill-height">
            <v-flex class="py-5">
                <span class="display-4 text-xs-center mt-5 pt-5">
                    Hire by<br/>
                    <strong>arbitrary</strong>
                    <br/>
                    criteria
                </span>
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-flex class="py-3">
                <v-select v-model="selectedTags"
                          :items="items"
                          item-text="tag"
                          item-value="{ tag, rating }"
                          return-object
                          chips
                          multiple />
            </v-flex>
        </v-layout>

        <v-layout row>
            <v-layout>
                <v-flex md12>
                    <v-card  v-for="(m, index) in selectedTags" :key="index" class="mb-3">
                        <div class="px-4 py-4">
                            <h2>{{ m.tag }} ({{ m.rating }})</h2>
                            <v-slider v-model="m.rating" class="mb-0 fluid" max="10" step="0.1" />
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-card v-for="(u, index) of users" :key="index" style="max-width: 33vw">
                <UserPreview :user="u"></UserPreview>
            </v-card>

        </v-layout>
    </v-container>
</template>

<script>
  import axios from "axios";
  import UserPreview from "../User/UserPreview/UserPreview";

  export default {
    name: "Hiring",
    components: {UserPreview},
    data() {
      return {
        items: [
          {
            tag: 'SQL',
            rating: 0
          },
          {
            tag: 'Design',
            rating: 0
          },
          {
            tag: 'Vue',
            rating: 0
          },
          {
            tag: 'Node.js',
            rating: 0
          },
          {
            tag: 'Python',
            rating: 0
          },
          {
            tag: 'Java',
            rating: 0
          },
          {
            tag: 'Data Science',
            rating: 0
          },
          {
            tag: 'Gamedev',
            rating: 0
          },
          {
            tag: 'Ruby',
            rating: 0
          },
          {
            tag: 'Dart',
            rating: 0
          },
          {
            tag: 'UE4',
            rating: 0
          },
          {
            tag: 'Vim',
            rating: 0
          },
          {
            tag: 'Brainfuck',
            rating: 0
          },
        ],
        selectedTags: [{
          tag: 'Brainfuck',
          rating: 0
        }],
        users: [],
      };
    },
    methods: {
      search() {
        axios.post('http://10.20.2.65:8081/task/suitable?id=1', {
            filters: this.selectedTags
          },
          {
            'Access-Control-Allow-Origin': '*',
          },)
        .then(({data}) => {
          this.users = data;
        })
        .catch(error => {
          throw new Error(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>
