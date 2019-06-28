<template>
  <v-app>
    <v-toolbar app class="header">
      <v-toolbar-title class="headline">
        <router-link class="home-link" to="/">
          <span class="font-weight-bold">Guit</span>
          <span class="font-weight-light">HUB</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar>

    <v-content background>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.home-link {
  color: black;
  text-decoration: none;
}
.v-content {
  background: url(assets/img/guitar-bg.jpeg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

