<template>
	<div class="container">
		<div class="content">
			<Header />
			<div class="map">
				<Map :teams="teams" />
			</div>
		</div>

		<Team class="team" :api="api2" />
	</div>
</template>

<script>
export default {
	async asyncData({ $api }) {
		const teamsData = await $api.getTeams();

		return { teamsData };
	},

	data({ $api }) {
		return { api2: $api };
	},

	mounted() {
		this.$store.commit("setTeams", this.teamsData);
	},

	computed: {
		teams() {
			return this.$store.state.teams;
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex: 1;
}

.content {
	display: flex;
	flex-direction: column;
	flex: 2;
}

.map {
	flex: 5;
	justify-content: center;
	padding: 4% 4% 0px 4%;
}

.team {
	flex: 1;
}
</style>
