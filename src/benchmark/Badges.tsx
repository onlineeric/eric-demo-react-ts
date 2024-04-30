import * as React from 'react';
import { Box } from '@mui/material';

export default function BenchmarkBadges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
			<img src="https://img.shields.io/badge/-C%23-512BD4?logo=.net&logoColor=white" alt=".NET" />
			<img src="https://img.shields.io/badge/-Minimal%20API-512BD4?logo=.net&logoColor=white" alt="Minimal API" />
			<img src="https://img.shields.io/badge/-%20Web%20API-512BD4?logo=.net&logoColor=white" alt=".NET Web API" />
			<img src="https://img.shields.io/badge/-GoLang-00ADD8?logo=go&logoColor=white" alt="GoLang" />
			<img src="https://img.shields.io/badge/-Gin%20Server-00ADD8?logo=gin&logoColor=white" alt="Gin Server" />
			<img src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
		</Box>
	);
}
