import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import BenchmarkBadges from '../benchmark/Badges';
import DescStatement from '../benchmark/DescStatement';

export default function DescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 240,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>Benchmark page</Title>
				<DescStatement />
			</Box>
			<BenchmarkBadges />
		</Paper>
	);
}
