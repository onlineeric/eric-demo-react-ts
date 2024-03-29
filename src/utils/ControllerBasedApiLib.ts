import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IResponseState } from '../store/serverResponsesSlice';

class ControllerBasedApiLib {
	private controllerBasedApi: AxiosInstance;

	constructor() {
		this.controllerBasedApi = axios.create({
			baseURL: process.env.REACT_APP_API_URL_ericcontrollerbasedapi,
			auth: {
				username: process.env.REACT_APP_AUTH_USERNAME_ericcontrollerbasedapi ?? '',
				password: process.env.REACT_APP_AUTH_PASSWORD_ericcontrollerbasedapi ?? '',
			},
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

	async getStatus(): Promise<AxiosResponse> {
		try {
			const response: AxiosResponse = await this.controllerBasedApi.get(`/status`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	convertResToState(res: AxiosResponse): IResponseState {
		// res.data is same structure as ResponseResult, no need to convert
		return res.data as IResponseState;
	}
}

export default new ControllerBasedApiLib();
