<template>
	<div>
		<svg-map :map="customUSA" :location-class="dynamicClass" />
		<MapTeam v-for="team in teams" :key="team.team_id" :team="team" />
	</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import UsaCounties from "@svg-maps/usa.counties";
import { classifyLocation, customLocation } from "./utils";

export default {
	name: "Map",
	props: {
		teams: { type: Array, default: null }
	},
	components: {
		SvgMap
	},
	data() {
		return {
			customUSA: {
				...UsaCounties,
				label: "Basketball League Divisions"
			},

			dynamicClass: location => classifyLocation(location)
		};
	}
};
</script>

<style lang="scss">
.pacific_division {
	fill: #0054a3;
}

.northwest_division {
	fill: #003363;
}

.central_division {
	fill: #007cf0;
}

.southwest_division {
	fill: #00478a;
}

.southeast_division {
	fill: #0003b0;
}

.atlantic_division {
	fill: #27465c;
}

.hidden_state {
	display: none;
}
</style>
