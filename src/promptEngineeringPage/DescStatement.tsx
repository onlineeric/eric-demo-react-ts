import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about Prompt Engineering, along with their applications.`,
	`It showcases a chatbot that connect to OpenAI's ChatGPT API, provided custom prompt to change the LLM response behavior.`,
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
