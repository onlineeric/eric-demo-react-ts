import * as React from 'react';
import { Paper, Typography } from '@mui/material';

export default function ChatHistoryPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 220,
			}}
		>
			<Typography variant="body1" sx={{ lineHeight: 1.7 }}>
				test
			</Typography>
		</Paper>
	);
}
