import * as React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import Title from '../common/Title';
import ControllerBasedApiLib from '../utils/ControllerBasedApiLib';
import MinimalApiLib from '../utils/MinimalApiLib';

export default function RequestPanel() {
	// get env var
	const [executeTimes, setExecuteTimes] = React.useState(100);

	const callAPIs = async () => {
		if (executeTimes < 1 || executeTimes > 1000) {
			return;
		}
		console.log('callAPIs', executeTimes);
		const res = await ControllerBasedApiLib.getSha256Benchmark(executeTimes);
		console.log('controllerbasedApi res:', res);
		const res2 = await MinimalApiLib.getSha256Benchmark(executeTimes);
		console.log('minimalApi res:', res2);
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 250,
			}}
		>
			<Title>Request submit to servers</Title>
			<Typography variant="subtitle1">Minimal API server (c#):</Typography>
			<Typography variant="subtitle1">Controller based API server (c#):</Typography>
			<Typography variant="subtitle1">Gin API server (Golang):</Typography>
			<div>
				<hr />
			</div>
			<Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
				<TextField
					id="idTextExecTimes"
					label="Execute times"
					variant="outlined"
					value={executeTimes}
					type="number"
					onChange={(e) => setExecuteTimes(parseInt(e.target.value))}
					error={executeTimes < 1 || executeTimes > 1000}
					helperText={executeTimes < 1 || executeTimes > 1000 ? '1 ~ 1000' : ''}
				/>
				<Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={callAPIs}>
					Submit
				</Button>
			</Box>
		</Paper>
	);
}
