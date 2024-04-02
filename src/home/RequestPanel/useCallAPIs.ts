import * as React from 'react';
import ControllerBasedApiLib from '../../utils/ControllerBasedApiLib';
import MinimalApiLib from '../../utils/MinimalApiLib';
import GinApiLib from '../../utils/GinApiLib';
import { useAppDispatch } from '../../store/hooks';
import { addResponse, clearAllResponses } from '../../store/serverResponsesSlice';

const LOADING_STATUS = 'loading';

export const useCallAPIs = (numIterations: number | null) => {
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
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
			return;
		}

		dispatch(clearAllResponses());
		setControllerApiStatus(LOADING_STATUS);
		setMinimalApiStatus(LOADING_STATUS);
		setGinApiStatus(LOADING_STATUS);

		const cbPromise1 = ControllerBasedApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ControllerBasedApiLib.convertResToState(res)));
			return res.status;
		});
		const cbPromise2 = ControllerBasedApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(ControllerBasedApiLib.convertResToState(res)));
			return res.status;
		});
		Promise.all([cbPromise1, cbPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setControllerApiStatus(status);
		});

		const minPromise1 = MinimalApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(MinimalApiLib.convertResToState(res)));
			return res.status;
		});
		const minPromise2 = MinimalApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(MinimalApiLib.convertResToState(res)));
			return res.status;
		});
		Promise.all([minPromise1, minPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setMinimalApiStatus(status);
		});

		const ginPromise1 = GinApiLib.getSha256Benchmark(numIterations).then((res) => {
			dispatch(addResponse(GinApiLib.convertResToState(res)));
			return res.status;
		});
		const ginPromise2 = GinApiLib.getMd5Benchmark(numIterations).then((res) => {
			dispatch(addResponse(GinApiLib.convertResToState(res)));
			return res.status;
		});
		Promise.all([ginPromise1, ginPromise2]).then((statuses) => {
			const status = statuses.find((s) => s !== 200) ?? 200;
			setGinApiStatus(status);
		});
	}, [numIterations]);

	return [minimalApiStatus, controllerApiStatus, ginApiStatus];
};
