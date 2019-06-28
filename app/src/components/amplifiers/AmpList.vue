<template>
  <div>
    <!-- Amplifier List -->
    <h3>Your Amplifiers:</h3>
    <v-layout row wrap>
      <!-- Amplifier -->
      <v-flex v-for="n in 4" :key="n" xs6 md4>
        <v-card class="ma-2" to="/">
          <div class="d-flex pa-3">
            <img
              class="justify-center"
              src="../../assets/icons/amp.svg"
              width="100px"
              height="100px"
            >
          </div>
          <v-card-title>1972 Marshall SL</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- /Amplifier -->
      <v-flex xs6 md4>
        <router-link class="ma-2 add-block" to="/">
          <v-icon x-large>add_circle</v-icon>
          <v-btn flat>Add Amplifier</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <!-- /Amplifier List -->
  </div>
</template>

<script>
export default {
  name: "AmpList"
};
</script>
