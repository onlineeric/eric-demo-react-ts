import * as React from 'react';
import { Box, Button, Paper, Typography, styled } from '@mui/material';
import Title from '../common/Title';
import ControllerBasedApiLib from '../utils/ControllerBasedApiLib';
import MinimalApiLib from '../utils/MinimalApiLib';
import SyncIcon from '@mui/icons-material/Sync';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GinApiLib from '../utils/GinApiLib';
import { keyframes } from '@emotion/react';

const LOADING_STATUS = 'loading';
const spin = keyframes`
0% { transform: rotate(360deg); }
1000% { transform: rotate(0deg); }
`;
const TickIcon = styled(CheckCircleIcon)({ color: 'green' });
const CrossIcon = styled(CancelIcon)({ color: 'red' });
const LoadingIcon = styled(SyncIcon)({ color: 'yellow', animation: `${spin} 2s linear infinite` });

const getStatusResult = (status: number | null | typeof LOADING_STATUS) => {
	if (status === null) {
		return <></>;
	}
	if (status === LOADING_STATUS) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
				<LoadingIcon /> Loading...
			</Box>
		); // eslint-disable-line prettier/prettier
	}
	if (status === 200) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
				<TickIcon /> Online
			</Box>
		); // eslint-disable-line prettier/prettier
	}
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
			<CrossIcon /> Offline, Http status: {status}
		</Box>
	); // eslint-disable-line prettier/prettier
};

const ServerStatusBox = ({ children }: { children: React.ReactNode }) => (
	<Box sx={{ display: 'flex', pt: 1, pb: 1, whiteSpace: 'nowrap' }}>{children}</Box>
);

export default function ServerStatusPanel() {
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);

	const callAPIs = React.useCallback(async () => {
		setControllerApiStatus(LOADING_STATUS);
		setMinimalApiStatus(LOADING_STATUS);
		setGinApiStatus(LOADING_STATUS);

		ControllerBasedApiLib.getStatus().then((res) => setMinimalApiStatus(res.status));
		MinimalApiLib.getStatus().then((res) => setControllerApiStatus(res.status));
		GinApiLib.getStatus().then((res) => setGinApiStatus(res.status));
	}, []);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 280,
			}}
		>
			<Title>Server status</Title>
			<Box sx={{ overflowX: 'auto' }}>
				<ServerStatusBox>
					<>Minimal API server (c#): {getStatusResult(minimalApiStatus)}</>
				</ServerStatusBox>
				<ServerStatusBox>
					<>Controller based API server (c#): {getStatusResult(controllerApiStatus)}</>
				</ServerStatusBox>
				<ServerStatusBox>
					<>Gin API server (Golang): {getStatusResult(ginApiStatus)}</>
				</ServerStatusBox>
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<hr />
				</div>
				<Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1, whiteSpace: 'nowrap' }}>
					<Typography variant="subtitle1">Get servers status:</Typography>
					<Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={callAPIs}>
						Submit
					</Button>
				</Box>
			</Box>
		</Paper>
	);
}
