import { resetStyle, highlightStyle, formatColor } from "./utils";

export const strict = false

export const state = () => ({
	// Global Lists
	teams: [],

	// Specific Team
	selectedTeam: [],
	selectedTeamStats: [],
	selectedTeamColors: {
		primary_color: null,
		secondary_color: null,
		tertiary_color: null,
		quaternary_color: null
	},

	// Map Locations
	usedLocations: []
});

export const mutations = {
	// Teams Actions
	setTeams (state, teamsData) {
		state.teams = teamsData;
	},

	setSelectedTeam (state, team) {
		// changing the style of older selected team
		if (state.selectedTeam.length !== 0) {
			resetStyle(state.selectedTeam);
		}
		// changing the style of selected team to highlight him
		highlightStyle(team);

		state.selectedTeam = team;
	},

	setSelectedTeamStats (state, team) {
		this.$api.getTeamStats(team.team_id).then(stats => {
			state.selectedTeamStats = stats;
		});
	},

	setSelectedTeamColors (state, team) {
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
	addLocation (state, location) {
		state.usedLocations.push(location);
	}
};
