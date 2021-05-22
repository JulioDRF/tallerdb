<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-col>
          <p class="about-title">
            {{ $t('aboutUs') }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="4">
          <div class="about-content">
            <p>
              {{ $t('aboutUsContent') }}
            </p>
            <p class="sneaky">
              chukuchucha
            </p>
          </div>
        </v-col>
        <v-col md="6">
          <ProjectImage
            :image-src="{ src: aboutUsImage }"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProjectImage from "@/components/ProjectImage";
import { mapGetters } from 'vuex';
export default {
  name: "About",
  components: {
    ProjectImage,
  },
  computed: {
    ...mapGetters(["aboutUsImage"]),
  }
};
</script>

<style scoped>
.about-title {
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px gray solid;
  letter-spacing: 0.3em;
  margin-bottom: 1em;
}
.about-content {
  font-weight: 300;
  font-size: 1rem;
  text-align: start;
  user-select: none;
}
.about-content > p {
  margin: 0.25em;
}
.sneaky {
  color: transparent;
}
</style>
