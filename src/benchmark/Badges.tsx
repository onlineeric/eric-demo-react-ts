import * as React from 'react';
import { Box } from '@mui/material';

export default function BenchmarkBadges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
			<img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat" alt="React" />
			<img
				src="https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat"
				alt="TypeScript"
			/>
			<img src="https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=flat" alt="Redux" />
			<img
				src="https://img.shields.io/badge/-Material--UI-0081CB?logo=material-ui&logoColor=white&style=flat"
				alt="Material-UI"
			/>
			<img src="https://img.shields.io/badge/-C%23-512BD4?logo=.net&logoColor=white" alt=".NET" />
			<img src="https://img.shields.io/badge/-Minimal%20API-512BD4?logo=.net&logoColor=white" alt="Minimal API" />
			<img src="https://img.shields.io/badge/-%20Web%20API-512BD4?logo=.net&logoColor=white" alt=".NET Web API" />
			<img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
			<img
				src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white"
				alt="GitHub Actions"
			/>
			<img src="https://img.shields.io/badge/-CI%2FCD-5C6BC0?logo=jenkins&logoColor=white" alt="CI/CD" />
			<img src="https://img.shields.io/badge/-Azure-0089D6?logo=microsoft-azure&logoColor=white" alt="Azure" />
			<img src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white" alt="Docker" />
		</Box>
	);
}