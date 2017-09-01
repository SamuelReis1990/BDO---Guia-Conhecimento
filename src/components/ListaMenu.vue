<template>
  <div id="ListaMenu" class="phone-viewport">
    <md-list>
      <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Pessoas</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset subMenu" @click="RedirecionarRota('moradoresBalenos')">Moradores de Balenos</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
    <md-divider class="md-inset"></md-divider>
    <md-list>
      <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>Terreno</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset subMenu" @click="RedirecionarRota('balenos')">Balenos</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'ListaMenu',
  methods: {
    RedirecionarRota (rota) {
      this.$router.push({path: rota, params: rota})
    }
  }
}
</script>

<style scoped>
.subMenu{
left: 10%
}
</style>
