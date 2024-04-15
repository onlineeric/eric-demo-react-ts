import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

const chatModel = new ChatOpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	//model: 'gpt-4',
});

const prompt = ChatPromptTemplate.fromMessages([
	['system', 'You are a world class technical documentation writer.'],
	['system', 'Provide your answer in point form.'],
	['user', '{input}'],
]);

const chain = prompt.pipe(chatModel).pipe(new StringOutputParser());

export default function ChatHistoryPanel() {
	const [chatResponse, setChatResponse] = React.useState('');

	React.useEffect(() => {
		const getChatResponse = async () => {
			const chatRes = await chain.invoke({
				input: 'what is LangSmith in AI development?',
			});
			console.log('chatRes:', chatRes);
			setChatResponse(chatRes);
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
