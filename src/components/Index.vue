<template>
  <div id="Index" class="phone-viewport">
    <header>
      <cMenu></cMenu>
    </header>
    <main>
      <div id="db" v-if="parametros == 'dashBoard'">
        <cDashBoard></cDashBoard>
      </div>
      <div v-else-if="parametros == 'moradoresBalenos'">
        <cMoradoresBalenos></cMoradoresBalenos>
      </div>
      <div v-else-if="parametros == 'balenos'">
        <cBalenos></cBalenos>
      </div>
      <div v-else>
      <!-- <div @="teste">chegou aqui</div> -->
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
  name: 'Index',

  components: {
    cMenu,
    cDashBoard,
    cMoradoresBalenos,
    cBalenos
  }// ,
  // methods: {
  //   teste () {
  //     console.log('cheguei')
  //     this.$router.push({path: '/'})
  //   }
}

</script>

<style scoped>

</style>


