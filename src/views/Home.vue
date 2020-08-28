<template>
  <div class="home">
    <HelloWorld :message="$t('welcomeToTallerDB')"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
