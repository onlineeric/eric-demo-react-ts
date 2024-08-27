import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectAssistant, selectTemperture, selectThread } from '../store/ragChatHistorySlice';
import { TextContentBlock } from 'openai/resources/beta/threads/messages';
import { openai } from '../utils/OpenAiLib';
import { Thread } from 'openai/resources/beta/threads/threads';
import { Assistant } from 'openai/resources/beta/assistants';
import { selectDataModel } from '../store/chatHistorySlice';

const { addMessage, setAssistant, setThread } = actions;

const getResponse = async (thread: Thread, userInput: string, assistant: Assistant) => {
	if (!thread || !assistant) return '';
	let resResult = '';
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
	const [userInput, setUserInput] = React.useState('How long does it take to cook a fish?');
	const dispatch = useAppDispatch();
	const assistant = useAppSelector(selectAssistant);
	const thread = useAppSelector(selectThread);
	const tempature = useAppSelector(selectTemperture);
	const dataModel = useAppSelector(selectDataModel);

	React.useEffect(() => {
		if (!assistant) {
			openai.beta.assistants.retrieve('asst_HPYYWe9uIJjAZjSNSVdrByXn').then((res) => dispatch(setAssistant(res)));
		}
		if (!thread) {
			openai.beta.threads.create().then((res) => dispatch(setThread(res)));
		}
	}, [assistant, thread, dispatch]);

	const handleSend = React.useCallback(async () => {
		if (!thread || !assistant) return;
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
		if (assistant && (assistant?.temperature !== tempature || assistant?.model !== dataModel)) {
			const updatedAssistant = await openai.beta.assistants.update(assistant.id, {
				temperature: tempature,
				model: dataModel,
			});
			dispatch(actions.setAssistant(updatedAssistant));
		}
		getResponse(thread!, userInput, assistant!).then((res) =>
			dispatch(addMessage({ speaker: 'ChatGPT', message: res, msgTime: new Date().toLocaleTimeString() })),
		);
		setUserInput('');
	}, [dispatch, thread, userInput, assistant, tempature, dataModel]);

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
