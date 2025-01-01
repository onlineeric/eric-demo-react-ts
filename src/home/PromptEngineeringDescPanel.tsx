import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import Badges from '../promptEngineeringPage/Badges';
import DescStatement from '../promptEngineeringPage/DescStatement';

export default function PromptEngineeringDescPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 230,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>Prompt Engineering Demo Page</Title>
				<DescStatement />
				<Badges />
			</Box>
		</Paper>
	);
}
