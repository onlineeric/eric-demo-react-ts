import * as React from 'react';
import { Grid } from '@mui/material';
import AppDescPanel from './AppDescPanel';
import BenchmarkDescPanel from './BenchmarkDescPanel';
import LangChainDescPanel from './LangChainDescPanel';

export default function Home() {
	return (
		<Grid container spacing={3}>
			{/* App Description Panel */}
			<Grid item xs={12}>
				<AppDescPanel />
			</Grid>
			{/* Benchmark Description Panel */}
			<Grid item xs={12}>
				<BenchmarkDescPanel />
			</Grid>
			{/* LangChain Description Panel */}
			<Grid item xs={12}>
				<LangChainDescPanel />
			</Grid>
		</Grid>
	);
}
