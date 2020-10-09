export const state = () => ({
	// Global Lists
	teams: [],
<<<<<<< Updated upstream
	selectedTeam: []
=======

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
>>>>>>> Stashed changes
});

export const mutations = {
	// Teams Actions
	setTeams(state, teamsData) {
		state.teams = teamsData;
	},

	setSelectedTeam(state, team) {
		state.selectedTeam = team;
<<<<<<< Updated upstream
=======
	},

	setSelectedTeamStats(state, stats) {
		state.selectedTeamStats = stats;
	},

	setTeamColors(state, team) {
		if (team.primary_color !== null) {
			state.selectedTeamColors.primary_color = team.primary_color.replace(
				/^/,
				"#"
			);
		}

		if (team.secondary_color !== null) {
			state.selectedTeamColors.secondary_color = team.secondary_color.replace(
				/^/,
				"#"
			);
		}

		if (team.tertiary_color !== null) {
			state.selectedTeamColors.tertiary_color = team.tertiary_color.replace(
				/^/,
				"#"
			);
		}

		if (team.quaternary_color !== null) {
			state.selectedTeamColors.quaternary_color = team.quaternary_color.replace(
				/^/,
				"#"
			);
		}
	},

	addLocation(state, location) {
		state.usedLocations.push(location);
>>>>>>> Stashed changes
	}
};
