import { resetStyle, highlightStyle, formatColor } from "./utils";

export const state = () => ({
	teams: [],
	selectedTeam: []
});

export const mutations = {
	setTeams(state, teamsData) {
		state.teams = teamsData;
	},

	setSelectedTeam(state, team) {
		state.selectedTeam = team;
	},

	setSelectedTeamStats(state, stats) {
		state.selectedTeamStats = stats;
	},

	setTeamColors(state, team) {
		state.selectedTeamColors.primary_color = formatColor(team.primary_color);
		state.selectedTeamColors.secondary_color = formatColor(
			team.secondary_color
		);
		state.selectedTeamColors.tertiary_color = formatColor(team.tertiary_color);
		state.selectedTeamColors.quaternary_color = formatColor(
			team.quaternary_color
		);
	},

	// Mutation to store the team location
	addLocation(state, location) {
		state.usedLocations.push(location);
	}
};
