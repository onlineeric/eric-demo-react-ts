import React from 'react';
import { Typography } from '@mui/material';

export default function DescStatement() {
	return (
		<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
			{`This page is to demonstrate my knowledge about AI language models and their usage.`}
			<br />
			{`Here I used LangChain to connect to my OpenAI API and created a chatbot to interact with users.`}
			<br />
		</Typography>
	);
}
