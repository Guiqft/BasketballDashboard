<template>
  <div class="list-container">
      <div class="scroll-box">
            <div v-for="(list, idx) in lists" :key="String(list)" class="list">
                <div class="list-header">
                    {{idx}}
                </div>
                <div @click="selectItem(item, idx)" v-show="itemVisible(item, idx)" v-for="item in list" :key="getName(item)" class="list-item">
                    <img :src="getImageSrc(item, idx)" class="item-image" />
                    
                    {{getName(item, idx)}} ({{getInfo(item, idx)}})
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DropDownList',
    props: {
        lists: {type: Object, default: {}},
        inputValue: {type: String, default: ''}
    },

    computed: {
        teamsList() {
            return this.$store.state.teams
        },
        playersList() {
            return this.$store.state.players
        }
    },
    methods: {
        itemVisible(item, idx){
            let currentName = (`${this.getName(item, idx)} ${this.getInfo(item, idx)}`).toLowerCase()
            let currentInput = this.inputValue.toLowerCase()

            return currentName.includes(currentInput)
        },

        getName(item, idx){
            if(idx === "teams") return item.name
            else if(idx === "players") return `${item.first_name} ${item.last_name}`
        },

        getInfo(item, idx){
            if(idx === "teams") return item.key
            else if(idx === "players") return item.team
        },

        getImageSrc(item, idx){
            if(idx === "teams") return item.wikipedia_logo_url
            else if(idx === "players") return item.photo_url
        },

        selectItem(item, idx){
            if(idx === 'teams') {
                this.$store.commit('setSelectedTeam', item)
                this.$store.commit('setSelectedTeamColors', item)
            }

            if(idx === 'players') {
                const player = this.$store.state.firstPlayer
                if(player.length === 0){
                    this.$store.commit('setFirstPlayer', item)
                    this.$router.push(`/teams/${this.$store.state.selectedTeam.team_id}`)
                }
                else
                    this.$store.commit('setSecondPlayer', item)
            }

            this.$emit('selected-item')
        }
    }
}
</script>

<style scoped>
    .list-container{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 30vh;
        background-color: white;
        z-index: 11;
        border-radius: 0px 0px 2vh 2vh;
    }

    .scroll-box {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 2vh
    }

    .list-header {
        font-size: 2vh;
        font-weight: 300;
        text-transform: capitalize;
        padding: 2%;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
    }

    .list-item{
        display: flex;
        width: 70%;
        align-items: center;
        font-size: 1.6vh;
        margin-top: 1.2%;
        margin-bottom: 1.2%;
        padding: 0.5% 3% 0.5% 6%;
    }

    .list-item:hover{
        cursor: pointer;
    }

    .item-image{
        flex: 1;
        max-height: 3vh;
        max-width: 3vh;
        margin-right: 10%;
    }
</style>