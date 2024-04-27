import * as React from 'react';
import { Grid } from '@mui/material';
import AppDescPanel from './AppDescPanel';

export default function Home() {
	return (
		<Grid container spacing={3}>
			{/* App Description Panel */}
			<Grid item xs={12}>
				<AppDescPanel />
			</Grid>
		</Grid>
	);
}
