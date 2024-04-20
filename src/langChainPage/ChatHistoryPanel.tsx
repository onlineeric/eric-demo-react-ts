import * as React from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectChatHistory } from '../store/chatHistorySlice';

export default function ChatHistoryPanel() {
	const chatHistory = useAppSelector(selectChatHistory);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<Grid container>
				<Grid item xs={12}>
					<TextField fullWidth multiline rows={4} value={chatHistory} />
				</Grid>
			</Grid>
		</Paper>
	);
}
