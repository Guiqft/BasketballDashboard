<template>
	<div class="container">
		<div :class="`team_${team.name}`" />
	</div>
</template>

<script>
import Vue from "vue";
import MapTeamTooltip from "./MapTeamTooltip";

export default {
	name: "MapTeam",
	props: {
		team: { type: Object, default: null }
	},
	methods: {
		onHover: function() {
			const elements = document.querySelectorAll('div[class^="team_"]');
			elements.forEach(element => (element.style.zIndex = 10));
		}
	},

	mounted() {
		// getting the locations to deal with same positions
		const usedLocations = this.$store.state.usedLocations;

		// team attr
		const teamCity = `${this.$props.team.city.replace(/ /g, "")}`;
		const teamDivision = `${this.$props.team.division.toLowerCase()}`;

		// offset to changes the equal positions
		var yOffset = 0;
		var xOffset = 0;

		// check if the team location are already in use
		usedLocations.map(usedLocation => {
			if (usedLocation !== undefined) {
				if (usedLocation.includes(teamCity)) {
					yOffset = Math.random() * -60;
					xOffset = Math.random() * -60;
				} else if (usedLocation.includes(teamDivision)) {
					yOffset = Math.random() * -60;
					xOffset = Math.random() * -60;
				}
			}
		});

		// getting the countie element
		let countie = document.getElementsByClassName(teamCity)[0];

		// if countie doen't match, put on the division
		if (countie === undefined) {
			countie = document.getElementsByClassName(`${teamDivision}_division`)[0];
		}

		// Team div to insert Team component
		const element = document.getElementsByClassName(
			`team_${this.$props.team.name}`
		)[0];

<<<<<<< HEAD
		// dinamically instance of the Team component
=======
<<<<<<< Updated upstream
		// dinamically instance of the Team element
=======
		// dinamic instance of the Team component
>>>>>>> Stashed changes
>>>>>>> TeamsMap
		var ComponentClass = Vue.extend(MapTeamTooltip);
		var instance = new ComponentClass({
			propsData: {
				team: this.$props.team,
				store: this.$store
			}
		});
		instance.$mount();

		// getting the countie coordinate and positioning Team component into div
		if (countie !== undefined) {
			var rect = countie.getBoundingClientRect();
			element.style.position = "relative";
			element.style.top = rect.top + yOffset + "px";
			element.style.left = rect.left + xOffset + "px";
			element.appendChild(instance.$el);

			this.$store.commit("addLocation", teamCity);
			this.$store.commit("addLocation", teamDivision);
		}
	}
};
</script>

<style scoped>
.container {
	top: 0;
	left: 0;
	position: absolute;
	z-index: 1;
}

.container:hover {
	z-index: 10;
}
</style>
