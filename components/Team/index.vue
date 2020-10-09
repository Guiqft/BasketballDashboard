<template>
	<!-- <div class="container" :style="`background-color: ${colors.primary_color}`"> -->
	<div class="container" :style="`background-color: white`">
		<CardInfo :team="team" :colors="colors" />
		<RadarChart />
		<div class="title" :style="`color: ${colors.secondary_color}`">
			Team Stats
		</div>
	</div>
</template>

<script>
export default {
	name: "Team",
	props: {
		api: { type: Function }
	},

	async mounted() {
		console.log(await this.$api.getTeamStats(1));
	},

	computed: {
		team() {
			return this.$store.state.selectedTeam;
		},
		teamStats() {
			return this.$store.state.selectedTeam.teamStats;
		},
		colors() {
			return {
<<<<<<< HEAD
				primary_color: this.$store.state.teamColors.primary_color,
				secondary_color: this.$store.state.teamColors.secondary_color,
				tertiary_color: this.$store.state.teamColors.tertiary_color
=======
				primary_color: this.$store.state.selectedTeamColors.primary_color,
				secondary_color: this.$store.state.selectedTeamColors.secondary_color,
				tertiary_color: this.$store.state.selectedTeamColors.tertiary_color
>>>>>>> TeamsMap
			};
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	margin-left: 4%;
	height: calc(89vh - 40px);
	align-items: center;
	flex-direction: column-reverse;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		62deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(216, 212, 209, 1) 100%
	);
}

.title {
	font-size: 1.6rem;
	font-weight: 500;
	margin-bottom: 4%;
	filter: brightness(50%);

	text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
