import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

const prompt = ChatPromptTemplate.fromMessages([
	['system', 'You are a world class technical documentation writer.'],
	['user', '{input}'],
]);

export default function ChatHistoryPanel() {
	const chatModel = new ChatOpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});
	const chain = prompt.pipe(chatModel);

	const [chatResponse, setChatResponse] = React.useState('');

	React.useEffect(() => {
		const getChatResponse = async () => {
			const chatRes = await chain.invoke({
				input: 'what is LangSmith?',
			});
			console.log('chatRes:', chatRes);
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
				height: 300,
			}}
		>
			<Typography variant="body1" sx={{ lineHeight: 1.7 }}>
				<>{chatResponse}</>
			</Typography>
		</Paper>
	);
}
