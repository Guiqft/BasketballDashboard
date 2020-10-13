<template>
	<div class="container">
		<div class="teamPicture">
			<img :src="team.wikipedia_logo_url" />
		</div>
		<div class="teamName" :style="`color: ${colors.secondary_color}`">
			{{ team.name }}
		</div>
		<div class="teamKey">
			{{ team.key }}
		</div>

		<div class="list">
			<InfoRow
				:title="'City'"
				:value="team.city"
				:color="colors.secondary_color"
			/>

			<InfoRow
				:title="'Conference'"
				:value="team.conference"
				:color="colors.secondary_color"
			/>

			<InfoRow
				:title="'Division'"
				:value="team.division"
				:color="colors.secondary_color"
			/>

			<InfoRow
				:title="'Status'"
				:value="getStatus()"
				:color="colors.secondary_color"
			/>
		</div>

		<div class="footer">
			Win Rate 
			<div class="winrate" :style="`color: ${colors.secondary_color}`">
				{{teamWinRate.toFixed(2)}}
				<div class="winratePercentage">%</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardInfo",
	props: {
		team: {default: []},
		colors: { type: Object, default: {} }
	},
	computed: {
		teamWinRate() {
			const teamStats = this.$store.state.selectedTeamStats

			return (teamStats.wins / teamStats.games) * 100;
		}
	},
	methods: {
		getStatus() {
			return this.team.active ? "Active" : "Deactive";
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	height: 50%;
	align-items: center;
	flex-direction: column;
	align-self: flex-start;
	min-width: 45%;
	margin-bottom: 5%;
	margin-left: 3%;
	padding: 3% 0% 3% 0%;
	border-radius: 10px;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		62deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(216, 212, 209, 1) 100%
	);
}

.teamPicture > img {
	width: 80px;
	max-height: 80px;
	min-height: 80px;
}

.teamName {
	font-weight: 700;
	font-size: 1.2rem;
	filter: brightness(30%);
}

.teamKey {
	font-weight: 350;
}

.list {
	display: flex;
	width: 85%;
	flex-direction: column;
	list-style-type: none;
	margin-top: 7%;
}

.footer {
	margin-top: auto;
	margin-bottom: auto;
	text-align: center;
}

.winrate{
	font-size: 5vh;
	font-weight: 700;
	filter: brightness(50%);
}

.winratePercentage {
	color: black;
	font-size: 2vh;
}
</style>
