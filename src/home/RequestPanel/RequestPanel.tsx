import * as React from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';
import Title from '../../common/Title';
import { getStatusResult } from './getStatusResult';
import { useCallAPIs } from './useCallAPIs';

export default function RequestPanel() {
	// get env var
	const [numIterations, setNumIterations] = React.useState(100);
	const [sendIterations, setSendIterations] = React.useState<number | null>(null);
	const [minimalApiStatus, controllerApiStatus, ginApiStatus] = useCallAPIs(sendIterations);

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
					id="idNumIterations"
					label="Number of Test Iterations"
					variant="outlined"
					value={numIterations}
					type="number"
					onChange={(e) => setNumIterations(parseInt(e.target.value))}
					error={numIterations < 1 || numIterations > 1000}
					helperText={numIterations < 1 || numIterations > 1000 ? '1 ~ 1000' : ''}
				/>
				<Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={() => setSendIterations(numIterations)}>
					Submit
				</Button>
			</Box>
		</Paper>
	);
}
