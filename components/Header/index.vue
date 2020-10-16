<template>
	<div class="container">
		<Logo class="logo"/>
		<SearchBar class="search-bar" :lists="lists" title="Search for Team or Player"/>
	</div>
</template>

<script>
export default {
	name: "Header",
    computed: {
        lists() {
            const teams = this.$store.state.teams
            const players = this.$store.state.players

            return {teams, players}
        }
    },
};
</script>

<style scoped>
.container {
	position: relative;
	display: flex;
	max-height: 19.7vh;
	flex: 1;
	flex-direction: row;
	align-items: center;
}

.logo{
	flex: 1;
}

.search-bar{
	flex: 1;
	margin-right: auto;
	margin-left: auto;
}
</style>
