<template>
	<div>
		<teams v-for="team in teams" :key="team.team_id" :id="team.team_id" />
	</div>
</template>

<script>
export default {
	async asyncData({ $api }) {
		const teamsData = await $api.getTeams();

		return { teamsData };
	},

	computed: {
		teams() {
			return this.teamsData;
		}
	}
};
</script>

<style></style>
