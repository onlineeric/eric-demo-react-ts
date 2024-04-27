import * as React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import Title from '../../common/Title';
import { getStatusResult } from './getStatusResult';
import { useCallAPIs } from './useCallAPIs';
import { usePatienceWarning } from '../usePatienceWarning';

const boxSx = { display: 'flex', pt: 1, pb: 1, whiteSpace: 'nowrap' };

export default function RequestPanel() {
	// get env var
	const [numIterations, setNumIterations] = React.useState(100);
	const [sendIterations, setSendIterations] = React.useState<{ iterations: number | null }>({ iterations: null });
	const [minimalApiStatus, controllerApiStatus, ginApiStatus] = useCallAPIs(sendIterations);
	const patienceWarning = usePatienceWarning(minimalApiStatus, controllerApiStatus, ginApiStatus);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 280,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Box sx={{ display: 'flex' }}>
					<Title>Request submit to servers</Title>
					{patienceWarning && (
						<Typography sx={{ m: 1, fontSize: '11px', color: 'red' }}>
							First time loading may takes 1 - 2 minutes to wake up the Free Tier servers
						</Typography>
					)}
				</Box>
				<Box sx={boxSx}>Minimal API server (c#): {getStatusResult(minimalApiStatus)}</Box>
				<Box sx={boxSx}>Controller based API server (c#): {getStatusResult(controllerApiStatus)}</Box>
				<Box sx={boxSx}>Gin API server (Golang): {getStatusResult(ginApiStatus)}</Box>
				<div style={{ marginTop: '10px', marginBottom: '10px' }}>
					<hr />
				</div>
				<Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1, whiteSpace: 'nowrap' }}>
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
					<Button
						variant="contained"
						color="primary"
						sx={{ ml: 2 }}
						// On each click, the API is called. As the state is an object, its reference changes even if the value remains the same.
						onClick={() => setSendIterations({ iterations: numIterations })}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</Paper>
	);
}
