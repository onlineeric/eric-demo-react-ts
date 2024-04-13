import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { ChatOpenAI } from '@langchain/openai';

export default function ChatHistoryPanel() {
	const chatModel = new ChatOpenAI({});

	const getChatResponse = async () => {
		const chatRes = await chatModel.invoke('what is LangSmith?');
		return chatRes.content.toString();
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 220,
			}}
		>
			<Typography variant="body1" sx={{ lineHeight: 1.7 }}>
				<>{getChatResponse()}</>
			</Typography>
		</Paper>
	);
}
