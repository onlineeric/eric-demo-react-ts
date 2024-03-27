import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ResponseResult } from '../store/serverResponsesSlice';

class MinimalApiLib {
	private minimalApi: AxiosInstance;

	constructor() {
		this.minimalApi = axios.create({
			baseURL: process.env.REACT_APP_API_URL_ericminimalapi,
			auth: {
				username: process.env.REACT_APP_AUTH_USERNAME_ericminimalapi ?? '',
				password: process.env.REACT_APP_AUTH_PASSWORD_ericminimalapi ?? '',
			},
		});
	}

	async getSha256Benchmark(exeTimes: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await this.minimalApi.get(`/benchmark/Sha256/${exeTimes}`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async getStatus(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await this.minimalApi.get(`/status`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	createServerResponse(res: AxiosResponse): ResponseResult {
		// res.data is same structure as ResponseResult, no need to convert
		return res.data as ResponseResult;
	}
}

export default new MinimalApiLib();
