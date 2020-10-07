<template>
	<div class="container">
		<div>
			<Header />
			<div class="content"><Map :teams="teams" class="map" /></div>
			<Team />
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
	padding: 40px;
}

.map {
	width: 65%;
}
</style>
