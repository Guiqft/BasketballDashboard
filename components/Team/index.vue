<template>
	<div 
		class="container"
		:style="`
			border-left: 5px solid ${colors.primary_color};
		`"
	>
		<div class="title">
			Team Stats
		</div>

		<div class="list-title">
			made / attempts
		</div>
		<div class="progress-list">
			<ProgressList :colors="colors"/>
		</div>
		<div class="team-infos">
			<CardInfo :team="team" :colors="colors"/>

			<div class="team-chart-button">
				<div class="chart">
					<RadarChart :labels="labels" :colors="colors"/>
					<div class="legend">
						<ChartLegend :title="team.name" :color="colors.primary_color" />
						<ChartLegend title="Average" color="rgba(0, 0, 0, 0.75)"/>
					</div>
				</div>

				<ButtonLink class="button" title="See Players" width="80%" :to="`teams/${team.team_id}`"/>
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
	background: rgb(0,0,0);
	background: linear-gradient(4deg, rgba(0,0,0,1) 0%, rgba(67,67,67,1) 100%);
}

.title {
	margin-top: 10%;
	margin-bottom: 2%;
	font-size: 3.5vh;
	font-weight: 500;
	color: #fff;

	text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
}

.list-title {
	color: rgb(226, 221, 221);
	font-weight: 500;
	font-size: 2vh;
	margin-top: 4%;
	margin-bottom: -10%;
}

.progress-list {
	display: flex;
	width: 100%;
	max-width: 80%;
	margin-left: 5%;
	flex: 1;
	align-items: center;
	justify-content: center;
}

.team-infos {
	display: flex;
	flex: 1;
	align-items: center;
	width: 100%;
	margin-bottom: 4%;
}

.team-chart-button{
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 1%;
}

.chart {
	display: flex;
	flex: 1;
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

.button {
	flex: 1;
	margin-top: 50%;
}
</style>
