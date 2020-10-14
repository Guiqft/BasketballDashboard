<template>
  <div class="team-container">
      Team {{ id }} {{team}}
  </div>
</template>

<script>
export default {
    computed: {
        team(){
            return this.$store.state.selectedTeam
        }
    }
}
</script>

<style scoped>

</style>