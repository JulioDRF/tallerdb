<template>
  <div class="project">
    <v-container fluid>
      <v-row justify="center">
        <v-col md="9">
          <v-container fluid>
            <v-row>
              <v-col>
                <div class="project-description">
                  <p>
                    <span class="project-title">
                      {{ $t('project.' + project.projectId + '.name') }}
                    </span>
                    <span> | {{ project.location }}</span>
                  </p>
                  <p>{{ $t('architect') }}: {{ project.architect }}</p>
                  <p>{{ $t('development') }}: {{ project.development }}</p>
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
                md="6"
              >
                <ProjectImage
                  :image-src="img"
                />
              </v-col>
            </v-row>
            <v-row justify="space-between">
              <v-btn
                to="/projects"
                text
                small
              >
                {{ $t('backToProjects') }}
              </v-btn>
              <div>
                <v-btn
                  :to="`/project/${previousProject.slug}`"
                  text
                  small
                >
                  {{ $t('previous') }}
                </v-btn>
                /
                <v-btn
                  :to="`/project/${nextProject.slug}`"
                  text
                  small
                >
                  {{ $t('next') }}
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
import ProjectImage from '@/components/ProjectImage';
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'Project',
  components: {
    ProjectImage
  },
  computed: {
    ...mapGetters({
      getProject: 'project'
    }),
    ...mapState([
      'projects'
    ]),
    project() {
      return this.getProject(this.$route.params.slug)
    },
    nextProject() {
      let index = this.projects.findIndex(p => this.project.projectId === p.projectId);
      if ((index || index === 0) && index + 1 < this.projects.length) {
        return this.projects[index + 1]
      } else {
        return this.projects[0]
      }
    },
    previousProject() {
      let index = this.projects.findIndex(p => this.project.projectId === p.projectId);
      if (index - 1 > 0) {
        return this.projects[index - 1]
      } else {
        return this.projects[this.projects.length - 1]
      }
    }
  }
}
</script>

<style scoped>
.project-description {
  font-family: Raleway;
  font-weight: 200;
  font-size: 1rem;
  text-align: start;
}
.project-description > p{
  margin: 0.25em;
}
.project-title {
  font-weight: 700;
  text-transform: uppercase;
}
</style>