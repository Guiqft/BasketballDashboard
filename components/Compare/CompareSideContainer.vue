<template>
<SlideFade>
    <div class="compare-container">
        <CloseButton class="close-button" :fill="colors.secondary_color" @click="close"/>
        <div class="compare-content" :style="`border-left: 10px solid ${colors.secondary_color}`">
            <div class="title">
                Player Comparasion
            </div>

            <PlayerInfosCompare class="players" :players="players" />

            <div class="chart-container" v-if="players.second.data.length !== 0" >
                <RadarChart 
                    class="chart" 
                    height="300px" :labels="chartLabels" 
                    :colors="colors" 
                    type="Player" 
                    :players="players"
                    labelColor="black"
                />
            
                <div class="legend">
                    <ChartLegend :title="`${players.first.data.first_name} ${players.first.data.last_name}`" :color="colors.primary_color" textColor="black"/>
                    <ChartLegend :title="`${players.second.data.first_name} ${players.second.data.last_name}`" color="rgba(0, 0, 0, 0.75)" textColor="black"/>
                </div>
            </div>
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
            return {
                first: {
                    data: this.$store.state.firstPlayer,
                    stats: this.$store.state.playersStats.filter(stat => stat.player_id === this.$store.state.firstPlayer.player_id)
                }, 
                second: {
                    data: this.$store.state.secondPlayer,
                    stats: this.$store.state.playersStats.filter(stat => stat.player_id === this.$store.state.secondPlayer.player_id)
                }
            }
        },
        colors(){
            return this.$store.state.selectedTeamColors
        },
        chartLabels(){
            return ['assists', 'steals', 'turnovers', 'personal_fouls', 'points', 'blocked_shots']
        },
    },
    methods: {
        close(){
            this.$store.commit('setFirstPlayer', [])
            this.$store.commit('setSecondPlayer', [])
        }
    }
}
</script>

<style scoped>
.compare-container{
    display: flex;
    position: fixed;
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
    flex-direction: column;
    align-items: center;
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

.title {
    margin-top: 5%;
    margin-bottom: 15%;
    font-weight: 400;
    font-size: 3vh;
}

.players{
    height: 40%;
}

.chart-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
}

.chart{
    flex: 1;
    width: 100%;
}

.legend {
    position: relative;
    top: -10%;
    width: 40%;
}
</style>