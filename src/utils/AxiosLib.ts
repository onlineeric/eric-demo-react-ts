import axios, { AxiosInstance, AxiosResponse } from 'axios';

class AxiosLib {
	private controllerBasedApi: AxiosInstance;
	private minimalApi: AxiosInstance;

	constructor() {
		console.log(
			'process.env.REACT_APP_API_URL_ericcontrollerbasedapi:',
			process.env.REACT_APP_API_URL_ericcontrollerbasedapi,
		);
		console.log('process.env.REACT_APP_API_URL_ericminimalapi:', process.env.REACT_APP_API_URL_ericminimalapi);
		this.controllerBasedApi = axios.create({
			baseURL: process.env.REACT_APP_API_URL_ericcontrollerbasedapi,
		});
		this.minimalApi = axios.create({
			baseURL: process.env.REACT_APP_API_URL_ericminimalapi,
		});
	}

	async getSha256Benchmark(exeTimes: number): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await this.controllerBasedApi.get(`/benchmark/Sha256/${exeTimes}`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	// Add more methods for other API endpoints
}

export default new AxiosLib();
