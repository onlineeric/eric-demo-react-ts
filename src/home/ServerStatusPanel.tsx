import * as React from 'react';
import { Box, Button, Paper, Typography, styled } from '@mui/material';
import Title from '../common/Title';
import ControllerBasedApiLib from '../utils/ControllerBasedApiLib';
import MinimalApiLib from '../utils/MinimalApiLib';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GinApiLib from '../utils/GinApiLib';

export default function ServerStatusPanel() {
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null>(null);

	const TickIcon = styled(CheckCircleIcon)({ color: 'green' });
	const CrossIcon = styled(CancelIcon)({ color: 'red' });

	const callAPIs = async () => {
		setControllerApiStatus(null);
		setMinimalApiStatus(null);
		setGinApiStatus(null);

		ControllerBasedApiLib.getStatus().then((res) => setMinimalApiStatus(res.status));
		MinimalApiLib.getStatus().then((res) => setControllerApiStatus(res.status));
		GinApiLib.getStatus().then((res) => setGinApiStatus(res.status));
	};

	const getStatusResult = (status: number | null) => {
		if (status === null) {
			return <></>;
		}
		if (status === 200) {
			return <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}><TickIcon /> Online</Box>; // eslint-disable-line prettier/prettier
		}
		return <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}><CrossIcon /> Offline, Http status: {status}</Box>; // eslint-disable-line prettier/prettier
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
			<Title>Server status</Title>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>Minimal API server (c#): {getStatusResult(minimalApiStatus)}</Box>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>
				Controller based API server (c#): {getStatusResult(controllerApiStatus)}
			</Box>
			<Box sx={{ display: 'flex', pt: 1, pb: 1 }}>Gin API server (Golang): {getStatusResult(ginApiStatus)}</Box>
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
