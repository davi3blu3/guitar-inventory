<template>
  <v-layout>
    <v-flex my-5 xs12 md10 offset-md1>
      <section class="pa-4 page">
        <h2>
          {{ amp[0].specs.year }} {{ amp[0].specs.make }}
          {{ amp[0].specs.model }}
        </h2>
        <v-layout>
          <v-flex xs12 md6>
            <div class="d-flex pa-3">
              <img
                class="justify-center"
                src="../../assets/icons/amp.svg"
                width="100%"
                height="100%"
                alt="amplifier icon"
              />
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="pa-3">
              <h3>Details: {{ }}</h3>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex class="text-xs-center">
            <v-btn>Edit This Amp</v-btn>
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
