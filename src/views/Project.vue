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
                <v-card
                  flat
                  tile
                >
                  <v-img
                    :src="project.mainImage"
                    max-height="90vh"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0 grey"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(img, idx) in project.images"
                :key="idx"
                class="d-flex child-flex"
                cols="12"
                md="6"
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :src="img"
                    max-height="90vh"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0 grey"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
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
import { mapGetters, mapState } from 'vuex';
import {
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp
} from '@mdi/js';
export default {
  name: 'Project',
  data () {
    return {
      icons: {
        mdiArrowLeft,
        mdiArrowRight,
        mdiArrowUp
      }
    }
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