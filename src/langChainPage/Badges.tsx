import React from 'react';
import { Box } from '@mui/material';

export default function Badges() {
	return (
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
	);
}
