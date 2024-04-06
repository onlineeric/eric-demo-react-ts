import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import { useServerResWithConvertedDates } from '../store/useServerResWithConvertedDate';
import { BarChart } from '@mui/x-charts';

export default function ResultChatPanel() {
	const responsesWithConvertedDates = useServerResWithConvertedDates();  // eslint-disable-line
	// const chartData = convertResToChartData(responsesWithConvertedDates);

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 'auto',
			}}
		>
			<Title>Result Chat</Title>

			<Box sx={{ minWidth: 500, maxWidth: 800 }}>
				<BarChart
					layout="horizontal"
					yAxis={[{ data: chartDataSimple.labels, scaleType: 'band' }]}
					series={chartDataSimple.serverData.map((server) => ({
						id: server.id,
						label: server.name,
						data: server.data,
					}))}
					{...chartSetting}
				/>
			</Box>
		</Paper>
	);
}

const chartSetting = {
	sx: { p: 0.5 },
	height: 300,
};

const chartDataSimple = {
	labels: ['SHA256', 'Md5'], // algorithm
	serverData: [
		{ id: 'server1', name: 'server 1', data: [781, 1181] },
		{ id: 'server2', name: 'server 2', data: [481, 1281] },
		{ id: 'server3', name: 'server 3', data: [981, 1381] },
	],
};

// const responsesSimple = {
// 	serverResponses: [
// 		{
// 			id: 'server1',
// 			server: 'server 1',
// 			algorithm: 'SHA256',
// 			executionTime: 781,
// 		},
// 		{
// 			id: 'server2',
// 			server: 'server 2',
// 			algorithm: 'SHA256',
// 			executionTime: 481,
// 		},
// 		{
// 			id: 'server3',
// 			server: 'server 3',
// 			algorithm: 'SHA256',
// 			executionTime: 981,
// 		},
// 		{
// 			id: 'server1',
// 			server: 'server 1',
// 			algorithm: 'Md5',
// 			executionTime: 1181,
// 		},
// 		{
// 			id: 'server2',
// 			server: 'server 2',
// 			algorithm: 'Md5',
// 			executionTime: 1281,
// 		},
// 		{
// 			id: 'server3',
// 			server: 'server 3',
// 			algorithm: 'Md5',
// 			executionTime: 1381,
// 		},
// 	],
// };

// function convertResToChartData(responses: IResponseState[]) {
// }
