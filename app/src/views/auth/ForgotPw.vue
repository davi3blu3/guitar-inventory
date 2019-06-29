<template>
  <v-layout>
    <v-flex my-5 xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3>
      <v-card class="pa-5">
        <v-card-title class="justify-center">
          <h1>Forgot Password?</h1>
        </v-card-title>
        <v-card-text class="justify-center">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="danger" to="/">Cancel</v-btn>
          <v-btn class="success" to="/#">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+/.test(v) || "Please enter a valid email address"
    ]
  })
};
</script>
