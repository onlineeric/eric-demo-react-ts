import * as React from 'react';
import { Paper } from '@mui/material';
import Title from '../common/Title';
import { DataGrid } from '@mui/x-data-grid';

export default function ResponsePanel() {
	const columns = [
		{ field: 'server', headerName: 'Server', width: 300 },
		{ field: 'executionTime', headerName: 'Execution Time(ms)', width: 180 },
		{ field: 'memoryUsed', headerName: 'Memory Used', width: 150 },
	];

	const rows = [
		{ id: 1, server: 'Minimal API server (c#)', executionTime: '620', memoryUsed: 32890 },
		{ id: 2, server: 'Controller based API server (c#)', executionTime: '615', memoryUsed: 32896 },
		{ id: 3, server: 'Gin API server (Golang)', executionTime: '625', memoryUsed: 32800 },
	];
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 300,
			}}
		>
			<Title>Responses from servers</Title>
			<div style={{ height: 220, width: '100%' }}>
				<DataGrid rows={rows} columns={columns} hideFooter />
			</div>
		</Paper>
	);
}
