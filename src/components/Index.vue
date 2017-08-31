<template>
  <div id="Index" class="phone-viewport">
      <header>
        <cMenu></cMenu>
      </header>
      <main>
        <cDashBoard></cDashBoard>
      </main>
  </div>
</template>

<script>
import cMenu from '@/components/Menu'
import cDashBoard from '@/components/DashBoard'
export default {
  name: 'Index',

  components: {
    cMenu,
    cDashBoard
  }
}
</script>

<style scoped>

</style>


