<template>
  <v-layout>
    <v-flex my-5 xs12 md10 offset-md1>
      <section class="pa-4 page">
        <h2>Welcome {{ username }}!</h2>
        <hr />
        <div class="my-2">
          <v-btn v-on:click="view = 'gts'">Guitars</v-btn>
          <v-btn v-on:click="view = 'amp'">Amplifiers</v-btn>
          <v-btn v-on:click="view = 'fx'">Effects</v-btn>
        </div>

        <div v-if="view == 'gts'">
          <guitar-list></guitar-list>
        </div>

        <div v-if="view == 'amp'">
          <amp-list></amp-list>
        </div>

        <div v-if="view == 'fx'">
          <pedal-list></pedal-list>
        </div>
      </section>
    </v-flex>
  </v-layout>
</template>

<script>
import GuitarList from "../../components/guitars/GuitarList";
import AmpList from "../../components/amplifiers/AmpList";
import PedalList from "../../components/pedals/PedalList";

export default {
  data: () => ({
    username: "Dave",
    view: "gts"
  }),
  methods: {
    handleAdd: () => {
      console.log("v-on:click registered");
    }
  },
  components: {
    GuitarList,
    AmpList,
    PedalList
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
  text-decoration: none;
}
</style>
