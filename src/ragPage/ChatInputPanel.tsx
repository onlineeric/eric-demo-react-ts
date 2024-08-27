import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectDataModel, selectTemperture } from '../store/ragChatHistorySlice';
import { OpenAI } from 'openai';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';
import { openai } from '../utils/OpenAiLib';
import { Thread } from 'openai/resources/beta/threads/threads';
import { Assistant } from 'openai/resources/beta/assistants';

const { addMessage } = actions;

const getResponse = async (thread: Thread, userInput: string, assistant: Assistant) => {
	let resResult = '';
	console.log('thread', thread);
	if (thread) {
		await openai.beta.threads.messages.create(thread!.id, {
			role: 'user',
			content: userInput,
		});
		const run = await openai.beta.threads.runs.createAndPoll(thread!.id, {
			assistant_id: assistant!.id,
		});
		if (run.status === 'completed') {
			const messages = await openai.beta.threads.messages.list(run.thread_id);
			for (const message of messages.data.reverse()) {
				resResult = (message.content[0] as TextContentBlock).text.value;
			}
		} else {
			resResult = `Sorry, OpenAI API responsed with an error, status is ${run.status}. Please try again.`;
		}
	}
	return resResult;
};

export default function ChatInputPanel() {
	const [userInput, setUserInput] = React.useState('How long does Brabantia Pressure Cooker take to cook meat?');
	const dataModel = useAppSelector(selectDataModel);
	const temperture = useAppSelector(selectTemperture);
	const dispatch = useAppDispatch();

	const [assistant, setAssistant] = React.useState<OpenAI.Beta.Assistants.Assistant | null>(null);
	const [thread, setThread] = React.useState<OpenAI.Beta.Thread | null>(null);

	React.useEffect(() => {
		openai.beta.assistants.retrieve('asst_HPYYWe9uIJjAZjSNSVdrByXn').then((res) => setAssistant(res));
		openai.beta.threads.create().then((res) => {
			console.log('create thread', res);
			setThread(res);
		});
	}, []);

	const handleSend = React.useCallback(() => {
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
		getResponse(thread!, userInput, assistant!).then((res) =>
			dispatch(addMessage({ speaker: 'ChatGPT', message: res, msgTime: new Date().toLocaleTimeString() })),
		);
		setUserInput('');
	}, [dispatch, addMessage, thread, userInput, assistant, dataModel, temperture]);

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
