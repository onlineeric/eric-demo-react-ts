import * as React from 'react';
import { Box, Paper } from '@mui/material';
import Title from '../common/Title';
import { useServerResWithConvertedDates } from '../store/useServerResWithConvertedDate';
import { BarChart } from '@mui/x-charts';

export default function ResultChatPanel() {
	const responsesWithConvertedDates = useServerResWithConvertedDates();  // eslint-disable-line

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
			<Box sx={{ height: 300, width: '100%', minHeight: 200 }}>
				<BarChart
					layout="horizontal"
					series={[
						{ data: testingData.server1.data, label: testingData.server1.name, id: testingData.server1.id },
						{ data: testingData.server2.data, label: testingData.server2.name, id: testingData.server2.id },
						{ data: testingData.server3.data, label: testingData.server3.name, id: testingData.server3.id },
					]}
					yAxis={[{ data: testingData.algorithm, scaleType: 'band' }]}
					{...chartSetting}
				/>
			</Box>
		</Paper>
	);
}

const chartSetting = {
	sx: { p: 0.5 },
};

const testingData = {
	algorithm: ['SHA256', 'Md5'],
	server1: {
		id: 'server1',
		name: 'server 1',
		data: [781, 882],
	},
	server2: {
		id: 'server2',
		name: 'server 2',
		data: [581, 872],
	},
	server3: {
		id: 'server3',
		name: 'server 3',
		data: [481, 442],
	},
};
