<template>
  <v-container
    class="fill-height pa-0 d-flex flex-column align-center justify-start"
  >
    <v-container class="text-center my-3"
      ><span class="text-xl-h4 text-lg-h4 text-md-h5 text-sm-h5"
        >Explore Videos</span
      ></v-container
    >
    <v-container>
      <v-row>
        <v-col cols="12" xl="2" lg="2" md="12" sm="12">
          <v-sheet>
            <div class="px-7 py-4">
              <v-icon class="px-3">mdi-filter-menu</v-icon>
              <span>Filters</span>
            </div>
            <v-treeview
              v-model="selection"
              selection-type="leaf"
              selectable
              return-object
              :items="videos"
            ></v-treeview
          ></v-sheet>
        </v-col>
        <v-col class="fill-height" cols="12" xl="10" lg="10" md="12" sm="12">
          <v-sheet>
            <template v-if="!selection.length">
              No nodes selected.
            </template>
            <template v-else>
              <div v-for="node in selection" :key="node.id">
                <div
                  class="py-7 text-container text-capitalize d-flex justify-center text-xl-h4 text-lg-h4 text-md-h5 text-sm-h6"
                >
                  {{ node.name }}
                </div>
                <v-container class="video-container">
                  <div
                    v-for="(video, index) in node.vids"
                    :key="index"
                    class="my-4"
                  >
                    <v-hover v-slot="{ hover }">
                      <v-card
                        :to="{
                          name: 'courseVideos',
                          params: { course: video.course }
                        }"
                        :elevation="hover ? 22 : 0"
                        :class="{ 'on-hover': hover }"
                        rounded
                        class="ma-2 pa-4"
                        height="450"
                        width="400"
                      >
                        <v-img
                          width="350"
                          height="250"
                          contain
                          :src="video.imgURL"
                        ></v-img>
                        <v-card-title class="mb-3">{{
                          video.title
                        }}</v-card-title>
                        <v-card-subtitle>{{ video.subtitle }}</v-card-subtitle>
                      </v-card>
                    </v-hover>
                  </div>
                </v-container>
                <v-divider></v-divider>
              </div>
            </template>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import videos from "@/data/videos.js";

export default {
  data() {
    return {
      limit: 3,
      videos,
      selection: []
    };
  },
  filters: {
    imgURL(value) {
      const videoID = value.slice(value.indexOf("embed") + 6);
      return `https://img.youtube.com/vi/${videoID}/0.jpg`;
    }
  },
  computed: {
    isMobileDevice() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
