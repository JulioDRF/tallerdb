<template>
  <div class="contact">
    <v-container fluid>
      <v-row>
        <v-col>
          <p class="contact-title">
            {{ $t("contact") }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <div class="contact-content">
          <p
            v-for="contact in formsOfContact"
            :key="contact.text"
          >
            <a
              :href="contact.href"
              target="_blank"
              :style="linkStyles"
              class="mr-025"
            >
              <v-icon :dark="darkModeEnabled">
                {{ contact.icon }}
              </v-icon>
            </a>
            <a
              :href="contact.href"
              target="_blank"
              :style="linkStyles"
            >{{
              contact.text
            }}</a>
          </p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiEmail, mdiFacebook, mdiInstagram } from "@mdi/js";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Contact",
  data() {
    return {
      formsOfContact: [
        {
          href: "https://www.facebook.com/taIIerdb",
          icon: mdiFacebook,
          text: "taIIerDB",
        },
        {
          href: "https://www.instagram.com/taller_db_",
          icon: mdiInstagram,
          text: "taller_DB_",
        },
        {
          href: "mailto:contacto@tallerdb.com",
          icon: mdiEmail,
          text: "contacto@tallerdb.com",
        },
      ],
    };
  },
  computed: {
    ...mapState(["darkModeEnabled"]),
    ...mapGetters(["linkColor"]),
    linkStyles() {
      return {
        color: this.linkColor,
      };
    },
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
.contact-content {
  min-height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-left: 1em;
}
.mr-025 {
  margin-right: 0.25em;
}
</style>
