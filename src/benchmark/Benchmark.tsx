import * as React from 'react';
import Grid from '@mui/material/Grid2';
import RequestPanel from './RequestPanel/RequestPanel';
import ResponsePanel from './ResponsePanel';
import ServerStatusPanel from './ServerStatusPanel/ServerStatusPanel';
import ResultChartPanel from './ResultChartPanel';
import DescPanel from './DescPanel';

export default function Benchmark() {
	return (
		<Grid container spacing={3}>
			{/* Description Panel */}
			<Grid size={12}>
				<DescPanel />
			</Grid>
			{/* Server Status Panel */}
			<Grid size={{ xs: 12, md: 5, xl: 4 }}>
				<ServerStatusPanel />
			</Grid>
			{/* Request Panel */}
			<Grid size={{ xs: 12, md: 7, xl: 8 }}>
				<RequestPanel />
			</Grid>
			{/* Response Panel */}
			<Grid size={12}>
				<ResponsePanel />
			</Grid>
			{/* result chat */}
			<Grid size={12}>
				<ResultChartPanel />
			</Grid>
		</Grid>
	);
}
