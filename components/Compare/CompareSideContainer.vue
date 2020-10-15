<template>
<SlideFade>
    <div class="compare-container">
        <CloseButton class="close-button" :fill="colors.primary_color" @click="close"/>
        <div class="compare-content" :style="`border-left: 10px solid ${colors.primary_color}`">
            {{firstPlayer.first_name}}
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
        firstPlayer(){
            return this.$store.state.firstPlayer
        },
        colors(){
            return this.$store.state.selectedTeamColors
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
    
    -webkit-box-shadow: 0px 0px 300px 200px rgba(173,173,173,1);
    -moz-box-shadow: 0px 0px 300px 200px rgba(173,173,173,1);
    box-shadow: 0px 0px 300px 200px rgba(173,173,173,1);
}
</style>