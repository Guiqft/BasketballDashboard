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
	}
};
