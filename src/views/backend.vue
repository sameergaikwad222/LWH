<template>
  <v-container class="fill-height backend-content">
    <div class="text-h5 text-center mx-auto text-capitalize">
      start backend learning path
    </div>
    <v-container>
      <v-card elevation="10">
        <v-card-title class="text-center mx-auto px-auto">
          Your Learning Roadmap
        </v-card-title>
        <v-timeline>
          <v-timeline-item
            v-for="(step, i) in backend"
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
      backend: [
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
          title: "Basic Frontend Knowledge",
          items: ["HTML", "CSS", "Javascript"],
          status: 75,
          urls: ["/videos/frontend", "/forums/frontend"]
        },
        {
          title: "OS & General Knowledge",
          items: [
            "Terminal Usage",
            "OS",
            "Process Management",
            "Thread Concurrency",
            "Basic Linux Commands",
            "Memory Management",
            "I/O Management",
            "POSIX Basics",
            "Basic Networking"
          ],
          status: 45,
          urls: ["/videos/os&gk", "/forums/os&gk"]
        },
        {
          title: "Language",
          items: ["Java", "C#", "PHP", "Javascript", "Python", "Ruby"],
          status: 45,
          urls: ["/videos/backend/languages", "/forums/backend/languages"]
        },
        {
          title: "Git",
          items: [
            "Version Control System",
            "Repo Pulling and Pushing",
            "Forking Repo & Branch Control & piping",
            "Docker"
          ],
          status: 45,
          urls: ["/videos/git", "/forums/git"]
        },
        {
          title: "Relational Databases",
          items: ["PostgreSQL", "MySQL", "Maria DB", "Oracle DB", "MS SQL"],
          status: 45,
          urls: ["/videos/databases", "/forums/databases"]
        },
        {
          title: "APIs",
          items: ["REST", "JSON APIs", "SOAP", "OAuth", "Authentication"],
          status: 45,
          urls: ["/videos/packageManagers", "/forums/packageManagers"]
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
          title: "Testing",
          items: ["Integration Testing", "Unit Testing", "Functional Testing"],
          status: 45,
          urls: ["/videos/backend/testing", "/forums/backend/testing"]
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
