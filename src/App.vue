<template>
  <v-app id="inspire">
    <v-navigation-drawer mini-variant id="navDrawer" app v-model="drawer">
      <v-container class="mainContent fill-height">
        <v-container>
          <v-avatar color="secondary" class="my-3">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-container>

        <v-container>
          <v-btn icon class="my-2 mx-auto" x-large to="/videos">
            <v-icon x-large>
              mdi-youtube
            </v-icon>
          </v-btn>
          <v-btn icon class="my-2 mx-auto" x-large>
            <v-icon x-large>
              mdi-forum
            </v-icon>
          </v-btn>
          <v-btn icon class="my-2 mx-auto" x-large>
            <v-icon x-large>
              mdi-email
            </v-icon>
          </v-btn>
        </v-container>

        <v-container>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon to="/" v-bind="attrs" v-on="on">
                <v-avatar>
                  <img src="@/assets/HomeLogo.png" alt="harry" />
                </v-avatar>
              </v-btn>
            </template>
            <span class="text-capitalize">code with harry</span>
          </v-tooltip>
        </v-container>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark class="hidden-lg-and-up">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-home</v-icon></v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
