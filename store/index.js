import { resetStyle, highlightStyle, formatColor } from "./utils";

// this handle with error 'do not mutate vuex store state outside mutation handlers'
export const strict = false

export const state = () => ({
	// Global Lists
	teams: [],
	teamsAverages: [],

	// Specific Team
	selectedTeam: [],
	selectedTeamStats: [],
	selectedTeamColors: {
		primary_color: 'black',
		secondary_color: 'black',
		tertiary_color: 'black',
		quaternary_color: 'black'
	},

	// Map Locations
	usedLocations: [],

	// Players
	players: [],
	playersStats: [],
	firstPlayer: [],
	secondPlayer: []
});

export const mutations = {
	/*
		Teams Actions
	*/
	setTeams (state) {
		this.$api.getTeams().then(teamsData => state.teams = teamsData)
	},

	setTeamsAverages (state) {
		const averages = ['personal_fouls', 'assists', 'steals', 'blocked_shots', 'turnovers']

		this.$api.getTeamAverages(averages).then(averagesValues => {
			state.teamsAverages = Object.values(averagesValues)
		})
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
			state.selectedTeamStats = stats[0];
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
	},

	/*
		Players Actions
	*/
	setPlayers (state) {
		this.$api.getPlayers().then(playersData => state.players = playersData)
	},

	setPlayersStats (state) {
		this.$api.getPlayersStats().then(statsData => state.playersStats = statsData)
	},

	setFirstPlayer (state, player) {
		state.firstPlayer = player
	},

	setSecondPlayer (state, player) {
		state.secondPlayer = player
	}
};
