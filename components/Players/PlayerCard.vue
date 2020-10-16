<template>
  <div 
    class="card-container" 
    :style="`
      background-color: ${teamColors.primary_color};
      border-left: 0.4vw solid ${teamColors.secondary_color}
    `"

    @mouseover="hasStats ? (showStats = true) : (showStats = false)"
    @mouseleave="showStats = false"
  >
      <div class="card-content" >
          <div class="player-img">
          <img :src="player.photo_url" :style="`opacity: ${showStats ? '0.2' : '1'}`"/>
        </div>

        <div class="player-infos" :style="`opacity: ${showStats ? '0.2' : '1'}`">
          <div class="player-infos-content">
            <div class="player-name">
              {{player.first_name}} {{player.last_name}}
            </div>

            <div class="player-position">
              {{getPosition(player.position)}}
            </div>
          </div>

          <div class="player-age">
            {{ getAge(player.birth_date) }}
            <div class="div">yo</div>
          </div>
        </div>

        <div class="player-stats" :style="`opacity: ${showStats ? '0.1' : '1'}`">
          <div class="player-height">
            <div class="stat-title">Height</div>
            <div class="stat-value">{{player.height}}</div>
            <div class="stat-unity">inches</div>
          </div>

          <div class="player-weight">
            <div class="stat-title">Weight</div>
            <div class="stat-value">{{player.weight}}</div>
            <div class="stat-unity">pounds</div>
          </div>
        </div>

      <div class="compare-button" v-if="showStats" @click="selectPlayer"/>
        <div class="button-title" v-if="showStats" :style="`color: ${teamColors.primary_color}`" @click="selectPlayer">
          Compare
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'PlayerCard',
    props: {
        player: {type: Object, default: {}},
        stats: {type: Array, default: []}
    },
    data() {
      return {
        showStats: false,
      };
    },
    computed: {
      teamColors() {
        return this.$store.state.selectedTeamColors;
      },
      hasStats(){
        return (this.stats.length > 0)
      }
    },
    methods: {
      getAge(birthDate){
        if(birthDate)
          return moment().diff(birthDate, 'years')
        else return '25'
      },

      getPosition(position){
        switch(position){
          case 'PG':
            return 'Point Guard'
          case 'SG':
            return 'Shooting Guard'
          case 'SF':
            return 'Small Forward'
          case 'PF':
            return 'Power Forward'
          case 'C':
            return 'Center'
          default: 
            return 'NaN'

        }
        
      },

      selectPlayer(){
        this.$store.commit('setFirstPlayer', this.$props.player)
      }
    }
}
</script>

<style scoped lang='scss'>
.card-container{
    display: flex;
    color: white;
    height: 30vh;
    margin-bottom: 1%;
    overflow: hidden;
}

.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
	transform: skew(-10deg);
}

.player-img{
  display: flex;
  width: 101%;
  margin-left: -1.7vw;
  height: 40%;
  background-color: white;
	transform: skew(10deg);
  overflow: hidden;
  justify-content: center;


  
  img {
    height: 100%;
	  transform: skew(-10deg);
  }
}

.player-name{
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.player-infos{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 115%;
  height: 6vh;
  margin-left: -1vw;
  padding-left: 1.7vw;

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

.player-age{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3vw;
  height: 60%;
  font-size: 2.3vh;
  border-left: 1px solid #e6e6e6;

  div{
    font-weight: 200;
    font-size: 1.5vh;
    margin-top: -1vh;
    color: #e6e6e6
  }
}

.player-position{
  font-size: 1.4vh;
  font-weight: 300;
  color: #e6e6e6;
  margin-left: 1vw;
}

.player-stats{
  display: flex;
  flex: 1;
  width: 100%;
  margin-lefT: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 0% 10% 0% 10%
}

.player-height{
  flex: 1;
  border-right: 1px solid #e6e6e6;
  text-align: center;
}

.player-weight{
  flex: 1;
  text-align: center;
}

.stat-title{
  margin-bottom: 5%;
}

.stat-value{
  font-size: 3vh;
  font-weight: 500;
}

.stat-unity{
  font-weight: 300;
  font-size: 1.3vh;
}

.compare-button{
  display: flex;
  position: fixed;
  cursor: pointer;
  bottom: 0;
  margin-left: 2vw;
  background-color: white;
  height: 5vh;
  width: 110%;
  opacity: 1!important;
  z-index: 8;

  -webkit-box-shadow: 0px -7px 170px 184px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -7px 170px 184px rgba(0,0,0,0.75);
  box-shadow: 0px -7px 170px 184px rgba(0,0,0,0.75);
}

.button-title{
  z-index: 9;
  font-weight: 600;
  font-size: 2vh;
  cursor: pointer;
  margin-left: 17%;
  margin-bottom: 5%;
}
</style>