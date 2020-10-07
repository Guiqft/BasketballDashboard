<template>
	<div class="container">
		<div class="logoContainer">
			<img :src="team.wikipedia_logo_url" class="teamLogo" />
		</div>
		<div class="content">
			<div class="teamName">{{ team.name }} ({{ team.key }})</div>
		</div>
		<img class="downArrow" src="~assets/DownArrow.svg" height="10px" />
	</div>
</template>

<script lang="ts">
export default {
	name: "Teams",
	props: {
		team: { type: Object, default: null }
	}
};
</script>

<style scoped>
.container {
	display: flex;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -100%);
	flex-direction: column;
	align-items: center;
}
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px 7px 3px 7px;
	min-width: 65px;
	background-color: #edede6;

	-webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	border-radius: 4px;
}

.logoContainer {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	padding: 7px;
	min-width: 50px;
	background-color: #e0e0da;
	border-radius: 20px 20px 0px 0px;

	-webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
}

.teamLogo {
	max-height: 25px;
	max-width: 40px;
	display: flex;
	flex: 1;
}

.teamName {
	font-size: 0.8rem;
}

.downArrow {
	position: relative;
	top: -3px;
}

.container:hover {
	z-index: 10;
	background-color: black;
}
</style>
