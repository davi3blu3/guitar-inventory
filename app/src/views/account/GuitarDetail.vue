<template>
  <v-layout>
    <v-flex my-5 xs12 md10 offset-md1>
      <section class="pa-4 page">
        <h2>{{ guitar[0].specs.year }} {{ guitar[0].specs.make }} {{ guitar[0].specs.model }}</h2>
        <v-layout>
          <v-flex xs12 md6>
            <div class="d-flex pa-3">
              <img
                v-if="guitar[0].type == 'electric'"
                class="justify-center"
                src="../../assets/icons/elec.svg"
                width="100%"
                height="100%"
                alt="electric guitar icon"
              >
              <img
                v-else
                class="justify-center"
                src="../../assets/icons/acous.svg"
                width="100%"
                height="100%"
                alt="acoustic guitar icon"
              >
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="pa-3">
              <h3>Color: {{ guitar[0].specs.color }}</h3>
              <h3>Construction: {{ guitar[0].specs.construction }}</h3>
              <h3>Neck:</h3>
              <h3>Fingerboard:</h3>
              <h3>Radius:</h3>
              <h3>Body:</h3>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="text-xs-center">
            <v-btn>Edit This Guitar</v-btn>
          </v-flex>
        </v-layout>
        <div></div>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  name: "GuitarDetail",
  data: () => ({
    guitar: {}
  }),
  mounted() {
    axios({
      method: "GET",
      url: `http://localhost:3000/guitars/${this.$route.params.id}`
    }).then(
      result => {
        this.guitar = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
