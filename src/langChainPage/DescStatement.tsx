import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about AI, LLM and LangChain, along with their applications.`,
	`It showcases a chatbot that uses LangChain to connect to OpenAI's ChatGPT API.`,
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
