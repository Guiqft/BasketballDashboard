<template>
  <div class="team-container">
      Team {{ id }} {{team}}
  </div>
</template>

<script>
export default {
    middleware: 'selectedTeam',
    computed: {
        id(){
            return this.$route.params.id
        },
        team(){
            return this.$store.state.selectedTeam
        },
        teamColors(){
            return this.$store.state.selectedTeamColors
        }
    }
}
</script>

<style scoped>

</style>