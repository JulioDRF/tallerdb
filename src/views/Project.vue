<template>
  <div class="project">
    <v-container fluid>
      <v-row justify="center">
        <v-col md="9">
          <v-container fluid>
            <v-row
              class="mb-10"
            >
              <v-col>
                <h1> {{ $t('project.' + project.projectId + '.name') }}</h1>
              </v-col>
            </v-row>
            <v-row justify="space-between">
              <v-btn
                :to="`/project/${previousProject.slug}`"
                class="mb-5"
              >
                <v-icon>{{ icons.mdiArrowLeft }}</v-icon>
                {{ $t('project.' + previousProject.projectId + '.name') }}
              </v-btn>
              <v-btn
                :to="`/project/${nextProject.slug}`"
                class="mr-5"
              >
                <v-icon>{{ icons.mdiArrowRight }}</v-icon>
                {{ $t('project.' + nextProject.projectId + '.name') }}
              </v-btn>
            </v-row>
            <v-row justify="center">
              <v-col
                v-for="(img, idx) in images"
                :key="idx"
                class="d-flex child-flex pl-0 pr-5 mb-4"
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
                        class="fill-height ma-0 grey darken-1"
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
              <v-col>
                <v-btn
                  @click="scrollTop"
                >
                  <v-icon>{{ icons.mdiArrowUp }}</v-icon>
                  {{ $t('backToTop') }}
                </v-btn>
              </v-col>
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
    images() {
      return [this.project.mainImage, ...this.project.images]
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
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
