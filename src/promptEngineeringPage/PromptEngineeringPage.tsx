import * as React from 'react';
import { Grid } from '@mui/material';
import DescPanel from './DescPanel';
import ChatHistoryPanel from './ChatHistoryPanel';
import ChatInputPanel from './ChatInputPanel';

export default function PromptEngineeringPage() {
	return (
		<Grid container spacing={3}>
			{/* Description Panel */}
			<Grid item xs={12}>
				<DescPanel />
			</Grid>
			<Grid item xs={12}>
				<ChatHistoryPanel />
			</Grid>
			<Grid item xs={12}>
				<ChatInputPanel />
			</Grid>
		</Grid>
	);
}
