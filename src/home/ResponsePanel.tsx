import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import { DataGrid, GridValueFormatterParams } from '@mui/x-data-grid';
import { useAppSelector } from '../store/hooks';
import { selectResponsesWithConvertedDates } from '../store/serverResponsesSlice';
import { format } from 'date-fns';

const columns = [
	{ field: 'server', headerName: 'Server', width: 300 },
	{ field: 'algorithm', headerName: 'Algorithm', width: 300 },
	{ field: 'parallelization', headerName: 'Parallelization', width: 200 },
	{ field: 'executionTime', headerName: 'Execution Time(ms)', width: 180 },
	{ field: 'memoryUsed', headerName: 'Memory Used', width: 150 },
	{
		field: 'finishedTime_date',
		headerName: 'Responsed Time',
		width: 200,
		valueFormatter: (params: GridValueFormatterParams) => {
			const dateValue = params.value as Date;
			return format(dateValue, 'yyyy-MM-dd HH:mm:ss');
		},
	},
];

export default function ResponsePanel() {
	const responses = useAppSelector(selectResponsesWithConvertedDates);

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
