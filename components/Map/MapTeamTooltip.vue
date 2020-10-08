<template>
	<a @click="selectTeam" class="container">
		<div class="logoContainer">
			<img :src="team.wikipedia_logo_url" class="teamLogo" />
		</div>
		<div class="content">
			<div class="teamName">{{ team.name }} ({{ team.key }})</div>
		</div>
	</a>
</template>

<script>
export default {
	name: "MapTeamTooltip",
	props: {
		team: { type: Object, default: null },
		store: { type: Object }
	},
	methods: {
		selectTeam() {
			this.store.commit("setSelectedTeam", this.team);
			this.store.commit("setTeamColors", this.team);
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	flex-direction: column;
	align-items: center;

	cursor: pointer;
}
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px 7px 3px 7px;
	min-width: 65px;
	background-color: #edede6;

	-webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	border-radius: 4px;
}

.logoContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	padding: 7px;
	min-width: 50px;
	background-color: #e0e0da;
	border-radius: 20px 20px 0px 0px;

	-webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
}

.teamLogo {
	max-height: 25px;
	max-width: 40px;
	display: flex;
	flex: 1;
}

.teamName {
	font-size: 0.8rem;
}
</style>
