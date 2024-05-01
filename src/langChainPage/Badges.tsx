import React from 'react';
import { Box, styled } from '@mui/material';

const StyledImg = styled('img')({
	height: '26px',
});

export default function Badges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
			<StyledImg src="https://img.shields.io/badge/AI-LLM-007ACC?logo=LLM&logoColor=white&style=flat" alt="LLM" />
			<StyledImg
				src="https://img.shields.io/badge/-LangChain-764ABC?logo=langchain&logoColor=white&style=flat"
				alt="LangChain"
			/>
			<StyledImg
				src="https://img.shields.io/badge/-OpenAI-0081CB?logo=openai&logoColor=white&style=flat"
				alt="OpenAI"
			/>
			<StyledImg
				src="https://img.shields.io/badge/-ChatGPT-512BD4?logo=chatgpt&logoColor=white&style=flat"
				alt="ChatGPT"
			/>{' '}
		</Box>
	);
}
