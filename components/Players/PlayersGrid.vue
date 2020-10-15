<template>
  <div class="grid-container">
        <PlayerCard 
            v-for="(player, idx) in players" 
            :key="idx" :player="player" 
            :stats="playersStats.filter(item => item.name.includes(player.first_name))"
        />
  </div>
</template>

<script>
export default {
    name: 'PlayersGrid',
    props: {
        players: {type: Array, default: []}
    },
    computed: {
        team(){
            return this.$store.state.selectedTeam
        },
        playersStats(){
            return this.$store.state.playersStats.filter(stat => stat.team_id === this.team.team_id)
        }
    },
    methods:{
        showPlayer(player){
            return this.playersStats.filter(item => item.name.includes(player.first_name))
        }  
    }
}
</script>

<style scoped>
.grid-container{
    display: grid;
    flex: 1;
    grid-column-gap: 1vw;
    grid-row-gap: 5vh;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
	transform: skew(10deg);
    padding-right: 3%;
    padding-bottom: 3%;
}
</style>