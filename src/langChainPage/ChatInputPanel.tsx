import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../store/hooks';
import { addMessage } from '../store/chatHistorySlice';
import { getChatResponse } from '../utils/LangChainLib';

export default function ChatInputPanel() {
	const [userInput, setUserInput] = React.useState('Who are you? What is RAG in AI development?');
	const dispatch = useAppDispatch();

	const handleSend = () => {
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
		getChatResponse(userInput).then((res) =>
			dispatch(addMessage({ speaker: 'ChatGPT', message: res, msgTime: new Date().toLocaleTimeString() })),
		);
		setUserInput('');
	};

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
