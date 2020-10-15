<template>
	<div class="team-container">
		<TeamLogo />
		<div class="team-content">
			<div class="header">
				<ButtonBack class="back-button" />
				<div class="title">{{ team.name }} Players</div>
			</div>

			<PlayersGrid :players="players" class="grid" />
		</div>
	</div>
</template>

<script>
export default {
    middleware: "selectedTeam",
    mounted(){
        this.$store.commit('setPlayersStats', this.team.team_id)
    },
	computed: {
		id() {
			return this.$route.params.id;
		},
		team() {
			return this.$store.state.selectedTeam;
		},
		players() {
			return this.$store.state.players.filter(
				player => player.team_id === this.team.team_id
			);
		},
		teamColors() {
			return this.$store.state.selectedTeamColors;
		}
	}
};
</script>

<style scoped>
.team-container {
	display: flex;
	height: 100vh;
	width: 100%;
}

.team-content {
	padding-top: 7vh;
	padding-left: 20vw;
	flex: 1;

	background: rgb(255, 255, 255);
	background: linear-gradient(
		62deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(216, 212, 209, 1) 100%
	);
}

.header {
	display: flex;
	width: 100%;
	align-items: center;
}

.title {
	margin-left: 35%;
	font-size: 3vh;
}

.grid {
	margin-left: 4vw;
	margin-top: 6vh;
	width: 90%;
	height: 80vh;
	overflow-y: auto;
}
</style>
