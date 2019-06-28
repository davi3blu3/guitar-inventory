<template>
  <div>
    <!-- Guitar List -->
    <h3>Your Guitars:</h3>
    <v-layout row wrap>
      <!-- Guitar -->
      <v-flex v-for="g in guitars" :key="g.id" xs6 md4>
        <v-card class="ma-2" to="/">
          <div class="d-flex pa-3">
            <img
              v-if="g.type == 'electric'"
              class="justify-center"
              src="../../assets/icons/elec.svg"
              width="100px"
              height="100px"
              alt="electric guitar icon"
            >
            <img
              v-else
              class="justify-center"
              src="../../assets/icons/acous.svg"
              width="100px"
              height="100px"
              alt="acoustic guitar icon"
            >
          </div>
          <v-card-title>{{ g.specs.make + ' ' + g.specs.model }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat :to="{path: '/guitar/' + g.id}">View Details</v-btn>
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
import axios from "axios";
export default {
  name: "GuitarList",
  data: () => ({
    guitars: []
  }),
  mounted() {
    axios({ method: "GET", url: "http://localhost:3000/guitars" }).then(
      result => {
        this.guitars = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style>
</style>
