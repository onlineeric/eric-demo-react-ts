import * as React from 'react';
import { Paper } from '@mui/material';
import Title from '../common/Title';
import { useAppSelector } from '../store/hooks';
import { selectServerResponses } from '../store/serverResponsesSlice';

export default function ResultChatPanel() {
	const responses = useAppSelector(selectServerResponses);
	const responsesWithConvertedDates = responses.map((res) => ({
		...res,
		finishedTime_date: new Date(res.finishedTime ?? ''),
	}));

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 'auto',
			}}
		>
			<Title>Result Chat</Title>
			{responsesWithConvertedDates.length}
		</Paper>
	);
}
