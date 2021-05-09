<template>
  <v-container>
    <v-sheet elevation="7">
      <v-breadcrumbs divider="/" :items="items"></v-breadcrumbs>
    </v-sheet>
    <v-container class="px-0 px-md-1 ">
      <div class="profile-page">
        <v-row>
          <v-col class="col-sm-6 col-md-5 col-12">
            <v-row>
              <v-col class="col col-12">
                <v-card class="ma-1" min-height="282">
                  <v-card-text>
                    <v-row class="fill-height no-gutters">
                      <v-col
                        class="d-flex justify-center align-center flex-column col-sm-5 col-xl-6 col-12"
                      >
                        <v-responsive>
                          <v-img
                            class="rounded-circle"
                            width="179"
                            src="@/assets/HomeLogo.png"
                            style="border:3px dotted white;"
                          ></v-img>
                        </v-responsive>
                      </v-col>
                      <v-col
                        class="pl-0 pl-sm-4 d-flex flex-column align-center align-sm-start col-sm-7 col-xl-6 col-12"
                      >
                        <p
                          class="user-name greyMedium--text font-weight-regular"
                        >
                          Harry Potter
                        </p>
                        <p class="user-work greyTint--text ma-0">
                          Product Designer
                        </p>
                        <a class="body-1">Flatlogic.com</a>
                        <div
                          class="d-flex justify-center justify-sm-start flex-wrap mt-5"
                        >
                          <span
                            class="v-chip v-chip--label v-chip--no-color theme--light v-size--small primaryConst--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                            style="background-color: rgba(83, 103, 254, 0.2);"
                            ><span class="v-chip__content">UI/UX</span></span
                          ><span
                            class="v-chip v-chip--label v-chip--no-color theme--light v-size--small warning--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                            style="background-color: rgba(255, 194, 96, 0.2);"
                            ><span class="v-chip__content">Art</span></span
                          ><span
                            class="v-chip v-chip--label v-chip--no-color theme--light v-size--small secondary--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                            style="background-color: rgba(255, 92, 147, 0.2);"
                            ><span class="v-chip__content">Design</span></span
                          ><span
                            class="v-chip v-chip--label v-chip--no-color theme--light v-size--small warning--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                            style="background-color: rgba(255, 194, 96, 0.2);"
                            ><span class="v-chip__content"
                              >Illustrator</span
                            ></span
                          ><span
                            class="v-chip v-chip--label v-chip--no-color theme--light v-size--small successConst--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2"
                            style="background-color: rgba(60, 212, 160, 0.2);"
                            ><span class="v-chip__content">Mobile</span></span
                          >
                        </div>
                        <div class="mt-5">
                          <button
                            type="button"
                            class="mr-0 mr-sm-n2 mr-lg-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-facebook theme--dark greyTint--text"
                              ></i
                            ></span></button
                          ><button
                            type="button"
                            class="mr-0 mr-sm-n2 mr-lg-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-basketball theme--dark greyTint--text"
                              ></i
                            ></span></button
                          ><button
                            type="button"
                            class="mr-0 mr-sm-n2 mr-lg-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-instagram theme--dark greyTint--text"
                              ></i
                            ></span></button
                          ><button
                            type="button"
                            class="mr-0 mr-sm-n2 mr-lg-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-github theme--dark greyTint--text"
                              ></i
                            ></span></button
                          ><button
                            type="button"
                            class="mr-0 mr-sm-n2 mr-lg-0 v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default"
                          >
                            <span class="v-btn__content"
                              ><i
                                aria-hidden="true"
                                class="v-icon notranslate mdi mdi-twitter theme--dark greyTint--text"
                              ></i
                            ></span>
                          </button>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="col-md-6 col-12"></v-col>
              <v-col class="col-md-6 col-12"></v-col>
              <v-col class="pb-0 pb-sm-3 col col-12"></v-col>
            </v-row>
          </v-col>
          <v-col class="pt-0 pt-sm-3 col-sm-6 col-md-7 col-12">
            <v-row><v-col class="col-12"></v-col></v-row>
            <v-row
              ><v-col class="col-md-7 col-12"></v-col>
              <v-col class="col-md-7 col-12"></v-col
            ></v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Dashboard",
          disabled: false,
          href: "/dashboard"
        }
      ]
    };
  }
};
</script>

<style></style>
