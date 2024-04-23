import * as React from 'react';
import { Paper, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
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
	const [dataModel, setDataModel] = React.useState('gpt-3.5-turbo');

	React.useEffect(() => {
		if (textFieldRef.current) {
			textFieldRef.current.scrollTop = textFieldRef.current.scrollHeight;
		}
	}, [chatHistoryText]);

	const handleChangeModel = (event: SelectChangeEvent<string>) => {
		setDataModel(event.target.value as string);
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 380,
			}}
		>
			<TextField fullWidth multiline rows={10} value={chatHistoryText} inputRef={textFieldRef} />
			<FormControl sx={{ mt: 2.5 }}>
				<InputLabel id="model-select-label">Data Model</InputLabel>
				<Select
					labelId="model-select-label"
					id="model-select"
					value={dataModel}
					onChange={handleChangeModel}
					sx={{ mt: 1.2 }}
				>
					<MenuItem value={'gpt-3.5-turbo'}>gpt-3.5-turbo</MenuItem>
					<MenuItem value={'gpt-4'}>gpt-4</MenuItem>
				</Select>
			</FormControl>
		</Paper>
	);
}
