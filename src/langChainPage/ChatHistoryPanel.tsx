import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { ChatOpenAI } from '@langchain/openai';

export default function ChatHistoryPanel() {
	const chatModel = new ChatOpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});

	const [chatResponse, setChatResponse] = React.useState('');

	React.useEffect(() => {
		const getChatResponse = async () => {
			const chatRes = await chatModel.invoke('what is LangSmith?');
			setChatResponse(chatRes.content.toString());
		};

		getChatResponse();
	}, []);

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
				<>{chatResponse}</>
			</Typography>
		</Paper>
	);
}
