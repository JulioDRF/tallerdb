<template>
  <div class="home">
    <v-container
      fluid
      fill-height
    >
      <v-row
        class="text-center"
        no-gutters
      >
        <v-col class="mb-1">
          <TheHomeSlideshow />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TheHomeSlideshow from '@/components/TheHomeSlideshow';

export default {
  name: 'Home',
  components: {
    TheHomeSlideshow
  }
}
</script>
