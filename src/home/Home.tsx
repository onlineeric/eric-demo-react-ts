import * as React from 'react';
import Grid from '@mui/material/Grid2';
import AppDescPanel from './AppDescPanel';
import BenchmarkDescPanel from './BenchmarkDescPanel';
import PromptEngineeringDescPanel from './PromptEngineeringDescPanel';
import RagDescPanel from './RagDescPanel';
import FineTuningDescPanel from './FineTuningDescPanel';

export default function Home() {
	return (
		<Grid container spacing={3}>
			{/* App Description Panel */}
			<Grid size={12}>
				<AppDescPanel />
			</Grid>
			{/* Benchmark Description Panel */}
			<Grid size={12}>
				<BenchmarkDescPanel />
			</Grid>
			{/* Prompt Engineering Description Panel */}
			<Grid size={12}>
				<PromptEngineeringDescPanel />
			</Grid>
			<Grid size={12}>
				<RagDescPanel />
			</Grid>
			<Grid size={12}>
				<FineTuningDescPanel />
			</Grid>
		</Grid>
	);
}
