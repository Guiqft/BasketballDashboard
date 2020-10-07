<template>
	<div :class="`team_${team.name}`"></div>
</template>

<script>
import Vue from "vue";
import MapTeamTooltip from "./MapTeamTooltip";

export default {
	name: "MapTeam",
	props: {
		team: { type: Object, default: null }
	},
	mounted() {
		// getting the countie element
		const countie = document.getElementsByClassName(
			`${this.$props.team.city.replace(/ /g, "")}`
		)[0];

		// Team div to insert Team element
		const element = document.getElementsByClassName(
			`team_${this.$props.team.name}`
		)[0];

		// dinamically instance of the Team element
		var ComponentClass = Vue.extend(MapTeamTooltip);
		var instance = new ComponentClass({
			propsData: {
				team: this.$props.team
			}
		});
		instance.$mount();

		// getting the countie coordinate and positioning Team element into div
		if (countie !== undefined) {
			var rect = countie.getBoundingClientRect();
			element.style.position = "absolute";
			element.style.top = rect.top + "px";
			element.style.left = rect.left + "px";
			element.appendChild(instance.$el);
		} else {
			console.log(
				`failed: ${this.$props.team.division.toLowerCase()}_division ${this.$props.team.city.replace(
					/ /g,
					""
				)}`
			);
		}
	}
};
</script>

<style></style>
