import * as React from 'react';
import Grid from '@mui/material/Grid2';
import DescPanel from './DescPanel';
// import ChatHistoryPanel from './ChatHistoryPanel';
import ChatInputPanel from './ChatInputPanel';
import ChatHistoryPanel from './ChatHistoryPanel';

export default function RagPage() {
	return (
		<Grid container spacing={3}>
			{/* Description Panel */}
			<Grid size={12}>
				<DescPanel />
			</Grid>
			<Grid size={12}>
				<ChatHistoryPanel />
			</Grid>
			<Grid size={12}>
				<ChatInputPanel />
			</Grid>
		</Grid>
	);
}
