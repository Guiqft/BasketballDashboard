<template>
<SlideFade>
    <div class="compare-container">
        <CloseButton class="close-button" :fill="colors.secondary_color" @click="close"/>
        <div class="compare-content" :style="`border-left: 10px solid ${colors.secondary_color}`">
            <SearchBar :lists="playersWithStats"/>
        </div>
    </div>
</SlideFade>
</template>

<script>
import CloseButton from '@/static/close-button.svg?inline'

export default {
    name: 'CompareSideContainer',
    components:{
        CloseButton
    },
    computed:{
        players(){
            return {first: this.$store.state.firstPlayer, second: this.$store.state.secondPlayer}
        },
        colors(){
            return this.$store.state.selectedTeamColors
        },
        playersWithStats(){
            const players = this.$store.state.players
            const playersStats = this.$store.state.playersStats

            const result = []

            players.map(player => {
                playersStats.map(stat => {
                    if(stat.player_id === player.player_id)
                        result.push(player)
                })
            })

            return {
                players: result
            }
        }
    },
    methods: {
        close(){
            this.$store.commit('setFirstPlayer', [])
        }
    }
}
</script>

<style scoped>
.compare-container{
    position: fixed;
    display: flex;
    right: 0;
    width: 30%;
    height: 100vh;
}

.close-button{
    width: 4vh;
    height: 4vh;
    margin-top: 5%;
    margin-right: 3%;
    z-index: 10;
    cursor: pointer;
}

.compare-content{
    display: flex;
    flex: 1;
    width: 100%;
    background-color: white;
    
    background: rgb(255, 255, 255);
	background: linear-gradient(
		62deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(216, 212, 209, 1) 100%
	);
    
    -webkit-box-shadow: 0px 0px 300px 100px rgba(173,173,173,1);
    -moz-box-shadow: 0px 0px 300px 100px rgba(173,173,173,1);
    box-shadow: 0px 0px 300px 100px rgba(173,173,173,1);
}
</style>