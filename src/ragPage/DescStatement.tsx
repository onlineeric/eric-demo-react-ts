import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about Retrieval Augmented Generation with LLM.`,
	`This page is in construction, will be updated soon.`,
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
