export const state = () => ({
	teams: []
});

export const mutations = {
	setTeams(state, { teamsData }) {
		console.log("aqui");
		state.teams = teamsData;
	}
};
