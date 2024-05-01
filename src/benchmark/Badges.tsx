import * as React from 'react';
import { Box, styled } from '@mui/material';

const StyledImg = styled('img')({
	height: '26px',
});

export default function BenchmarkBadges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1, alignItems: 'center' }}>
			<StyledImg src="https://img.shields.io/badge/-C%23-512BD4?logo=.net&logoColor=white" alt=".NET" />
			<StyledImg src="https://img.shields.io/badge/-Minimal%20API-512BD4?logo=.net&logoColor=white" alt="Minimal API" />
			<StyledImg src="https://img.shields.io/badge/-%20Web%20API-512BD4?logo=.net&logoColor=white" alt=".NET Web API" />
			<StyledImg src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
			<img width="50" src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" alt="GoLang" title="GoLang" />
			<img
				width="50"
				src="https://avatars.githubusercontent.com/u/7894478?s=48&v=4"
				alt="Gin Server"
				title="Gin Server"
			/>
		</Box>
	);
}
