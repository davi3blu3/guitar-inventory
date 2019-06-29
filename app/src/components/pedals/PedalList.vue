<template>
  <div>
    <!-- Pedal List -->
    <h3>Your Effects Pedals:</h3>
    <v-layout row wrap>
      <!-- Pedal -->
      <v-flex v-for="n in 3" :key="n" xs6 md4>
        <v-card class="ma-2" to="/">
          <div class="d-flex pa-3">
            <img
              class="justify-center"
              src="../../assets/icons/pedal.svg"
              width="100px"
              height="100px"
            />
          </div>
          <v-card-title>Ibanez TS-9</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>View Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <!-- /Pedal -->
      <v-flex xs6 md4>
        <router-link class="ma-2 add-block" to="/">
          <v-icon x-large>add_circle</v-icon>
          <v-btn flat>Add Pedal</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <!-- /Pedal List -->
  </div>
</template>

<script>
export default {
  name: "PedalList"
};
</script>
