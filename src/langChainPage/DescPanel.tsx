import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';

export default function DescPanel() {
	const theme = useTheme();

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
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`This page is to demonstrate my knowledge about AI language models and their usage.`}
					<br />
					{`Here I used LangChain to connect to my OpenAI API and created a chatbot to interact with users.`}
					<br />
					{`Please visit `}
					<a
						href="https://github.com/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my GitHub Repository here.
					</a>
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
					<img src="https://img.shields.io/badge/-LLM-007ACC?logo=LLM&logoColor=white&style=flat" alt="LLM" />
					<img
						src="https://img.shields.io/badge/-LangChain-764ABC?logo=langchain&logoColor=white&style=flat"
						alt="LangChain"
					/>
					<img src="https://img.shields.io/badge/-OpenAI-0081CB?logo=openai&logoColor=white&style=flat" alt="OpenAI" />
					<img
						src="https://img.shields.io/badge/-ChatGPT-512BD4?logo=chatgpt&logoColor=white&style=flat"
						alt="ChatGPT"
					/>{' '}
				</Box>
			</Box>
		</Paper>
	);
}
