<template>
	<div>
		<svg-map :map="customUSA" :location-class="dynamicClass"/>
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
	fill: #0D0D0D;
}

.northwest_division {
	fill:#595959;
}

.central_division {
	fill:#0D0D0D;
}

.southwest_division {
	fill:#D9D9D9;
}

.southeast_division {
	fill:#171E26;
}

.atlantic_division {
	fill: white;
}

.hidden_state {
	display: none;
}
</style>
