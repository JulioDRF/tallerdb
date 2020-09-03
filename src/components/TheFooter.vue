<template>
  <v-footer app>
    <span class="ml-auto" id="copyright-msg">&copy; {{ new Date().getFullYear() }} Taller DB</span>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
#copyright-msg {
  font-size: 12;
  color: gray;
}
</style>
