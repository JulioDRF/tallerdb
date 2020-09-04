<template>
  <div class="project">
    <v-container fluid>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col md="9">
          <v-container fluid>
            <v-row
              no-gutters
              class="mb-10"
            >
              <v-col>
                <h1> {{ $t('project.' + project.projectId + '.name') }}</h1>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col
                v-for="(img, idx) in project.images"
                :key="idx"
                class="d-flex child-flex"
                cols="12"
              >
                <v-img
                  :src="img"
                  width="100%"
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
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Project',
  computed: {
    ...mapGetters({
      getProject: 'project'
    }),
    project() {
      return this.getProject(this.$route.params.id)
    },
  }
}
</script>
