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
            <a
              href="mailto:contacto@tallerdb.com"
              target="_blank"
              class="mr-025"
            >
              <v-icon :dark="darkModeEnabled">
                {{ mdiEmail }}
              </v-icon>
            </a>
            <a
              href="mailto:contacto@tallerdb.com"
              target="_blank"
            >contacto@tallerdb.com</a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/taIIerdb"
              target="_blank"
              class="mr-025"
            >
              <v-icon :dark="darkModeEnabled">
                {{ mdiFacebook }}
              </v-icon>
            </a>
            <a
              href="https://www.facebook.com/taIIerdb"
              target="_blank"
            >taIIerDB</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/taller_db_"
              target="_blank"
              class="mr-025"
            >
              <v-icon :dark="darkModeEnabled">
                {{ mdiInstagram }}
              </v-icon>
            </a>
            <a
              href="https://www.instagram.com/taller_db_"
              target="_blank"
            >taller_DB_</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiEmail, mdiFacebook, mdiInstagram } from '@mdi/js'
import { mapState } from 'vuex';

export default {
  name: "Contact",
  data() {
    return {
      mdiEmail,
      mdiFacebook,
      mdiInstagram,
    }
  },
  computed: {
    ...mapState([
      'darkModeEnabled'
    ]),
  },
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
.mr-025 {
  margin-right: 0.25em;
}
</style>
