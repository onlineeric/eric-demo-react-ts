import * as React from 'react';
import { Paper, TextField } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectChatHistory } from '../store/chatHistorySlice';

const useChatHistory = () => {
	const chatHistory = useAppSelector(selectChatHistory);
	const [chatHistoryText, setChatHistoryText] = React.useState('');
	React.useEffect(() => {
		setChatHistoryText(
			chatHistory
				.map((hist) => {
					const txt = `${hist.speaker}: \n${hist.message.trim()}\n\n`;
					return txt;
				})
				.join(''),
		);
	}, [chatHistory]);
	return chatHistoryText;
};

export default function ChatHistoryPanel() {
	const textFieldRef = React.useRef<HTMLTextAreaElement>(null);
	const chatHistoryText = useChatHistory();

	React.useEffect(() => {
		if (textFieldRef.current) {
			textFieldRef.current.scrollTop = textFieldRef.current.scrollHeight;
		}
	}, [chatHistoryText]);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<TextField fullWidth multiline rows={10} value={chatHistoryText} inputRef={textFieldRef} />
		</Paper>
	);
}
