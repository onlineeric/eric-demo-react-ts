import React from 'react';
import { Typography } from '@mui/material';

export default function DescStatement() {
	return (
		<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
			{`This page is to demonstrate my knowledge about AI, LLM and LangChain, along with their applications.`}
			<br />
			{`It showcases a chatbot that uses LangChain to connect to OpenAI's ChatGPT API.`}
			<br />
		</Typography>
	);
}
