import * as React from 'react';
import { Grid } from '@mui/material';
import RequestPanel from './RequestPanel/RequestPanel';
import ResponsePanel from './ResponsePanel';
import ServerStatusPanel from './ServerStatusPanel';
import ResultChartPanel from './ResultChartPanel';
import AppDescPanel from './AppDescPanel';

export default function Benchmark() {
	return (
		<Grid container spacing={3}>
			{/* App Description Panel */}
			<Grid item xs={12}>
				<AppDescPanel />
			</Grid>
			{/* Server Status Panel */}
			<Grid item xs={12} md={5} xl={4}>
				<ServerStatusPanel />
			</Grid>
			{/* Request Panel */}
			<Grid item xs={12} md={7} xl={8}>
				<RequestPanel />
			</Grid>
			{/* Response Panel */}
			<Grid item xs={12}>
				<ResponsePanel />
			</Grid>
			{/* result chat */}
			<Grid item xs={12}>
				<ResultChartPanel />
			</Grid>
		</Grid>
	);
}
