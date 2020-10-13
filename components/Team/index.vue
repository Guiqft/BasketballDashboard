<template>
	<div class="container">
		<CardInfo :team="team" :colors="colors" />
		<RadarChart />
		<div class="title">
			Team Stats
		</div>
	</div>
</template>

<script>
export default {
	name: "Team",
	computed: {
		team() {
			return this.$store.state.selectedTeam;
		},
		teamStats() {
			return this.$store.state.selectedTeamStats;
		},
		colors() {
			return {
				primary_color: this.$store.state.selectedTeamColors.primary_color,
				secondary_color: this.$store.state.selectedTeamColors.secondary_color,
				tertiary_color: this.$store.state.selectedTeamColors.tertiary_color
			};
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	margin-left: 4%;
	height: 100vh;
	align-items: center;
	flex-direction: column-reverse;
	border-left: 5px solid #2e79bf;

	background: rgb(15, 32, 39);
	background: linear-gradient(
		4deg,
		rgba(15, 32, 39, 1) 0%,
		rgba(32, 58, 67, 1) 38%,
		rgba(44, 83, 100, 1) 100%
	);
}

.title {
	font-size: 1.6rem;
	font-weight: 500;
	margin-bottom: 4%;
	color: #fff;

	text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
