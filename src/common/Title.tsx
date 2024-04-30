import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
	children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
	return (
		<Typography component="h2" variant="h5" color="primary" gutterBottom sx={{ whiteSpace: 'nowrap' }}>
			{props.children}
		</Typography>
	);
}
