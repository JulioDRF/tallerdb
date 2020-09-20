<template>
  <div class="project-image">
    <v-card
      flat
      tile
      :color="backgroundColor"
      class="d-flex fill-height"
    >
      <v-img
        :src="imageSrc"
        max-height="90vh"
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
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProjectImage',
  props: {
    imageSrc: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'spinnerColor',
      'backgroundColor'
    ])
  }
}
</script>
