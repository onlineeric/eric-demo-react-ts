import * as React from 'react';
import { Box, Button, Paper, Typography, styled } from '@mui/material';
import Title from '../common/Title';
import ControllerBasedApiLib from '../utils/ControllerBasedApiLib';
import MinimalApiLib from '../utils/MinimalApiLib';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ServerStatusPanel() {
	const callAPIs = async () => {
		const res = await ControllerBasedApiLib.getStatus();
		console.log('controllerbasedApi res:', res);
		setMinimalApiStatus(res.status);
		const res2 = await MinimalApiLib.getStatus();
		console.log('minimalApi res:', res2);
		setControllerApiStatus(res2.status);
	};

	const TickIcon = styled(CheckCircleIcon)({ color: 'green' });
	const CrossIcon = styled(CancelIcon)({ color: 'red' });

	const getStatusResult = (status: number | null) => {
		if (status === null) {
			return <></>;
		}
		if (status === 200) {
			return <Box sx={{ display: 'flex', alignItems: 'center' }}>Online <TickIcon /></Box>; // eslint-disable-line prettier/prettier
		}
		return <Box sx={{ display: 'flex', alignItems: 'center' }}>Offline <CrossIcon /> Http status: {status}</Box>; // eslint-disable-line prettier/prettier
	};

	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null>(null);
	const [ginApiStatus] = React.useState<number | null>(null);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<Title>Server status</Title>
			<Typography variant="body1">Minimal API server (c#): {getStatusResult(minimalApiStatus)}</Typography>
			<Typography variant="body1">Controller based API server (c#): {getStatusResult(controllerApiStatus)}</Typography>
			<Typography variant="body1">Gin API server (Golang): {getStatusResult(ginApiStatus)}</Typography>
			<div style={{ marginTop: '10px', marginBottom: '10px' }}>
				<hr />
			</div>
			<Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
				<Typography variant="subtitle1">Get servers status:</Typography>
				<Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={callAPIs}>
					Submit
				</Button>
			</Box>
		</Paper>
	);
}
