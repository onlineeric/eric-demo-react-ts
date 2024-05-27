import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about Fine Tuning LLM data model.`,
	`This page is in construction, please come back later.`,
];

export default function DescStatement() {
	return (
		<div>
			{DescText.map((text, index) => (
				<Typography key={index} variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{text}
				</Typography>
			))}
		</div>
	);
}
