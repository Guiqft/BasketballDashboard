<template>
	<div class="container">
		<input v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search for Team or Player" />
        <DropDownList class="dropdown-list" v-show="inputValue" :lists="lists" :inputValue="inputValue"/>
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
        lists() {
            const teams = this.$store.state.teams
            const players = this.$store.state.players

            return {teams, players}
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.dropdown-input{
    width: 100%;
    height: 3vh;
    padding: 3%;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    background: rgb(255, 255, 255);
	background: linear-gradient(
		0deg,
		rgba(216, 212, 209, 1) 0%,
		rgba(255, 255, 255, 1) 10%,
    	rgba(255, 255, 255, 1) 100%
	);

    font-weight: 600;
    color: #504b4b!important;
    border: none!important;
}

.dropdown-input:focus{
    outline: #e6e6e6!important
}

.dropdown-list{
    position: absolute;
    margin-top: 3.5vh;
}
</style>
