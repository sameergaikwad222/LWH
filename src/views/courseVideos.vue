<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col
        cols="12"
        xl="8"
        lg="8"
        md="12"
        sm="12"
        class="fill-height ytVideo"
      >
        <v-container class="fill-height d-flex flex-column">
          <v-container class="video-tab">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/vrQlEhmVFDA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-container>
          <v-container class="data-tabs">
            <v-tabs v-model="tab" background-color="primary" dark>
              <v-tab v-for="item in items" :key="item.tab">
                {{ item.tab }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat>
                  <v-card-text>{{ item.content }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </v-container>
      </v-col>
      <v-col class="hidden-md-and-down fill-height">
        <v-list>
          <v-list-item
            v-for="(video, index) in listVideos"
            :key="index"
            three-line
          >
            <v-hover v-slot="{ hover }">
              <v-sheet
                class="my-4"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-list-item-avatar>
                  <v-icon>mdi-video</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ video.vidTitle }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    ><span>free video</span></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-sheet>
            </v-hover>
          </v-list-item>
          <v-divider inset></v-divider>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import videos from "@/data/videos.js";
export default {
  data() {
    return {
      videos,
      tab: null,
      items: [
        { tab: "Overview", content: "Overview Content" },
        { tab: "Q&A", content: "Q&A Content" },
        { tab: "Files", content: "Files Content" },
        { tab: "Announcements", content: "Anouncements Content" }
      ]
    };
  },
  computed: {
    listVideos() {
      let vids = [];
      videos.forEach(cat => {
        cat.children.forEach(subCat => {
          subCat.vids.forEach(pl => {
            if (pl.course === this.$route.params.course) vids = pl.videos;
          });
        });
      });
      return vids || null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
