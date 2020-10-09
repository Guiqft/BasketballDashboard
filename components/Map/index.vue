<template>
	<div>
		<svg-map :map="customUSA" :location-class="dynamicClass" />
		<MapTeam v-for="team in teams" :key="team.team_id" :team="team" />
	</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import UsaCounties from "@svg-maps/usa.counties";

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
<<<<<<< Updated upstream
				label: "Basketball League Divisions",
				locations: UsaCounties.locations.map(location => {
					if (location.name === "Madison, GA") location.name = "Atlanta, GA";

					return location;
				})
=======
				label: "Basketball League Divisions"
				// locations: UsaCounties.locations.map(location =>
				// 	customLocation(this.$store, location)
				// )
>>>>>>> Stashed changes
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
					case "OH":
					case "KY":
					case "WV":
					case "IN":
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

.northwest_division {
	fill: #0061a6;
}

.central_division {
	fill: #a6a511;
}

.southwest_division {
	fill: #a61311;
}

.southeast_division {
	fill: #595904;
}

.atlantic_division {
	fill: #27465c;
}

.hidden_state {
	display: none;
}
</style>
