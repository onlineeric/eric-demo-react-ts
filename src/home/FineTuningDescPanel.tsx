import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import Badges from '../fineTuningPage/Badges';
import DescStatement from '../fineTuningPage/DescStatement';

export default function FineTuningDescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 190,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>Fine Tuning Demo Page</Title>
				<DescStatement />
				<Badges />
			</Box>
		</Paper>
	);
}
