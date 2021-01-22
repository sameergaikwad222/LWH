<template>
  <v-container class="fill-height backend-content">
    <div class="text-h5 text-center mx-auto text-capitalize">
      start devOps learning path
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
          title: "Learn Any Programming Language",
          items: ["Python", "Ruby", "Rust", "C#", "NodeJs", "Go", "C"],
          status: 25,
          urls: ["/videos/devOps", "/forums/devOps"]
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
          title: "Managing Servers",
          items: ["Different OS servers", "Learn Terminal"],
          status: 45,
          urls: ["/videos/terminal", "/forums/terminal"]
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
          title: "Webservers & Application servers",
          items: [
            "Reverse Prozy",
            "Forward Proxy",
            "Load Balancers",
            "Caching server",
            "Firewall"
          ],
          status: 65,
          urls: ["/videos/webservers", "/forums/webservers"]
        },
        {
          title: "Infrastructre as Code",
          items: [
            "Containers",
            "Configuration management",
            "Container Orchestration",
            "Infrastructure Provisioning"
          ],
          status: 65,
          urls: ["/videos/IaC", "/forums/IaC"]
        },
        {
          title: "CI & CD Tools",
          items: [
            "Jenkins",
            "Bamboo",
            "Azure DevOps",
            "Travis CI",
            "GitLab CI",
            "Circle CI",
            "GitHub Actions",
            "TeamCity"
          ],
          status: 65,
          urls: ["/videos/CI&CD", "/forums/CI&CD"]
        },
        {
          title: "Monitoring",
          items: [
            "Infrastructure Monitoring",
            "Application Monitoring",
            "Logs Management"
          ],
          status: 65,
          urls: ["/videos/monitoring", "/forums/monitoring"]
        },
        {
          title: "Cloud Providers",
          items: ["Digital Ocean", "Linode", "Vultr"],
          status: 65,
          urls: ["/videos/monitoring", "/forums/monitoring"]
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
