import React from 'react';
import { Box, styled } from '@mui/material';

const StyledImg = styled('img')({
	height: '26px',
});

export default function AppBadges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
			<StyledImg src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat" alt="React" />
			<StyledImg
				src="https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&style=flat"
				alt="TypeScript"
			/>
			<StyledImg src="https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=flat" alt="Redux" />
			<StyledImg
				src="https://img.shields.io/badge/-Material--UI-0081CB?logo=mui&logoColor=white&style=flat"
				alt="Material-UI"
			/>
			<StyledImg src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
			<StyledImg
				src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white"
				alt="GitHub Actions"
			/>
			<StyledImg src="https://img.shields.io/badge/-CI%2FCD-5C6BC0?logo=jenkins&logoColor=white" alt="CI/CD" />
			<StyledImg src="https://img.shields.io/badge/-Azure-0089D6?logo=microsoft-azure&logoColor=white" alt="Azure" />
		</Box>
	);
}
