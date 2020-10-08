export const state = () => ({
	teams: [],
	selectedTeam: [],
	teamColors: {
		primary_color: null,
		secondary_color: null,
		tertiary_color: null,
		quaternary_color: null
	}
});

export const mutations = {
	setTeams(state, teamsData) {
		state.teams = teamsData;
	},

	setSelectedTeam(state, team) {
		state.selectedTeam = team;
	},

	setTeamColors(state, team) {
		(state.teamColors.primary_color = team.primary_color.replace(/^/, "#")),
			(state.teamColors.secondary_color = team.secondary_color.replace(
				/^/,
				"#"
			)),
			(state.teamColors.tertiary_color = team.tertiary_color.replace(/^/, "#"));
	}
};
