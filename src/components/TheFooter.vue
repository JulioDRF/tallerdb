<template>
  <v-footer
    app
    :color="backgroundColor"
    absolute
  >
    <span
      id="copyright-msg"
      class="ml-auto"
    >
      &copy; {{ new Date().getFullYear() }} Taller DB
    </span>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheFooter',
  computed: {
    ...mapGetters([
      'backgroundColor'
    ])
  }
}
</script>

<style scoped>
#copyright-msg {
  font-size: 12;
  color: gray;
}
</style>
