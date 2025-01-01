import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IChatMessage } from './LangChainLib';

class ExpressGraphQLService {
	private expressApi: AxiosInstance;
	private httpHeaders = {
		'Content-Type': 'application/json',
	};

	constructor() {
		this.expressApi = axios.create({
			baseURL: process.env.REACT_APP_API_URL_eric_express_server,
			auth: {
				username: process.env.REACT_APP_AUTH_USERNAME_eric_express_server ?? '',
				password: process.env.REACT_APP_AUTH_PASSWORD_eric_express_server ?? '',
			},
		});
	}

	async getLangChainResponse(
		userInput: string,
		dataModel: string,
		temperature: number,
		chatHistory: IChatMessage[],
	): Promise<AxiosResponse> {
		const query = `
			query GetLangChainResponse($input: GetResponseInput!) {
				getLangChainResponse(input: $input) {
					modelResponse
				}
			}
		`;
		const variables = {
			input: {
				userInput,
				dataModel,
				temperature,
				chatHistory,
			},
		};
		try {
			const response: AxiosResponse = await this.expressApi.post(
				'/graphql',
				{ query, variables },
				{ headers: this.httpHeaders },
			);
			return response;
		} catch (error) {
			console.error('Error in getLangChainResponse: ', error);
			throw error;
		}
	}
}

export default new ExpressGraphQLService();
