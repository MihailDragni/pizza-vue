<template>
  <app-header @showModalAuth="showModalAuth" />
  <router-view />
  <app-footer />
  <modal-auth v-model:show="isModalAuthVisible" />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      isModalAuthVisible: false,
    }
  },
  methods: {
    showModalAuth() {
      this.isModalAuthVisible = true
    },
  },
}
</script>

<style></style>
