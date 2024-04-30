import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';

export default function AppDescPanel() {
	const theme = useTheme();

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 380,
			}}
		>
			<Title>Eric Demo Project Site</Title>
			<Box sx={{ overflowX: 'auto' }}>
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`Welcome! I'm Eric Cheng, and this website is my personal demo project to showcase my full stack and AI development skills.`}
				</Typography>
				<Typography variant="subtitle1" color="primary" sx={{ mt: 1, lineHeight: 2, whiteSpace: 'nowrap' }}>
					{`About this Single Page App`}
				</Typography>
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`This UI is a Single Page App (SPA) built using React, TypeScript, and Material-UI.`}
					<br />
					{`All projects using GitHub Actions to build and deploy to `}
					<a
						href="https://hub.docker.com/u/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my Docker Hub Repository
					</a>
					{` and then my Azure App Service.`}
					<br />
					{`To view all source code and my information, please visit `}
					<a
						href="https://github.com/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my GitHub Repository here.
					</a>
				</Typography>
				<Typography variant="subtitle1" color="primary" sx={{ mt: 1, lineHeight: 2, whiteSpace: 'nowrap' }}>
					{`Benchmark Page`}
				</Typography>
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`The Benchmark page with a backend connents to my Azure App Services(Free Tier), which I built using .Net C#, and GoLang.`}
				</Typography>
				<Typography variant="subtitle1" color="primary" sx={{ mt: 1, lineHeight: 2, whiteSpace: 'nowrap' }}>
					{`LangChain Page`}
				</Typography>
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`The LangChain page features a chatbot that uses LangChain to connect to OpenAI's ChatGPT API.`}
				</Typography>
			</Box>
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
				<img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white" alt="GitHub" />
				<img
					src="https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white"
					alt="GitHub Actions"
				/>
				<img src="https://img.shields.io/badge/-CI%2FCD-5C6BC0?logo=jenkins&logoColor=white" alt="CI/CD" />
				<img src="https://img.shields.io/badge/-Azure-0089D6?logo=microsoft-azure&logoColor=white" alt="Azure" />
			</Box>
		</Paper>
	);
}
