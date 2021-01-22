<template>
  <v-container class="fill-height">
    <div class="text-h5 text-center mx-auto text-capitalize">
      start machine learning path
    </div>
    <v-container>
      <v-card elevation="10">
        <v-card-title class="text-center mx-auto px-auto">
          Your Learning Roadmap
        </v-card-title>
        <v-timeline>
          <v-timeline-item
            v-for="(step, i) in frontend"
            :key="i"
            :class="i % 2 !== 0 ? 'text-right' : ''"
          >
            <v-menu offset-x :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn text color="primary" dark v-bind="attrs" v-on="on">
                  {{ step.title }}
                </v-btn>
              </template>
              <v-card>
                <v-container>
                  <v-list>
                    <v-list-item v-for="(item, r) in step.items" :key="r">
                      <v-list-item-content>{{ item }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-card>
                    <v-card-title
                      >Completed
                      <v-progress-linear
                        height="25"
                        :color="
                          colors[Math.floor(Math.random() * colors.length)]
                        "
                      >
                        {{ Math.floor(Math.random() * 101) + 1 }}
                      </v-progress-linear>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn text :to="step.urls[0]">Browse Video</v-btn>
                      <v-btn text :to="step.urls[1]">Browse Forums</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-container>
              </v-card>
            </v-menu>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      frontend: [
        {
          title: "Pick a Programming Laungauge",
          items: [
            "R Language",
            "Python (Popular)",
            "Python/SkLearn(Machine Learning Library)",
            "Python/TensorFlow(Machine Learning Library)",
            "Python/Django(Webapp Backend)",
            "Python/Flask(Webapp Backend)",
            "Python/Tkinter(GUI)",
            "Python/Pygames(Game Development)"
          ],
          status: 25,
          urls: ["/videos/machineLearning", "/forums/machineLearning"]
        },
        {
          title: "Learn Linear Algebra",
          items: ["parallel conquering technique"],
          status: 75,
          urls: ["/videos/LinearAlgebra", "/forums/LinearAlgebra"]
        },
        {
          title: "Learn Statistics",
          items: ["Learn the statistics"],
          status: 45,
          urls: ["/videos/statistics", "/forums/statistics"]
        },
        {
          title: "Core ML Algorithms",
          items: [
            "Basic understanding of probability & statistics",
            "ML Algorithms by the sklearn devleopers",
            "Follow some given written resources"
          ],
          status: 45,
          urls: ["/videos/mlAlgorithms", "/forums/mlAlgorithms"]
        },
        {
          title: "Learn Python Libraries",
          items: ["Learn Numpy", "Learn pandas", "helpfu for sklearn code"],
          status: 45,
          urls: ["/videos/pythonLibraries", "/forums/pythonLibraries"]
        },
        {
          title: "Learn Deployments",
          items: [
            "Learn Django, Flask",
            "Learn Docker & Kubernetes",
            "Learn CI&CD"
          ],
          status: 45,
          urls: ["/videos/deployments", "/forums/deployments"]
        }
      ],
      colors: ["red", "blue", "purple", "green", "yellow", "orange", "amber"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
</style>
