export const state = () => ({
	// Global Lists
	teams: [],
<<<<<<< HEAD
	selectedTeam: [],
	selectedTeamStats: [],
	teamColors: {
=======
<<<<<<< Updated upstream
	selectedTeam: []
=======

	// Specific Team
	selectedTeam: [],
	selectedTeamStats: [],
	selectedTeamColors: {
>>>>>>> TeamsMap
		primary_color: null,
		secondary_color: null,
		tertiary_color: null,
		quaternary_color: null
<<<<<<< HEAD
	}
=======
	},

	// Map Locations
	usedLocations: []
>>>>>>> Stashed changes
>>>>>>> TeamsMap
});

export const mutations = {
	// Teams Actions
	setTeams(state, teamsData) {
		state.teams = teamsData;
	},

	setSelectedTeam(state, team) {
		state.selectedTeam = team;
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
>>>>>>> TeamsMap
	},

	setSelectedTeamStats(state, stats) {
		state.selectedTeamStats = stats;
	},

	setTeamColors(state, team) {
<<<<<<< HEAD
		(state.teamColors.primary_color = team.primary_color.replace(/^/, "#")),
			(state.teamColors.secondary_color = team.secondary_color.replace(
				/^/,
				"#"
			)),
			(state.teamColors.tertiary_color = team.tertiary_color.replace(/^/, "#"));
=======
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
>>>>>>> TeamsMap
	}
};
