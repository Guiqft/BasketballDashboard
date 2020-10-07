<template>
	<div class="team"></div>
</template>

<script>
import Vue from "vue";
import Teams from "./Teams";

export default {
	name: "MapTeam",
	props: {
		team: { type: Object, default: null }
	},
	mounted() {
		const countie = document.getElementsByClassName("pacific_division Lea")[0];

		countie.setAttribute("ref", "Lea");

		var rect = countie.getBoundingClientRect();

		var ComponentClass = Vue.extend(Teams);
		var instance = new ComponentClass({
			propsData: {
				positionTop: rect.top,
				positionLeft: rect.left
			}
		});
		instance.$mount();

		const element = document.getElementsByClassName("team")[0];

		element.style.position = "absolute";
		element.style.top = rect.top + "px";
		element.style.left = rect.left + "px";
		element.appendChild(instance.$el);

		console.log(element.style);
	}
};
</script>

<style></style>
