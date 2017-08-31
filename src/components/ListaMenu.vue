<template>
  <div id="ListaMenu" class="phone-viewport">
    <md-list>
      <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>News</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset subMenu">World</md-list-item>           
            <md-list-item class="md-inset subMenu">Americas</md-list-item>
            <md-list-item class="md-inset subMenu">Europe</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
    <md-divider class="md-inset"></md-divider>
    <md-list>
      <md-list-item>
        <md-icon>whatshot</md-icon>
        <span>News</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="md-inset subMenu">World</md-list-item>
            <md-list-item class="md-inset subMenu">Americas</md-list-item>
            <md-list-item class="md-inset subMenu">Europe</md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'ListaMenu'
}
</script>

<style scoped>
.subMenu{
left: 10%
}
</style>
