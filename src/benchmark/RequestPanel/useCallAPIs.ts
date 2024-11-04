import * as React from 'react';
import ControllerBasedApiLib from '../../utils/ControllerBasedApiLib';
import MinimalApiLib from '../../utils/MinimalApiLib';
import GinApiLib from '../../utils/GinApiLib';
import { useAppDispatch } from '../../store/hooks';
import { addResponse, clearAllResponses } from '../../store/serverResponsesSlice';
import { LOADING_STATUS } from './getStatusResult';
import ExpressApiService from '../../utils/ExpressApiService';

// Custom hook to call APIs
export const useCallAPIs = (param: { iterations: number | null }) => {
	// Destructure iterations from param
	const { iterations: numIterations } = param;

	// State for API status
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [expressApiStatus, setExpressApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);

	const dispatch = useAppDispatch();

	// Effect hook to call APIs
	React.useEffect(() => {
		// If iterations is null, reset all statuses
		if (numIterations === null) {
			if (minimalApiStatus !== null) {
				setMinimalApiStatus(null);
			}
			if (controllerApiStatus !== null) {
				setControllerApiStatus(null);
			}
			if (ginApiStatus !== null) {
				setGinApiStatus(null);
			}
			if (expressApiStatus !== null) {
				setExpressApiStatus(null);
			}
			return;
		}

		// Clear all responses and set loading status
		dispatch(clearAllResponses());
		setControllerApiStatus(LOADING_STATUS);
		setMinimalApiStatus(LOADING_STATUS);
		setGinApiStatus(LOADING_STATUS);
		setExpressApiStatus(LOADING_STATUS);

		// Call ControllerBasedApiLib APIs, add responses to responseState and return status as promise
		const cbPromise1 = ControllerBasedApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ControllerBasedApiLib.convertResToState(res)));
			return res.status;
		});
		const cbPromise2 = ControllerBasedApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ControllerBasedApiLib.convertResToState(res)));
			return res.status;
		});
		// Set status after all ControllerBasedApiLib APIs are done
		Promise.all([cbPromise1, cbPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setControllerApiStatus(status);
		});

		// Call MinimalApiLib APIs, add responses to responseState and return status as promise
		const minPromise1 = MinimalApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(MinimalApiLib.convertResToState(res)));
			return res.status;
		});
		const minPromise2 = MinimalApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(MinimalApiLib.convertResToState(res)));
			return res.status;
		});
		// Set status after all MinimalApiLib APIs are done
		Promise.all([minPromise1, minPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setMinimalApiStatus(status);
		});

		// Call GinApiLib APIs, add responses to responseState and return status as promise
		const ginPromise1 = GinApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(GinApiLib.convertResToState(res)));
			return res.status;
		});
		const ginPromise2 = GinApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(GinApiLib.convertResToState(res)));
			return res.status;
		});
		// Set status after all GinApiLib APIs are done
		Promise.all([ginPromise1, ginPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setGinApiStatus(status);
		});

		// Call ExpressApiLib APIs, add responses to responseState and return status as promise
		const expressPromise1 = ExpressApiService.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ExpressApiService.convertResToState(res)));
			return res.status;
		});
		const expressPromise2 = ExpressApiService.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ExpressApiService.convertResToState(res)));
			return res.status;
		});
		// Set status after all ExpressApiService APIs are done
		Promise.all([expressPromise1, expressPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setExpressApiStatus(status);
		});
	}, [param]);

	// Return statuses
	return [minimalApiStatus, controllerApiStatus, ginApiStatus, expressApiStatus];
};
