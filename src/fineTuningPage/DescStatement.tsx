import React from 'react';
import { Typography } from '@mui/material';

const DescText = [
	`This page is to demonstrate my knowledge about Fine Tuning LLM data model.`,
	`Please visit my Hugging Face repo for my fine tuned LLM model.`,
	`This page is in construction, will update more information soon.`,
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
