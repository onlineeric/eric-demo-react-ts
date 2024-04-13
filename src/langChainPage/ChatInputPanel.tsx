import * as React from 'react';
import { Paper, Typography } from '@mui/material';

export default function ChatInputPanel() {
	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 200,
			}}
		>
			<Typography variant="body1">
				<>what is LangSmith?</>
			</Typography>
		</Paper>
	);
}
