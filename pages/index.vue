<template>
	<div class="backgroundImg">
		<div class="container">
			<div class="content">
				<Header />
				<div class="map">
					<Map :teams="teams" />
				</div>
			</div>

			<div class="team">
				<Team v-show="true" />
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
.backgroundImg {
	background: linear-gradient(
			4deg,
			rgba(41, 128, 185, 0.5) 0%,
			rgba(109, 213, 250, 0.7) 10%,
			rgba(255, 255, 255, 0.9) 100%
		),
		url(~assets/homeBackground.jpg) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	height: 100vh;
}

.container {
	display: flex;
	flex: 1;
}

.content {
	display: flex;
	flex-direction: column;
	flex: 2;
	max-width: 66%;
}

.map {
	justify-content: center;
	padding: 1% 4% 0px 4%;
}

.team {
	flex: 1;
}
</style>
