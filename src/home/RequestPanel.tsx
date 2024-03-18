import * as React from 'react';
import { Button, Input, Paper, Typography } from '@mui/material';
import Title from '../common/Title';

export default function RequestPanel() {
	// get env var
	const API_URL_eric_gin_server = process.env.REACT_APP_API_URL_eric_gin_server;
	console.log('API_URL_eric_gin_server:', API_URL_eric_gin_server);

	const [executeTimes, setExecuteTimes] = React.useState(500);

	const callAPIs = () => {
		console.log('callAPIs', executeTimes);
	};

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 240,
			}}
		>
			<Title>Request submit to servers</Title>
			<Typography variant="subtitle1">Minimal API server (c#):</Typography>
			<Typography variant="subtitle1">Controller based API server (c#):</Typography>
			<Typography variant="subtitle1">Gin API server (Golang):</Typography>
			<div>
				<hr />
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Typography variant="subtitle1">Execute times:</Typography>
				<Input
					type="number"
					value={executeTimes}
					sx={{ width: '100px', ml: 2 }}
					onChange={(e) => setExecuteTimes(parseInt(e.target.value))}
				/>
				<Button variant="contained" color="primary" sx={{ ml: 2 }} onClick={callAPIs}>
					Submit
				</Button>
			</div>
		</Paper>
	);
}
