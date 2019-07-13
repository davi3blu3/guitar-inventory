<template>
  <v-app>
    <v-toolbar app class="header">
      <v-toolbar-title class="headline">
        <router-link class="nav-link" to="/">
          <span class="font-weight-bold">Guit</span>
          <span class="font-weight-light">HUB</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/about">About</v-btn>
      <!-- TODO: make v-menu conditional on logged in -->
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on">
            <img src="./assets/icons/default-profile.png" width="35px" alt="default profile icon" />
          </v-btn>
        </template>
        <v-list>
          <v-list-tile>
            <img
              src="./assets/icons/default-profile.png"
              class="profile-img"
              alt="default profile icon"
            />
          </v-list-tile>
          <v-list-tile>
            <router-link class="nav-link" to="/account">
              <v-list-tile-title>My Account</v-list-tile-title>
            </router-link>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
.nav-link {
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
.profile-img {
  margin: auto;
  width: 35px;
}
</style>
