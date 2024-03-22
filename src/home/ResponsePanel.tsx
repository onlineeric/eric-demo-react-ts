import * as React from 'react';
import { Paper } from '@mui/material';
import Title from '../common/Title';

export default function ResponsePanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 250,
			}}
		>
			<Title>Responses from servers</Title>
		</Paper>
	);
}
