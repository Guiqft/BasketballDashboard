import axios from "axios";

const baseURL = "https://zqjf5hn9ah.execute-api.us-east-1.amazonaws.com/";

export class Service {
	public static client = axios.create({
		baseURL: `${baseURL}`
	});

	public static async postQuery(query: string) {
		try {
			const responseData = (
				await Service.client.post("query", query, {
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "text/plain"
					}
				})
			).data;

			return responseData;
		} catch (e) {
			console.error(`Error fetching ${query}\n${e.message}`);
			return null;
		}
	}

	/**
	 * Get teams
	 */
	public static async getTeams() {
		const response = await Service.postQuery("SELECT * FROM teams");

		return response;
	}

	/**
	 * Get team averages
	 */
	public static async getTeamAverages(averagesList: Array<any>) {
		const querySQL = ["SELECT "];

		averagesList.forEach((average, idx, array) => {
			if (idx !== array.length - 1)
				querySQL.push(`AVG(${average}) as ${average},`);
			else querySQL.push(`AVG(${average}) as ${average}`);
		});

		querySQL.push("FROM team_stats");

		const responseData = await Service.postQuery(querySQL.join(" "));

		return responseData[0];
	}

	/**
	 * Get team stats
	 */
	public static async getTeamStats(team_id: Number) {
		const response = await Service.postQuery(
			`SELECT * FROM team_stats WHERE team_id = ${team_id}`
		);

		return response;
	}
}

export default (context: any, inject: any) => {
	inject("api", Service);
	context.$api = Service;
};
