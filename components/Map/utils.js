export const customLocation = (store, location) => {
	store.commit("addLocation", location);

	const usedLocations = store.state.usedLocations;
	if (usedLocations.includes(location)) console.log(location.name);
	return location;
};

export const classifyLocation = location => {
	switch (location.name.split(", ")[1]) {
		case "NV":
		case "CA":
		case "AZ":
		case "NM":
			return `pacific_division ${location.name
				.split(", ")[0]
				.replace(/ /g, "")}`;

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

		case "TX":
		case "AR":
		case "LA":
		case "MS":
		case "TN":
			return `southwest_division ${location.name
				.split(", ")[0]
				.replace(/ /g, "")}`;

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

		default:
			return "hidden_state";
	}
};
