<template>
  <v-layout>
    <v-flex my-5 xs12 md10 offset-md1>
      <section class="pa-4 page">
        <h2>Welcome {{ username }}!</h2>
        <hr>
        <div>
          <v-btn v-on:click="view = gts">Guitars</v-btn>
          <v-btn v-on:click="view = amp">Amplifiers</v-btn>
          <v-btn v-on:click="view = fxs">Effects</v-btn>
        </div>
        <div v-if="view=gts">
          <!-- Guitar List -->
          <h3>Your Guitars:</h3>
          <v-layout row wrap>
            <!-- Guitar -->
            <v-flex v-for="n in 7" :key="n" xs6 md4>
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
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    username: "Dave",
    view: "gts"
  }),
  methods: {
    handleAdd: () => {
      console.log("v-on:click registered");
    }
  }
};
</script>

<style>
.page {
  background-color: white;
  width: 100%;
}
.add-block {
  height: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

