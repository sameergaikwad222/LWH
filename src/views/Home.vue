<template>
  <v-container class="mt-12 mb-5">
    <section class="d-flex flex-lg-row flex-xl-row flex-column my-12">
      <v-container class="d-flex flex-column justify-center align-center">
        <div>
          <h1 class="text-h3 primary--text mb-8">
            OpenSource Learning
            <v-icon class="text-h3 primary--text">mdi-bookshelf</v-icon>
          </h1>
          <span class="text-h5"
            >Easy Learning Lessons, Simple explanations</span
          >
          <br />
          <span class="text-h5"
            ><v-icon>mdi-video</v-icon> Short Video Lessons &
            <v-icon>mdi-forum-outline</v-icon> Issue Forums</span
          >
        </div>
      </v-container>
      <v-container>
        <v-img
          max-width="800"
          max-height="500"
          src="@/assets/home/landingDevs.svg"
        ></v-img>
      </v-container>
    </section>

    <section class="my-12" id="cardSelection">
      <v-container class="d-flex justify-space-around fill-height">
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            to="webDevelopment"
            max-width="480"
            max-height="565"
            :elevation="hover ? 22 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img contain src="@/assets/home/webDevelopment.jpg"></v-img>
            <v-card-title class=" text-h4 text-capitalize mb-5">
              web development
            </v-card-title>
            <v-card-subtitle>
              Learn the Basics. Every Web Developer must have a basic
              understanding of HTML, CSS, and JavaScript. Responsive Web Design.
            </v-card-subtitle>
          </v-card>
        </v-hover>
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            to="/machineLearning"
            max-width="480"
            max-height="565"
            :elevation="hover ? 22 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img src="@/assets/home/machineLearning.jpg"></v-img>
            <v-card-title class=" text-h4 text-capitalize mb-5">
              machine learning
            </v-card-title>
            <v-card-subtitle>
              Getting ready to leap into the world of Data Science? Grow your
              knowledge and grow your career.
            </v-card-subtitle>
          </v-card>
        </v-hover>
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            to="/programming"
            max-width="480"
            max-height="565"
            :elevation="hover ? 22 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img contain src="@/assets/home/programmingLanguages.jpg"></v-img>
            <v-card-title class=" text-h4 text-capitalize mb-5">
              programming languages
            </v-card-title>
            <v-card-subtitle>
              Learn the Basics. Zero to Hero Courses. Courses in multiple
              lessons or in One Video for fast pacers.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-container>
    </section>

    <section class="my-12 py-8 fill-height" id="feedbackSect">
      <v-container class="fill-height feedCards">
        <v-sheet
          class="d-flex flex-lg-row flex-xl-row flex-column justify-space-around"
        >
          <v-sheet class="d-flex justify-center">
            <v-img
              src="@/assets/home/startQuoteSign.svg"
              max-height="200"
              max-width="200"
            ></v-img>
          </v-sheet>
          <v-carousel>
            <v-carousel-item v-for="(feed, i) in feeds" :key="i">
              <v-sheet elevation="12" class="pa-2">
                <v-img :src="require(`../assets/home/${feed.img}`)"></v-img>
                <span class="text-center my-4">{{ feed.title }}</span>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-sheet class="d-flex justify-center">
            <v-img
              src="@/assets/home/endQuoteSign.svg"
              max-height="200"
              max-width="200"
            ></v-img>
          </v-sheet>
        </v-sheet>
      </v-container>
    </section>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      feeds: [
        {
          img: "react1.png",
          title: "C language Tutorial"
        },
        {
          img: "react2.png",
          title: "Android App Tutorial"
        },
        {
          img: "react3.png",
          title: "Javascript language Tutorial"
        }
      ]
    };
  },
  methods: {
    getPic(img) {
      console.log(`value which got passed is : ${img}`);
      console.log(`@/assets/home/${img}/`);
      return `@/assets/home/${img}/`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
