import * as React from 'react';
import { Paper, TextField, Select, MenuItem, FormControl, InputLabel, Slider, Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	dataModelList,
	selectChatHistory,
	selectDataModel,
	actions,
	selectTemperture,
} from '../store/chatHistorySlice';

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
	const temperture = useAppSelector(selectTemperture);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (textFieldRef.current) {
			textFieldRef.current.scrollTop = textFieldRef.current.scrollHeight;
		}
	}, [chatHistoryText]);

	// const handleChangeModel = React.useMemo(
	// 	() => (event: SelectChangeEvent<string>) => {
	// 		dispatch(actions.setDataModel(event.target.value as string));
	// 	},
	// 	[],
	// );

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
			<Box sx={{ flexGrow: 1, display: 'flex' }}>
				<FormControl sx={{ mt: 2.5, mr: 2, width: '200px' }}>
					<InputLabel id="model-select-label">Data Model</InputLabel>
					<Select
						labelId="model-select-label"
						id="model-select"
						value={dataModel}
						onChange={(e) => dispatch(actions.setDataModel(e.target.value as string))}
						sx={{ mt: 1.2 }}
					>
						{Object.keys(dataModelList).map((key) => (
							<MenuItem key={key} value={dataModelList[key as keyof typeof dataModelList]}>
								{dataModelList[key as keyof typeof dataModelList]}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Box sx={{ mt: 1, width: '300px' }}>
					<Typography gutterBottom variant="caption">
						Temperature
					</Typography>
					<Slider
						aria-label="Temperature"
						value={temperture}
						onChange={(e, value) => dispatch(actions.setTemperture(value as number))}
						valueLabelDisplay="auto"
						shiftStep={0.1}
						step={0.1}
						marks
						min={0}
						max={1}
						sx={{ mt: 1 }}
					/>
				</Box>
			</Box>
		</Paper>
	);
}
