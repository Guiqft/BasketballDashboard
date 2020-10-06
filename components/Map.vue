<template>
	<div>
		<svg-map :map="customUSA" />
	</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import Usa from "@svg-maps/usa";

export default {
	name: "Map",
	components: {
		SvgMap
	},
	data() {
		return {
			customUSA: {
				...Usa,
				label: "Custom map label",
				locations: Usa.locations.map(location => {
					console.log(location);

					if (location.name === "Ohio") {
						location.path.concat(
							" 234.45L1024.84,235.74L1024.63,236.69L1025….24L1025.44,227.54L1025.84,229.84L1026.23,232.13z"
						);
					}
					return location;
				})
			}
		};
	}
};
</script>

<style>
.svg-map {
	width: 100%;
	height: auto;
	stroke: none;
	stroke-width: 1;
	stroke-linecap: round;
	stroke-linejoin: round;
}
.svg-map__location {
	fill: #a1d99b;
	cursor: pointer;
}
.svg-map__location:focus,
.svg-map__location:hover {
	fill: #b8e2b3;
	outline: 0;
}
.svg-map__location[aria-checked="true"] {
	fill: #f4bc44;
}

#ak,
#hi {
	display: none;
}

#oh {
	fill: black;
}
</style>
