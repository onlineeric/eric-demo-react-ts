import React from 'react';
import { LOADING_STATUS } from './ServerStatusPanel/ServerStatusPanel';

export function usePatienceWarning(
	minimalApiStatus: number | null | typeof LOADING_STATUS,
	controllerApiStatus: number | null | typeof LOADING_STATUS,
	ginApiStatus: number | null | typeof LOADING_STATUS,
): boolean {
	const [patienceWarning, setPatienceWarning] = React.useState(false);

	React.useEffect(() => {
		// display patience warning if the servers are still loading after a certain time
		const timeout = setTimeout(() => {
			if (
				!patienceWarning &&
				(minimalApiStatus === LOADING_STATUS ||
					controllerApiStatus === LOADING_STATUS ||
					ginApiStatus === LOADING_STATUS)
			) {
				setPatienceWarning(true);
			}
		}, 2000);

		if (
			minimalApiStatus !== LOADING_STATUS &&
			controllerApiStatus !== LOADING_STATUS &&
			ginApiStatus !== LOADING_STATUS
		) {
			clearTimeout(timeout);
			setPatienceWarning(false);
		}
		return () => clearTimeout(timeout);
	}, [patienceWarning, minimalApiStatus, controllerApiStatus, ginApiStatus]);

	return patienceWarning;
}
