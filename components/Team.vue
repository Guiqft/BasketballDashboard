<template>
	<div class="container">{{ team.name }}</div>
</template>

<script>
export default {
	name: "Team",
	computed: {
		team() {
			return this.$store.state.selectedTeam;
		}
	}
};
</script>

<style></style>
