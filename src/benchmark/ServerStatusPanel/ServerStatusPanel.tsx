import * as React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Title from '../../common/Title';
import ControllerBasedApiLib from '../../utils/ControllerBasedApiLib';
import MinimalApiLib from '../../utils/MinimalApiLib';
import GinApiLib from '../../utils/GinApiLib';
import { getStatusResult } from './getStatusResult';
import { usePatienceWarning } from '../usePatienceWarning';
import ExpressApiService from '../../utils/ExpressApiService';

export const LOADING_STATUS = 'loading';

const ServerStatusBox = ({ children }: { children: React.ReactNode }) => (
	<Box sx={{ display: 'flex', pt: 1, pb: 1, whiteSpace: 'nowrap' }}>{children}</Box>
);

export default function ServerStatusPanel() {
	const [minimalApiStatus, setMinimalApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [controllerApiStatus, setControllerApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [ginApiStatus, setGinApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const [expressApiStatus, setExpressApiStatus] = React.useState<number | null | typeof LOADING_STATUS>(null);
	const patienceWarning = usePatienceWarning(minimalApiStatus, controllerApiStatus, ginApiStatus, expressApiStatus);

	const callAPIs = React.useCallback(async () => {
		setControllerApiStatus(LOADING_STATUS);
		setMinimalApiStatus(LOADING_STATUS);
		setGinApiStatus(LOADING_STATUS);
		setExpressApiStatus(LOADING_STATUS);

		ControllerBasedApiLib.getStatus().then((res) => setMinimalApiStatus(res.status));
		MinimalApiLib.getStatus().then((res) => setControllerApiStatus(res.status));
		GinApiLib.getStatus().then((res) => setGinApiStatus(res.status));
		ExpressApiService.getStatus().then((res) => setExpressApiStatus(res.status));
	}, []);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 320,
			}}
		>
			<Box sx={{ display: 'flex' }}>
				<Title>Server status</Title>
				{patienceWarning && (
					<Typography sx={{ m: 1, fontSize: '11px', color: 'red' }}>
						First time loading may takes 1 - 2 minutes to wake up the Free Tier servers
					</Typography>
				)}
			</Box>
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
				<ServerStatusBox>
					<>Express API server (NodeJS): {getStatusResult(expressApiStatus)}</>
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
