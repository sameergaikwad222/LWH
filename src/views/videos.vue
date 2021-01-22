<template>
  <v-container class="fill-height">
    <v-container class="webDevlopment-content">
      <div class="text-capitalize my-5 px-5 text-h5">web development</div>
      <v-card class="frontend-content" elevation="6">
        <div class="d-flex py-6 ml-6 jsutify-center align-center">
          <span class="text-capitalize text-h5 mr-5">Frontend Development</span>
          <v-btn text color="accent" class="text-captalize">explore</v-btn>
        </div>
        <v-container class="d-flex justify-space-around">
          <v-card v-for="(vid, i) in videos[0].subcat[0].vids" :key="i">
            <iframe
              width="560"
              height="315"
              :src="vid.url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-container>
      </v-card>
    </v-container>
    <v-container class="machineLearning-content"></v-container>
    <v-container class="programming-content"></v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          cat: "webDevelopment",
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
              vids: ["https://www.youtube.com/embed/bUVYHF6fRbo"]
            },
            {
              name: "devOps",
              vids: [""]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
