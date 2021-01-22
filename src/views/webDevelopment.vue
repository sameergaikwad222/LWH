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
              >Frontend Web Development</span
            >
            <p class="py-5 my-5 mx-auto context">
              The front end of a website <v-icon>mdi-web</v-icon> is the part
              that users interact with. Everything that you see when you’re
              navigating around the Internet, from fonts and colors
              <v-icon>mdi-format-paint</v-icon> to dropdown menus and sliders,
              is a combo of HTML, CSS, and JavaScript being controlled by your
              computer’s browser.
            </p>
            <v-container class="d-flex justify-center">
              <v-btn text class="accent" to="/webDevelopment/frontend"
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
              <v-img src="@/assets/webDevelopment/frontend.svg"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container class="fill-height frontend">
        <v-row class="fill-height d-flex flex-row-reverse">
          <v-col
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="12"
            class="d-flex flex-column justify-center fill-height"
          >
            <span class="text-center primary--text text-h4"
              >Backend Web Development</span
            >
            <p class="py-5 my-5 context mx-auto">
              So what makes the front end of a website possible
              <v-icon>mdi-beaker-question-outline</v-icon> Where is all that
              data stored <v-icon>mdi-database-settings</v-icon> ? This is where
              the back end comes in. The back end of a website consists of a
              server <v-icon>mdi-server</v-icon> , an application
              <v-icon>mdi-application</v-icon>, and a
              database<v-icon>mdi-database-settings</v-icon>. A back-end
              developer builds and maintains the technology that powers those
              components which, together, enable the user-facing side of the
              website to even exist in the first place.
            </p>
            <v-container class="d-flex justify-center">
              <v-btn text class="accent" to="/webDevelopment/backend"
                >Hit RoadMap</v-btn
              >
            </v-container>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12" class="fill-height">
            <v-card
              max-height="400"
              max-width="500"
              elevation="6"
              class="pa-4  mx-auto"
            >
              <v-img src="@/assets/webDevelopment/backend.svg"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
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
            <span class="text-center primary--text text-h4"
              >DevOps Web Development</span
            >
            <p class="py-5 mx-auto my-5 context">
              DevOps is a set of practices that combines software development
              <v-icon>mdi-developer-board</v-icon> (Dev) and IT operations
              <v-icon>mdi-server</v-icon>
              (Ops). It aims to shorten the systems development life cycle
              <v-icon>mdi-recycle</v-icon> and provide continuous delivery with
              high software quality.
            </p>
            <v-container class="d-flex justify-center">
              <v-btn text class="accent" to="/webDevelopment/devOps"
                >Hit RoadMap</v-btn
              >
            </v-container>
          </v-col>
          <v-col cols="12" xl="6" lg="6" md="6" sm="12">
            <v-card
              max-height="400"
              max-width="500"
              elevation="6"
              class="pa-4  mx-auto"
            >
              <v-img src="@/assets/webDevelopment/deops.svg"></v-img>
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
