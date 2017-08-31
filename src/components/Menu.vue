<template>
    <div id="Menu" class="phone-viewport">
        <md-whiteframe>
            <md-toolbar class="md-primary" md-theme="menu">
                <md-button class="md-icon-button" @click="AbrirMenu">
                    <md-icon>menu</md-icon>
                </md-button>
                <h2 class="md-title">BDO - Guia do Conhecimento</h2>
            </md-toolbar>
        </md-whiteframe>
        <md-sidenav class="md-left" ref="menuLateral">
            <md-toolbar class="md-large md-primary" md-theme="menu">
                <div class="md-toolbar-container">
                    <h3 class="md-title">Menu</h3>
                </div>
            </md-toolbar>
            <cListaMenu></cListaMenu>
        </md-sidenav>
    </div>
</template>

<script>
import Vue from 'vue'
import cListaMenu from '@/components/ListaMenu'
export default {
  name: 'Menu',

  components: {
    cListaMenu
  },

  methods: {
    AbrirMenu () {
      this.$refs.menuLateral.toggle()
    }
  }
}

var VueMaterial = require('vue-material')
Vue.use(VueMaterial)

Vue.material.registerTheme('menu', {
  primary: 'blue'
})

</script>

<style scoped>
</style>

