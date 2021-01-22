<template>
  <v-container class="py-12 fill-height">
    <section>
      <v-container class="fill-height frontend">
        <v-row class="fill-height d-flex">
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="12"
            class="d-flex flex-column justify-center"
          >
            <span class="primary--text text-center text-h4"
              >Programming Learning</span
            >
            <p class="py-5 my-5 mx-auto context">
              Take online classes to master popular programming languages, such
              as <v-icon>mdi-language-java</v-icon>,
              <v-icon>mdi-language-ruby</v-icon> ,
              <v-icon>mdi-language-csharp</v-icon>,
              <v-icon>mdi-language-php</v-icon>, C++,
              <v-icon>mdi-jquery</v-icon>, and more. Beginner to advanced
              courses available.
            </p>
            <v-container class="d-flex justify-center">
              <v-btn text class="accent" to="/videos/programming"
                >Hit RoadMap</v-btn
              >
            </v-container>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12">
            <v-card
              max-height="400"
              max-width="500"
              elevation="6"
              class="pa-4 mx-auto"
            >
              <v-img
                class="pa-12"
                src="@/assets/machineLearning/machineLearning.svg"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
