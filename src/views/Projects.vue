<template>
  <div class="projects">
    <v-container fluid>
      <v-row justify="center">
        <v-col md="9">
          <v-container fluid>
            <v-row>
              <v-col
                v-for="p in projects"
                :key="p.projectId"
                class="d-flex child-flex pa-2"
                cols="12"
                sm="6"
                md="4"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    flat
                    tile
                    class="d-flex"
                    :color="backgroundColor"
                    @click="handleClick(p)"
                  >
                    <v-img
                      :src="p.mainImage"
                      aspect-ratio="1"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            :color="spinnerColor"
                          />
                        </v-row>
                      </template>
                    </v-img>
                    <v-fade-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out info-overlay white--text"
                      >
                        <span>{{ $t('project.' + p.projectId + '.name') }}</span>
                      </div>
                    </v-fade-transition>
                  </v-card>
                </v-hover>
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
export default {
  name: 'Projects',
  computed: {
    ...mapState([
      'projects'
    ]),
    ...mapGetters([
      'spinnerColor',
      'backgroundColor'
    ])
  },
  methods: {
    handleClick(project) {
      this.$router.push(`/project/${project.slug}`)
    }
  }
}
</script>
<style scoped>
.info-overlay {
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
}
.info-overlay > span {
  font-size: 1.5rem;
  font-weight: 300;
}
@media only screen and (min-width: 1264px) {
  .info-overlay > span {
    font-size: 2.5rem;
  }
}
</style>
