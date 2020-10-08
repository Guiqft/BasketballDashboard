<template>
	<div class="container">
		<div>
			<Header />
			<div class="content">
				<Map :teams="teams" class="map" />
				<Team class="team" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $api }) {
		const teamsData = await $api.getTeams();

		return { teamsData };
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
	flex: 1;
}

.content {
	display: flex;
	padding: 40px 40px 0px 40px;
}

.map {
	flex: 5;
}

.team {
	flex: 3;
}
</style>
