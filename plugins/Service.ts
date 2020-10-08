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
	 * Fetches teams
	 */
	public static async getTeams() {
		return await Service.postQuery("SELECT * FROM teams");
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
