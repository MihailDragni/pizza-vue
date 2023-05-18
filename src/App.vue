<template>
  <app-header @showModalAuth="showModalAuth" />
  <router-view />
  <app-footer />
  <modal-auth v-model:show="modalAuthVisible" />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      modalAuthVisible: false,
    }
  },
  methods: {
    showModalAuth() {
      this.modalAuthVisible = true
    },
  },
}
</script>

<style></style>
