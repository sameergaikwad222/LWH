<template>
  <v-container class="fill-height pa-0">
    <v-list class="list-data">
      <v-list-item-group>
        <v-list-item v-for="(topic, i) in videos" :key="i">
          <v-list-item-content>
            <v-container class="mainObject-content">
              <div class="text-capitalize my-5 px-5 text-h5">
                {{ topic.name }}
              </div>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(subTopic, j) in topic.subcat"
                  :key="j"
                >
                  <v-expansion-panel-header
                    >{{ subTopic.name }} Development</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-card class="subObject-content">
                      <div class="d-flex py-6 ml-6 jsutify-center align-center">
                        <span class="text-capitalize text-h5 mr-5"
                          >{{ subTopic.name }} Development</span
                        >
                        <v-btn text color="accent" class="text-captalize"
                          >explore</v-btn
                        >
                      </div>
                      <v-container
                        class="d-flex flex-column content-row flex-xl-row flex-lg-row justify-space-around"
                      >
                        <v-card v-for="(vid, k) in subTopic.vids" :key="k">
                          <iframe
                            :style="{
                              width: isMobileDevice ? '100%' : '560px'
                            }"
                            height="315"
                            :src="vid.url"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </v-card>
                      </v-container>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          cat: "webDevelopment",
          name: "web development",
          subcat: [
            {
              name: "frontend",
              vids: [
                {
                  title: "HTML",
                  url: "https://www.youtube.com/embed/E3ByCRqE7Lo"
                },
                {
                  title: "CSS",
                  url: "https://www.youtube.com/embed/u5-K_ua9sOw"
                },
                {
                  title: "Javascript",
                  url: "https://www.youtube.com/embed/hKB-YGF14SY"
                }
              ]
            },
            {
              name: "backend",
              vids: [
                {
                  title: "Node js",
                  url: "https://www.youtube.com/embed/YFmgNiimfyk"
                },
                {
                  title: "PHP",
                  url: "https://www.youtube.com/embed/1SnPKhCdlsU"
                },
                {
                  title: "Express",
                  url: "https://www.youtube.com/embed/gF9P93haajE"
                }
              ]
            },
            {
              name: "devops",
              vids: [
                {
                  title: "Docker",
                  url: "https://www.youtube.com/embed/Gw2Jrid4SaQ"
                },
                {
                  title: "Git",
                  url: "https://www.youtube.com/embed/gwWKnnCMQ5c"
                },
                {
                  title: "Hosting",
                  url: "https://www.youtube.com/embed/a0cp1bmcJWw"
                }
              ]
            }
          ]
        },
        {
          cat: "machineLearning",
          name: "machine learning",
          subcat: [
            {
              name: "data science & AI",
              vids: [
                {
                  title: "AI",
                  url: "https://www.youtube.com/embed/Lp9Ftuq2sVI"
                },
                {
                  title: "ML",
                  url: "https://www.youtube.com/embed/OcRkVTYKHeU"
                },
                {
                  title: "SkLearn",
                  url: "https://www.youtube.com/embed/pfmJtWEMEpo"
                }
              ]
            }
          ]
        },
        {
          cat: "programmingLanguage",
          name: "programming languages",
          subcat: [
            {
              name: "data science & AI",
              vids: [
                {
                  title: "C Language",
                  url: "https://www.youtube.com/embed/YXcgD8hRHYY"
                },
                {
                  title: "Python Language",
                  url: "https://www.youtube.com/embed/gfDE2a7MKjA"
                },
                {
                  title: "Java language",
                  url: "https://www.youtube.com/embed/rV_3Lewxx6o"
                }
              ]
            }
          ]
        }
      ]
    };
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
