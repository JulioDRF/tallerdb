<template>
  <div class="project">
    <v-container fluid>
      <v-row justify="center">
        <v-col md="12">
          <v-container fluid>
            <v-row>
              <v-col>
                <div class="project-description">
                  <p class="project-title">
                    {{ $t("project." + project.projectId + ".name") }}
                  </p>
                  <p>{{ project.location }}</p>
                  <p>{{ $t("architect") }}: {{ project.architect }}</p>
                  <p>{{ $t("typology") }}: {{ $t("project." + project.projectId + ".typology") }}</p>
                  <p>
                    {{ $t("construction") }}: {{ project.construction }}
                    <span
                      v-if="project.constructionInM2"
                    >m<sup>2</sup></span>
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="d-flex child-flex">
                <ProjectImage
                  :key="project.projectId"
                  :image-src="project.mainImage"
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(img, idx) in project.images"
                :key="project.projectId + idx"
                class="d-flex child-flex"
                cols="12"
                :md="getImageColumnSize(idx)"
              >
                <ProjectImage :image-src="img" />
              </v-col>
            </v-row>
            <v-row justify="space-between">
              <v-btn
                to="/projects"
                text
                small
              >
                {{ $t("backToProjects") }}
              </v-btn>
              <div>
                <v-btn
                  :to="`/project/${previousProject.slug}`"
                  text
                  small
                >
                  {{ $t("previous") }}
                </v-btn>
                /
                <v-btn
                  :to="`/project/${nextProject.slug}`"
                  text
                  small
                >
                  {{ $t("next") }}
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectImage from "@/components/ProjectImage";
import { mapGetters } from "vuex";
export default {
  name: "Project",
  components: {
    ProjectImage,
  },
  computed: {
    ...mapGetters({
      getProject: "project",
      projects: "sortedProjects",
    }),
    project() {
      return this.getProject(this.$route.params.slug);
    },
    projectIndex() {
      return this.projects.findIndex(
        (p) => this.project.projectId === p.projectId
      );
    },
    nextProject() {
      if (this.projectIndex !== -1 && this.projectIndex + 1 < this.projects.length) {
        return this.projects[this.projectIndex + 1];
      } else {
        return this.projects[0];
      }
    },
    previousProject() {
      if (this.projectIndex - 1 >= 0) {
        return this.projects[this.projectIndex - 1];
      } else {
        return this.projects[this.projects.length - 1];
      }
    },
  },
  mounted() {
    if (!this.project) {
      this.$router.push({ name: "NotFound" });
    }
  },
  methods: {
    // If there's an odd number of images and this is the last image, give the image 100% width (12)
    // Otherwise give the image 50% width (6)
    getImageColumnSize(index) {
      if (
        this.project &&
        this.project.images &&
        this.project.images.length > 0 &&
        this.project.images.length % 2 === 1 &&
        index === this.project.images.length - 1
      ) {
        return "12";
      }
      return "6";
    }
  },
};
</script>

<style scoped>
.project-description {
  font-weight: 300;
  font-size: 1rem;
  text-align: start;
}
.project-description > p {
  margin: 0.25em;
}
.project-description > p.project-title {
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px gray solid;
  letter-spacing: 0.3em;
  margin-bottom: 1em;
}
</style>