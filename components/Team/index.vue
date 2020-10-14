<template>
	<div class="container">
		<div class="title">
			Team Stats
		</div>
		<div class="teamInfos">
			<CardInfo :team="team" :colors="colors"/>

			<div class="chart">
				<RadarChart :labels="labels"/>
				<div class="legend">
					<ChartLegend :title="team.name" color="#003363" />
					<ChartLegend title="Average" color="#007cf0"/>
				</div>
			</div>
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
		labels() {
			const labels = ['personal_fouls', 'assists', 'steals', 'blocked_shots', 'turnovers']
			
			return labels
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
	flex-direction: column;
	align-items: center;
	border-left: 5px solid #2e79bf;

	background: rgb(15, 32, 39);
	background: linear-gradient(
		4deg,
		rgba(15, 32, 39, 1) 0%,
		rgba(32, 58, 67, 1) 38%,
		rgba(44, 83, 100, 1) 100%
	);
}

.teamInfos {
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 4%;
}

.chart {
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
}

.legend {
	display: flex;
	flex-direction: column;
	width: 60%;
	align-self: flex-end;
	align-items: center;
	justify-content: center;
	margin: -20% 4% 0% 4%
}

.title {
	margin-top: 4%;
	margin-bottom: 4%;
	font-size: 1.6rem;
	font-weight: 500;
	color: #fff;

	text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
