import * as React from 'react';
import { Box, Divider, Fab, Grid, Paper, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getChatResponse } from '../utils/LangChainLib';

export default function ChatHistoryPanel() {
	const [userInput, setUserInput] = React.useState('what is LangSmith in AI development?');
	const [sendReq, setSendReq] = React.useState(false);
	const [chatResponse, setChatResponse] = React.useState('');

	const handleSend = () => {
		setSendReq(true);
	};

	React.useEffect(() => {
		if (!sendReq) return;

		const fetchChatResponse = async () => {
			setChatResponse('Loading...');
			const res = await getChatResponse(userInput);
			setChatResponse(res); // assuming getChatResponse returns the response you want to display
			setUserInput('');
			setSendReq(false);
		};

		fetchChatResponse();
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
