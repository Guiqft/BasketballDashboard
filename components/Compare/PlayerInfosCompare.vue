<template>
  <div class="info-container">
      <div v-for="(player, idx) in players" :key="idx" class="player-info" :style="`background-color: ${colors.secondary_color}`">
          <div v-if="idx === 'second' && player.data.length !== 0" @click="resetSecondPlayer" class="close-container">
              <CloseButton class="close-icon"/>  
          </div>
          <div v-if="player.data.length !== 0" class="player-data">
              <div class="player-header">
                <div class="player-name">
                    {{player.data.first_name}} {{player.data.last_name}}
                </div>

                <div class="player-team">
                    ({{player.data.team}})
                </div>
            </div>
            

            <div class="player-img-container">
                <img :src="player.data.photo_url" class="player-img" />
            </div>

            
            <div class="stats-grid">
                <div v-for="item in statsLabels" :key="item.label" class="player-stats">
                    <div class="stats-item">
                            <div class="stats-value">  
                                {{player.stats[0][(item.label).split(' ')[0]] || player.data[(item.label).split(' ')[0]]}}
                            </div>
                            <div class="stats-unity">
                                {{item.unity}}
                            </div>
                    </div>
                </div>
            </div>
            
          </div>
        <div v-else class="search-player">
            <SearchBar class="search-bar" :lists="playersWithStats" title="Search for the second player"/>
        </div>
      </div>
  </div>
</template>

<script>
import CloseButton from '@/static/close-button.svg?inline'

export default {
    name: 'PlayerInfosCompare',
    components:{
        CloseButton
    },
    props: {
        players: {type: Object, default: {}}
    },
    computed: {
        colors(){
            return this.$store.state.selectedTeamColors
        },
        statsLabels(){
            return [
                {label: 'height', unity: 'inches'},
                {label: 'games', unity: 'games'},
                {label: 'weight', unity: 'pounds'},
                {label: 'started games', unity: 'game started'}
            ]
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
    methods:{
        resetSecondPlayer(){
            this.$store.commit('setSecondPlayer', [])
        }
    }
}
</script>

<style scoped lang="scss">
.info-container{
    display: flex;
    width: 100%;
    padding: 0% 2% 5% 2%
}

.player-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-right: 10%;
    background: rgb(255, 255, 255);
	background: linear-gradient(
		62deg,
		rgba(255, 255, 255, 0.3) 0%,
		rgba(216, 212, 209, 0.3) 100%
	);
    border-radius: 10px;
    overflow: hidden;

    &:last-child{
        margin-right: 0%;
    }
}

.player-data{
    flex: 1;
    width: 100%;
}

.player-header{
    color: black;
    width: 100%;
    padding: 4% 0% 4% 4%;

    background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
    background-color: #131313;
    background-size: 20px 20px;
}

.player-name{
    font-size: 2vh;
    font-weight: 600;
    color: white;
    align-self: flex-start;
}

.player-team{
    font-size: 1.9vh;
    font-weight: 300;
    color: #e6e6e6;
    align-self: flex-start;
}

.player-img-container{
    display: flex;
    height: 12vh;
    width: 100%;
    background-color: white;
    justify-content: center;
}

.player-img{
    height: 100%;
}

.player-stats{
    flex: 1;
    width: 100%;
}

.stats-grid{
    flex: 1;
    display: grid;
    grid-column-gap: 1vw;
    grid-template-columns: repeat(auto-fit, minmax(3.5vw, 1fr));
    margin-top: 5%;
}

.stats-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 101%;
    border-right: 1px solid #e6e6e6;
    padding: 5% 8% 10% 5%
}

.stats-value{
    color: white;
    font-weight: 700;
    font-size: 2.5vh;
}

.stats-unity{
    color: #e6e6e6;
    font-weight: 300;
    font-size: 1.6vh;
    text-transform: capitalize;
}

.search-player{
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    padding-bottom: 4%;
}

.close-container{
    position: fixed;
    margin-top: -1%;
    margin-right: 11%;
    height: 4vh;
    width: 4vh;
    border-radius: 100%;
    background-color: rgb(165, 12, 12);
    cursor: pointer;
}

.close-icon{
    margin-top: 0.5%;
    margin-left: 0.5%;
    fill: white;
    position: fixed;
    height: 2vh;
    width: 2vh;
    cursor: pointer;
}
</style>