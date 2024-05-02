import React from 'react';
import { Typography } from '@mui/material';

const TEXTS = [
	'This page is to demonstrate my full stack development knowledge of Node.js, React, C#, GoLang and more.',
	'Sever Status panel get status from my Azure App Services, which hosts the backend API. Please wait while first time loading (free tier servers, may take a while to wake up).',
	'Request submit to servers send request to my backend APIs, the result will be displayed in the table and the chart below.',
	'Please send the request and check the comparison result.',
];

export default function DescStatement() {
	return (
		<div>
			{TEXTS.map((text, index) => (
				<Typography key={index} variant="body2" sx={{ lineHeight: 1.8, whiteSpace: 'nowrap' }}>
					{text}
				</Typography>
			))}
		</div>
	);
}
