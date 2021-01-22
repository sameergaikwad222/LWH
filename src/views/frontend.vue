<template>
  <v-container class="fill-height">
    <div class="text-h5 text-center mx-auto text-capitalize">
      start frontend learning path
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
          title: "Internet",
          items: [
            "How does internet work ?",
            "What is HTTP ?",
            "Browsers and how they work ?",
            "DNS and how does it work ?",
            "What is Domain ?",
            "What is Hosting ?"
          ],
          status: 25,
          urls: ["/videos/internet", "/forums/internet"]
        },
        {
          title: "HTML",
          items: [
            "Learn the Basics",
            "Forms & validations",
            "Convetions & Best Practices"
          ],
          status: 75,
          urls: ["/videos/html", "/forums/html"]
        },
        {
          title: "CSS",
          items: [
            "Learn the basics",
            "Making Layouts",
            "Responsive Designs & Media Queries",
            "Learn Advance SCSS preprocessors"
          ],
          status: 45,
          urls: ["/videos/css", "/forums/css"]
        },
        {
          title: "JavaScript",
          items: [
            "Syntax & basic constructs",
            "Learn DOM Manuplation",
            "Learn Fetch API/AJAX(XHR)",
            "ES6 & Modular Javascript",
            "Advance Concepts like Hoisting, Event Bubbling, Scope, Prototype, ShadowDOM, strict"
          ],
          status: 45,
          urls: ["/videos/javascript", "/forums/javascript"]
        },
        {
          title: "Git",
          items: [
            "Version Control System",
            "Repo Pulling and Pushing",
            "Forking Repo & Branch Control & piping"
          ],
          status: 45,
          urls: ["/videos/git", "/forums/git"]
        },
        {
          title: "Web Securities",
          items: [
            "Learn HTTPS",
            "Content Security Policy",
            "Learn CORS concept"
          ],
          status: 45,
          urls: ["/videos/webSecurities", "/forums/webSecurities"]
        },
        {
          title: "Package Managers",
          items: ["npm package manager", "yarn package manager"],
          status: 45,
          urls: ["/videos/packageManagers", "/forums/packageManagers"]
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
