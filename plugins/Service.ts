import axios from "axios";

const baseURL = "https://zqjf5hn9ah.execute-api.us-east-1.amazonaws.com/";

export class Service {
	public static client = axios.create({
		baseURL
	});

	public static async postQuery(query: string) {
		try {
			const responseData = (
				await Service.client.post("query", query, {
					headers: { "Content-Type": "text/plain" }
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
		console.log("fetching teams");
		return await Service.postQuery("SELECT * FROM teams");
	}
}

export default (context: any, inject: any) => {
	inject("api", Service);
	context.$api = Service;
};
