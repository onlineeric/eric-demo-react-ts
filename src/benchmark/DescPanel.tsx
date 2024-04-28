import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';
import BenchmarkBadges from './Badges';

export default function DescPanel() {
	const theme = useTheme();

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 200,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>Benchmark page</Title>
				<Typography variant="body2" sx={{ lineHeight: 1.8, whiteSpace: 'nowrap' }}>
					{`This page is to demonstrate my full stack development knowledge of Node.js, React, C#, GoLang and more.`}
					<br />
					{`Sever Status panel get status from my Azure App Services, which hosts the backend API. Please wait while first time loading (free tier servers, may take a while to wake up).`}
					<br />
					{`Request submit to servers send request to my backend APIs, the result will be displayed in the table and the chart below.`}
					<br />
					{`Please send the request and check the comparison result, for my profile please visit `}
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
