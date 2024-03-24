import * as React from 'react';
import { Box, Button, Paper, TextField, styled } from '@mui/material';
import Title from '../common/Title';
import ControllerBasedApiLib from '../utils/ControllerBasedApiLib';
import MinimalApiLib from '../utils/MinimalApiLib';
import GinApiLib from '../utils/GinApiLib';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function RequestPanel() {
	const LOADING_STATUS = 'loading';
	// get env var
	const [executeTimes, setExecuteTimes] = React.useState(100);
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);

	const TickIcon = styled(CheckCircleIcon)({ color: 'green' });
	const CrossIcon = styled(CancelIcon)({ color: 'red' });
	const HourglassIcon = styled(HourglassEmptyIcon)({ color: 'yellow' });

	const callAPIs = async () => {
		if (executeTimes < 1 || executeTimes > 1000) {
			return;
		}
		setControllerApiStatus(LOADING_STATUS);
		setMinimalApiStatus(LOADING_STATUS);
		setGinApiStatus(LOADING_STATUS);

		console.log('callAPIs', executeTimes);
		ControllerBasedApiLib.getSha256Benchmark(executeTimes).then((res) => {
			console.log('Controller API res:', res);
			setControllerApiStatus(res.status);
		});
		MinimalApiLib.getSha256Benchmark(executeTimes).then((res) => {
			console.log('minimalApi res:', res);
			setMinimalApiStatus(res.status);
		});
		GinApiLib.getSha256Benchmark(executeTimes).then((res3) => {
			console.log('ginApi res:', res3);
			setGinApiStatus(res3.status);
		});
	};

	const getStatusResult = (status: number | null | typeof LOADING_STATUS) => {
		if (status === null) {
			return <></>;
		}
		if (status === LOADING_STATUS) {
			return <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}><HourglassIcon /> Loading...</Box>; // eslint-disable-line prettier/prettier
		}
		if (status === 200) {
			return <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}><TickIcon /> Completed</Box>; // eslint-disable-line prettier/prettier
		}
		return <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}><CrossIcon /> Error, Http status: {status}</Box>; // eslint-disable-line prettier/prettier
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<Title>Request submit to servers</Title>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>Minimal API server (c#): {getStatusResult(minimalApiStatus)}</Box>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>
				Controller based API server (c#): {getStatusResult(controllerApiStatus)}
			</Box>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>Gin API server (Golang): {getStatusResult(ginApiStatus)}</Box>
			<div style={{ marginTop: '10px', marginBottom: '10px' }}>
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
