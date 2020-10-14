<template>
	<div class="backgroundImg">
		<div class="container">
			<div class="content">
				<Header />
				<div class="map">
					<Map :teams="teams" />
				</div>
			</div>
			<div class="team">
				<Team :key="selectedTeam.team_id" v-show="selectedTeam.name" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit("setTeams");
		this.$store.commit("setPlayers");
		this.$store.commit("setTeamsAverages")
	},

	computed: {
		teams() {
			return this.$store.state.teams;
		}, 
		selectedTeam() {
			return this.$store.state.selectedTeam;
		}
	}
};
</script>

<style scoped>
.backgroundImg {
	background: linear-gradient(
			4deg,
			rgba(41, 128, 185, 0.5) 0%,
			rgba(109, 213, 250, 0.7) 10%,
			rgba(255, 255, 255, 0.9) 100%
		),
		url(~static/homeBackground.jpg) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height: 100vh;
}

.container {
	display: flex;
	flex: 1;
	width: 100%;
	height: 100vh;
	padding: 0!important;
	margin: 0% 0% 0% 0%!important;
	max-width: 2000px!important;
}

.content {
	display: flex;
	flex-direction: column;
	flex: 3;
}

.map {
	justify-content: center;
	margin: 0% 4% 0px 4%;
}

.team {
	flex: 1;
}
</style>
