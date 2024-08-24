import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectDataModel, selectTemperture } from '../store/ragChatHistorySlice';
import { getChatResponse } from '../utils/LangChainLib';
import { OpenAI } from 'openai';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';

const { addMessage } = actions;
const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export default function ChatInputPanel() {
	const [userInput, setUserInput] = React.useState('How long does Brabantia Pressure Cooker take to cook meat?');
	const dataModel = useAppSelector(selectDataModel);
	const temperture = useAppSelector(selectTemperture);
	const dispatch = useAppDispatch();

	const [assistant, setAssistant] = React.useState<OpenAI.Beta.Assistants.Assistant | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars
	const [thread, setThread] = React.useState<OpenAI.Beta.Thread | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars

	React.useEffect(() => {
		const runAsync = async () => {
			const resAss = await openai.beta.assistants.retrieve('asst_HPYYWe9uIJjAZjSNSVdrByXn');
			setAssistant(resAss);
			const resThread = await openai.beta.threads.create();
			setThread(resThread);
			await openai.beta.threads.messages.create(resThread.id, {
				role: 'user',
				content: userInput,
			});
			const run = await openai.beta.threads.runs.createAndPoll(resThread.id, {
				assistant_id: resAss.id,
			});
			if (run.status === 'completed') {
				const messages = await openai.beta.threads.messages.list(run.thread_id);
				for (const message of messages.data.reverse()) {
					console.log(`${message.role} > ${(message.content[0] as TextContentBlock).text.value}`);
				}
			} else {
				console.log('status:', run.status);
			}
		};
		runAsync();
	}, []);

	const handleSend = React.useCallback(() => {
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
		getChatResponse(userInput, dataModel, temperture).then((res) =>
			dispatch(addMessage({ speaker: 'ChatGPT', message: res, msgTime: new Date().toLocaleTimeString() })),
		);
		setUserInput('');
	}, [dispatch, userInput, dataModel, temperture]);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 160,
			}}
		>
			<Grid container>
				<Grid item xs={11}>
					<TextField fullWidth multiline rows={4} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
				</Grid>
				<Grid item xs={1}>
					<Box
						sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%', minWidth: '60px' }}
					>
						<Fab color="primary" aria-label="add" onClick={handleSend}>
							<SendIcon />
						</Fab>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
