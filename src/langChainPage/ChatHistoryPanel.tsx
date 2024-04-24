import * as React from 'react';
import { Paper, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { dataModelList, selectChatHistory, selectDataModel, actions } from '../store/chatHistorySlice';

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
	const dataModel = useAppSelector(selectDataModel);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (textFieldRef.current) {
			textFieldRef.current.scrollTop = textFieldRef.current.scrollHeight;
		}
	}, [chatHistoryText]);

	const handleChangeModel = React.useMemo(
		() => (event: SelectChangeEvent<string>) => {
			dispatch(actions.setDataModel(event.target.value as string));
		},
		[],
	);

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
					{Object.keys(dataModelList).map((key) => (
						<MenuItem key={key} value={dataModelList[key as keyof typeof dataModelList]}>
							{dataModelList[key as keyof typeof dataModelList]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Paper>
	);
}
