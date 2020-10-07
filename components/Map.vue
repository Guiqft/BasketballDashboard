<template>
	<div>
		<svg-map :map="customUSA" :location-class="dynamicClass" />
		<MapTeam />
	</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import UsaCounties from "@svg-maps/usa.counties";

export default {
	name: "Map",
	components: {
		SvgMap
	},
	data() {
		return {
			customUSA: {
				...UsaCounties,
				label: "Basketball League Divisions",
				locations: UsaCounties.locations.map(location => {
					return location;
				})
			},

			dynamicClass: location => {
				switch (location.name.split(", ")[1]) {
					case "NV":
					case "CA":
					case "AZ":
					case "NM":
						return `pacific_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					case "WA":
					case "OR":
					case "ID":
					case "MT":
					case "WY":
					case "UT":
					case "CO":
					case "ND":
					case "SD":
					case "NE":
					case "KS":
					case "OK":
					case "MN":
					case "IA":
					case "MO":
						return `northwest_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					case "WI":
					case "MI":
					case "IL":
					case "IN":
					case "OH":
					case "KY":
					case "WV":
						return `central_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					case "TX":
					case "AR":
					case "LA":
					case "MS":
					case "TN":
						return `southwest_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					case "AL":
					case "GA":
					case "SC":
					case "FL":
					case "NC":
					case "VA":
					case "DC":
						return `southeast_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					case "ME":
					case "VT":
					case "NH":
					case "MA":
					case "CT":
					case "RI":
					case "NY":
					case "NJ":
					case "PA":
					case "DE":
					case "MD":
						return `atlantic_division ${location.name
							.split(", ")[0]
							.replace(/ /g, "")}`;
						break;

					default:
						return "hidden_state";
						break;
				}
			}
		};
	}
};
</script>

<style lang="scss">
.pacific_division {
	fill: green;
}

.pacific_division:hover {
	fill: black;
}

.northwest_division {
	fill: red;
}

.central_division {
	fill: blue;
}

.southwest_division {
	fill: purple;
}

.southeast_division {
	fill: aqua;
}

.atlantic_division {
	fill: brown;
}

.hidden_state {
	display: none;
}
</style>
