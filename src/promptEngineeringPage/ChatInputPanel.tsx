import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectDataModel, selectTemperture } from '../store/chatHistorySlice';
import { getChatResponse } from '../utils/LangChainLib';

const { addMessage } = actions;

export default function ChatInputPanel() {
	const [userInput, setUserInput] = React.useState('Who are you? What is RAG in AI development?');
	const [isLoading, setIsLoading] = React.useState(false);
	const dataModel = useAppSelector(selectDataModel);
	const temperture = useAppSelector(selectTemperture);
	const dispatch = useAppDispatch();

	const handleSend = React.useCallback(() => {
		if (!userInput.trim()) return;
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
		setIsLoading(true);
		getChatResponse(userInput, dataModel, temperture).then((res) => {
			dispatch(addMessage({ speaker: 'ChatGPT', message: res, msgTime: new Date().toLocaleTimeString() }));
			setIsLoading(false);
		});
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
						<Fab color="primary" aria-label="add" onClick={handleSend} disabled={isLoading}>
							{isLoading ? <CircularProgress size={24} /> : <SendIcon />}
						</Fab>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}
