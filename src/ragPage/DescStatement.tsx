import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Subtitle = ({ children }: { children: React.ReactNode }) => (
	<Typography variant="subtitle1" color="primary" sx={{ mt: 1, lineHeight: 2, whiteSpace: 'nowrap' }}>
		{children}
	</Typography>
);

const DescText = [
	`This page demonstrates my knowledge of Retrieval Augmented Generation (RAG) in Large Language Models (LLMs).`,
];

export default function DescStatement() {
	const theme = useTheme();
	return (
		<div>
			{DescText.map((text, index) => (
				<Typography key={index} variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
					{text}
				</Typography>
			))}
			<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
				{`The chatbot uses a RAG model, incorporating this `}
				<a
					href="https://1drv.ms/b/c/f74ac61c7b901ffc/EfwfkHscxkoggPcvjgEAAAAB3IXRGjLcIh5YafPoIOevTA?e=e45YFc"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: theme.palette.mode === 'dark' ? 'lightblue' : 'inherit' }}
				>
					Brabantia Pressure Cooker User Manual PDF
				</a>
				{` for the retrieval document.`}
			</Typography>
			<Subtitle>About this Chatbot with RAG</Subtitle>
			<Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'nowrap' }}>
				{`This chatbot designed to provide information exclusively about the "Brabantia Pressure Cooker".`}
				<br />
				{`It will not response to any off-topic questions.`}
				<br />
				{`Please try question like:`}
				<br />
				{`- "How long does it take to cook a fish?", "How to clean it?", "How to open it"`}
				<br />
				{`- "Should I add salt before cooking?", "Slow cooking or fast cooking?", "Answer of 3 + 4 is?" etc.`}
			</Typography>
		</div>
	);
}
