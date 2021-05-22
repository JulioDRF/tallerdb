<template>
  <div class="contact">
    <v-container fluid>
      <v-row>
        <v-col>
          <p class="contact-title">
            {{ $t('contact') }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="min-height-50">
          <p>
            <a href="mailto:contacto@tallerdb.com">contacto@tallerdb.com</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-title {
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px gray solid;
  letter-spacing: 0.3em;
  margin-bottom: 1em;
}
.min-height-50{
  min-height: 50vh;
}
</style>
