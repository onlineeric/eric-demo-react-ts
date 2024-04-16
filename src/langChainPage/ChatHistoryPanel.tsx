import * as React from 'react';
import { Box, Divider, Fab, Grid, Paper, TextField, Typography } from '@mui/material';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import SendIcon from '@mui/icons-material/Send';

const chatModel = new ChatOpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	//model: 'gpt-4',
	temperature: 0.6,
});

const prompt = ChatPromptTemplate.fromMessages([
	['system', 'You are a world class technical documentation writer.'],
	['user', '{input}'],
]);

const chain = prompt.pipe(chatModel).pipe(new StringOutputParser());

export default function ChatHistoryPanel() {
	const [userInput, setUserInput] = React.useState('what is LangSmith in AI development?');
	const [sendReq, setSendReq] = React.useState(false);
	const [chatResponse, setChatResponse] = React.useState('');

	const handleSend = () => {
		setSendReq(true);
	};

	React.useEffect(() => {
		if (!sendReq) return;

		const getChatResponse = async (userInput: string) => {
			const chatRes = await chain.invoke({
				input: userInput,
			});
			console.log('chatRes:', chatRes);
			setChatResponse(chatRes);
		};

		setChatResponse('Loading...');
		getChatResponse(userInput);
		setUserInput('');
		setSendReq(false);
	}, [sendReq]);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<Typography variant="body1">{chatResponse}</Typography>
			<Divider sx={{ mt: 2, mb: 2 }} />
			<Grid container>
				<Grid item xs={11}>
					<TextField fullWidth multiline rows={4} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
				</Grid>
				<Grid item xs={1}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
						<Fab color="primary" aria-label="add" onClick={handleSend}>
							<SendIcon />
						</Fab>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
