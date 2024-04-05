import * as React from 'react';
import { Paper } from '@mui/material';
import Title from '../common/Title';
import { useServerResWithConvertedDates } from '../store/useServerResWithConvertedDate';

export default function ResultChatPanel() {
	const responsesWithConvertedDates = useServerResWithConvertedDates();

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
			Number of records: {responsesWithConvertedDates.length}
		</Paper>
	);
}
