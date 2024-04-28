import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import Badges from '../langChainPage/Badges';
import DescStatement from '../langChainPage/DescStatement';

export default function LangChainDescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 180,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>LangChain Demo Page</Title>
				<DescStatement />
				<Badges />
			</Box>
		</Paper>
	);
}
