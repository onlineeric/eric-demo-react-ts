import * as React from 'react';
import { Paper, TextField } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectChatHistory } from '../store/chatHistorySlice';

export default function ChatHistoryPanel() {
	const chatHistory = useAppSelector(selectChatHistory);
	const [chatHistoryText, setChatHistoryText] = React.useState(''); // eslint-disable-line
	React.useEffect(() => {
		setChatHistoryText(chatHistory.map((hist) => hist.message).join());
	}, [chatHistory]);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<TextField fullWidth multiline rows={10} value={chatHistoryText} />
		</Paper>
	);
}
