<template>
	<div class="container">
		<input v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search for Team or Player" />
        <div class="dropdown-list"></div>
	</div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return{
            inputValue: ''
        }
    },

    computed: {
        teamsList() {
            return this.$store.state.teams
        },
        playersList() {
            return this.$store.state.players
        }
    }
};
</script>

<style scoped>
.container {
	flex: 2;
	justify-content: center;
}
</style>
