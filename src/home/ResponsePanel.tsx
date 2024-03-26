import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import { DataGrid } from '@mui/x-data-grid';
import { useAppSelector } from '../store/hooks';
import { selectServerResponses } from '../store/serverResponsesSlice';

const columns = [
	{ field: 'server', headerName: 'Server', width: 300 },
	{ field: 'algorithm', headerName: 'Algorithm', width: 300 },
	{ field: 'parallelization', headerName: 'Parallelization', width: 200 },
	{ field: 'executionTime', headerName: 'Execution Time(ms)', width: 180 },
	{ field: 'memoryUsed', headerName: 'Memory Used', width: 150 },
	{ field: 'responsedAt', headerName: 'Responsed At', width: 200 },
];

// const rows = [
// 	{ id: 1, server: 'Minimal API server (c#)', executionTime: '620', memoryUsed: 32890 },
// 	{ id: 2, server: 'Controller based API server (c#)', executionTime: '615', memoryUsed: 32896 },
// 	{ id: 3, server: 'Gin API server (Golang)', executionTime: '625', memoryUsed: 32800 },
// ];

export default function ResponsePanel() {
	const responses = useAppSelector(selectServerResponses);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 'auto',
			}}
		>
			<Title>Responses from servers</Title>
			<Box sx={{ height: 300, width: '100%', minHeight: 200 }}>
				<DataGrid rows={responses} columns={columns} hideFooter />
			</Box>
		</Paper>
	);
}
