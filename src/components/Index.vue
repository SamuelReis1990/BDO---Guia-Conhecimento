<template>
  <div id="Index" class="phone-viewport">
    <header>
      <cMenu></cMenu>
    </header>
    <main>
      <div></div>
      <div v-if="parametros == 'dashBoard'">
        <cDashBoard></cDashBoard>
      </div>
      <div v-else-if="parametros == 'moradoresBalenos'">
        <cMoradoresBalenos></cMoradoresBalenos>
      </div>
      <div v-else-if="parametros == 'balenos'">
        <cBalenos></cBalenos>
      </div>
    </main>
  </div>
</template>

<script>
import cMenu from '@/components/Menu'
import cDashBoard from '@/components/DashBoard'
import cMoradoresBalenos from '@/components/webPages/MoradoresBalenos'
import cBalenos from '@/components/webPages/Balenos'

export default {
  props: {
    parametros: {
      default: 'dashBoard'
    }
  },
  methods: {
    ExibeWebPages () {
      if (this.parametros === 'dashBoard') {
      } else if (this.parametros === 'moradoresBalenos') {
        console.log('entrei no else if')
      } else if (this.parametros === 'balenos') {
        console.log('entrei no else if 2')
      } else {
        this.$router.push({path: '/'})
      }
    }
  },
  mounted () {
    this.ExibeWebPages()
  },
  name: 'Index',

  components: {
    cMenu,
    cDashBoard,
    cMoradoresBalenos,
    cBalenos
  }
}
</script>

<style scoped>

</style>


