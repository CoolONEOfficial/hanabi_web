<template>
  <v-card id="auth-card">
    <v-layout
      text-xs-center
      wrap
      fill-height
      style="min-width: 400px"
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-3 mb-3">
          Login
        </h1>
        <v-form>
          <v-text-field
                  prepend-icon="face"
                  type="text"
                  @click:prepend="prependClicked"
                  color="white"
                  @click:append-outer="appendClicked"
                  counter="10"
          >
          </v-text-field>
          <v-text-field
                  prepend-icon="lock"
                  type="password"
                  @click:prepend="prependClicked"
                  color="white"
                  @click:append-outer="appendClicked"
          >
          </v-text-field>
        </v-form>
        <br>
        <v-btn color="primary" large>Enter</v-btn>
      </v-flex>

    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style lang="scss">
  #auth-card {
    width: min-content;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 20px;
  }
</style>
