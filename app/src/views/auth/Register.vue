<template>
  <v-layout>
    <v-flex my-5 xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3>
      <v-card class="pa-5">
        <v-card-title class="justify-center">
          <h1>
            Sign up for
            <span class="font-weight-bold">Guit</span>
            <span class="font-weight-light">HUB</span>
          </h1>
        </v-card-title>
        <v-card-text class="justify-center">
          <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="pwRules"
            :type="show ? 'text' : 'password'"
            label="Password"
            required
            @click:append="show = !show"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="danger" to="/">Cancel</v-btn>
          <v-btn class="success" v-on:click="register()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    show: false,
    email: "",
    password: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+/.test(v) || "Please enter a valid email address"
    ],
    pwRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be at least 8 characters"
    ]
  }),
  methods: {
    register: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("New user created successfully! Please login.");
          this.$router.replace("/login");
        })
        .catch(err => {
          console.log("err.message");
        });
    }
  }
};
</script>
