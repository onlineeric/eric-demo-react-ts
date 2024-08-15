import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about the usage of Prompt Engineering in LLM AI chatbot.`,
	`It showcases a chatbot that connect to OpenAI's ChatGPT API, provided custom prompt to change the LLM response behavior.`,
	`The chatbot being prompted to behave as me, a senior full stack developer, demonstrating my AI development skills to potential employers.`,
	`You can ask the chatbot about who are you, what are you skills and experience, and what are you interested in.`,
];

export default function DescStatement() {
	return (
		<div>
			{DescText.map((text, index) => (
				<Typography key={index} variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{text}
				</Typography>
			))}
		</div>
	);
}
