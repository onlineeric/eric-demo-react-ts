import React from 'react';
import { Box, styled } from '@mui/material';

const StyledImg = styled('img')({
	height: '26px',
});

export default function Badges() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
			<StyledImg src="https://img.shields.io/badge/AI-LLM-007ACC?logo=LLM&logoColor=white&style=flat" alt="LLM" />
			<StyledImg src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat" alt="Python" />
			<StyledImg
				src="https://img.shields.io/badge/Transformer-3776AB?style=flat&logo=python&logoColor=white"
				alt="Transformer"
			/>
		</Box>
	);
}
