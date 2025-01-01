import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Title from '../common/Title';
import { useTheme } from '@mui/material/styles';
import Badges from './Badges';
import DescStatement from './DescStatement';

export default function DescPanel() {
	const theme = useTheme();

	return (
		<Paper
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: 260,
			}}
		>
			<Box sx={{ overflowX: 'auto' }}>
				<Title>Prompt Engineering Demo Page</Title>
				<DescStatement />
				<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{`Please visit `}
					<a
						href="https://github.com/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my GitHub Repository here
					</a>
					{` and `}
					<a
						href="https://huggingface.co/onlineeric"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
					>
						my Hugging Face Repository here
					</a>
				</Typography>
				<Badges />
			</Box>
		</Paper>
	);
}
