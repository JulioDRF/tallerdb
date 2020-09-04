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
                class="d-flex child-flex"
                md="4"
                cols="6"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    flat
                    tile
                    class="d-flex"
                    @click="handleClick(p)"
                  >
                    <v-img
                      :src="p.mainImage"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    />
                    <v-fade-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out info-overlay white--text"
                        style="height: 100%;"
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
import { mapState } from 'vuex';
export default {
  name: 'Projects',
  computed: {
    ...mapState([
      'projects'
    ])
  },
  methods:{
    handleClick(project) {
      this.$router.push(`/project/${project.projectId}`)
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
