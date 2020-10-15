<template>
  <div 
    class="card-container" 
    :style="`
      background-color: ${teamColors.primary_color};
      border-left: 0.4vw solid ${teamColors.secondary_color}
    `"
  >
      <div class="card-content">
        <div class="player-img">
          <img :src="player.photo_url" />
        </div>

        <div class="player-infos">
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
      </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'PlayerCard',
    props: {
        player: {type: Object, default: {}}
    },
    computed: {
      teamColors() {
        return this.$store.state.selectedTeamColors;
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
</style>