<template>
    <div 
        class="team-container" 
        :style="`
            background-color: ${teamColors.primary_color}; 
            border-right: 10px solid ${teamColors.secondary_color};
        `"
    >
        <img :src="team.wikipedia_logo_url" class="logo-image"/>
    </div>
</template>

<script>
export default {
    name: 'TeamLogo',
    computed: {
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
.team-container{
    position: absolute;
    display: flex;
    height: 100vh;
    width: 25vw;
    margin-left: -5vw;
	transform: skew(10deg);
    overflow: hidden;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 5px 0px 14px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 0px 14px -6px rgba(0,0,0,0.75);
    box-shadow: 5px 0px 14px -6px rgba(0,0,0,0.75);  
}

.logo-image{
    position: absolute;
    max-height: 100vh;
    width: 200%;
	transform: skew(-10deg);
}
</style>