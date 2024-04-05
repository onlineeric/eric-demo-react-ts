import React from 'react';
import { useAppSelector } from './hooks';
import { selectServerResponses } from './serverResponsesSlice';

export const useServerResWithConvertedDates = () => {
	const responses = useAppSelector(selectServerResponses);
	return React.useMemo(
		() =>
			responses.map((res) => ({
				...res,
				finishedTime_date: new Date(res.finishedTime ?? ''),
			})),
		[responses],
	);
};
