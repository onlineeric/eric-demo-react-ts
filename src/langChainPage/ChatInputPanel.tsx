import * as React from 'react';
import { Box, Fab, Grid, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../store/hooks';
import { addMessage } from '../store/chatHistorySlice';

export default function ChatInputPanel() {
	const [userInput, setUserInput] = React.useState('what is LangSmith in AI development?');
	const dispatch = useAppDispatch();

	const handleSend = () => {
		dispatch(addMessage({ speaker: 'User', message: userInput, msgTime: new Date().toLocaleTimeString() }));
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 200,
			}}
		>
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