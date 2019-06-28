<template>
  <div>
    <!-- Guitar List -->
    <h3>Your Guitars:</h3>
    <v-layout row wrap>
      <!-- Guitar -->
      <v-flex v-for="n in 8" :key="n" xs6 md4>
        <v-card class="ma-2" to="/">
          <div class="d-flex pa-3">
            <img
              class="justify-center"
              src="../../assets/icons/elec.svg"
              width="100px"
              height="100px"
            >
          </div>
          <v-card-title>1957 Fender Stratocaster</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- /Guitar -->
      <v-flex xs6 md4>
        <router-link class="ma-2 add-block" to="/">
          <v-icon x-large>add_circle</v-icon>
          <v-btn flat>Add Guitar</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <!-- /Guitar List -->
  </div>
</template>

<script>
export default {
  name: "GuitarList"
};
</script>

<style>
</style>
