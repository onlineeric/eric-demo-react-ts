import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import Badges from '../ragPage/Badges';
import DescStatement from '../ragPage/DescStatement';

export default function RagDescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 160,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>RAG Demo Page</Title>
				<DescStatement />
				<Badges />
			</Box>
		</Paper>
	);
}
