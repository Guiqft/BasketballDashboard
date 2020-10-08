<template>
	<div class="container" :style="`background-color: ${colors.primary_color}`">
		<CardInfo :team="team" :colors="colors" />
	</div>
</template>

<script>
export default {
	name: "Team",
	computed: {
		team() {
			return this.$store.state.selectedTeam;
		},
		colors() {
			return {
				primary_color: this.$store.state.teamColors.primary_color,
				secondary_color: this.$store.state.teamColors.secondary_color,
				tertiary_color: this.$store.state.teamColors.tertiary_color
			};
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	margin: 1% 1% 4% 1%;
	height: calc(89vh - 40px);
	align-items: center;
	flex-direction: column-reverse;
}
</style>
