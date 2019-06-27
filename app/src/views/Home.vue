<template>
  <v-layout>
    <v-flex my-5 xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3>
      <v-card class="pa-5">
        <v-card-title class="justify-center">
          <h1>Welcome to GuitHub</h1>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn to="/register" class="info">Register</v-btn>
          <v-btn to="/login" class="success">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
