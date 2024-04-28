import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';
import BenchmarkBadges from './Badges';
import DescStatement from './DescStatement';

export default function DescPanel() {
	const theme = useTheme();

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
				<Typography variant="body2" sx={{ lineHeight: 1.8, whiteSpace: 'nowrap' }}>
					{`For my profile please visit `}
					<a
						href="https://github.com/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my GitHub Repository here.
					</a>
				</Typography>
			</Box>
			<BenchmarkBadges />
		</Paper>
	);
}
