import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';
import AppBadges from './AppBadges';

const Subtitle = ({ children }: { children: React.ReactNode }) => (
	<Typography variant="subtitle1" color="primary" sx={{ mt: 1, lineHeight: 2, whiteSpace: 'nowrap' }}>
		{children}
	</Typography>
);

const Body2 = ({ children }: { children: React.ReactNode }) => (
	<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
		{children}
	</Typography>
);

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
				<Body2>{`Welcome! I'm Eric Cheng, and this website is my personal demo project to showcase my full stack and AI development skills.`}</Body2>
				<Subtitle>About this Single Page App</Subtitle>
				<Body2>
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
						my GitHub Repository here
					</a>
					{` and `}
					<a
						href="https://huggingface.co/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my Hugging Face Repository here
					</a>
				</Body2>
				<Subtitle>{`Benchmark Page`}</Subtitle>
				<Body2>{`The Benchmark page with a backend connents to my Azure App Services(Free Tier), which I built using .Net C#, and GoLang.`}</Body2>
				<Subtitle>{`LangChain Page`}</Subtitle>
				<Body2>{`The LangChain page features a chatbot that uses LangChain to connect to OpenAI's ChatGPT API.`}</Body2>
			</Box>
			<AppBadges />
		</Paper>
	);
}
