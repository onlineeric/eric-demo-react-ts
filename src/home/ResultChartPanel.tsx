import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import { useServerResWithConvertedDates } from '../store/useServerResWithConvertedDate';
import { BarChart } from '@mui/x-charts';

interface IChartData {
	labels: string[];
	serverData: IServerData[];
}

interface IServerData {
	name: string;
	data: number[];
}

///////////// convert responses to chart data in the format of IChartData
// {
// 	labels: ['SHA256', 'Md5'], // algorithm
// 	serverData: [
// 		{ name: 'server 1', data: [781, 1181] },
// 		{ name: 'server 2', data: [481, 1281] },
// 		{ name: 'server 3', data: [981, 1381] },
// 	],
// };
const useResponsesChartData = (): IChartData => {
	const responses = useServerResWithConvertedDates();

	const algorithms = Array.from(new Set(responses.map((r) => r.algorithm)));
	const serverData: IServerData[] = [];

	responses.forEach((response) => {
		let server = serverData.find((s) => s.name === response.server);
		if (!server) {
			server = { name: response.server, data: new Array(algorithms.length).fill(0) };
			serverData.push(server);
		}
		const algorithmIndex = algorithms.indexOf(response.algorithm);
		server.data[algorithmIndex] = response.executionTime;
	});

	return {
		labels: algorithms,
		serverData: serverData,
	};
};

export default function ResultChartPanel() {
	const chartData = useResponsesChartData();

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
					yAxis={[{ data: chartData.labels, scaleType: 'band' }]}
					series={chartData.serverData.map((server) => ({
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
