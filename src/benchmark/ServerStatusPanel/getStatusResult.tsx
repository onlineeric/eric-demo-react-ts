import * as React from 'react';
import { Box, styled } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { keyframes } from '@emotion/react';
import { LOADING_STATUS } from './ServerStatusPanel';

const spin = keyframes`
0% { transform: rotate(360deg); }
1000% { transform: rotate(0deg); }
`;
const TickIcon = styled(CheckCircleIcon)({ color: 'green' });
const CrossIcon = styled(CancelIcon)({ color: 'red' });
const LoadingIcon = styled(SyncIcon)({ color: 'yellow', animation: `${spin} 2s linear infinite` });

export const getStatusResult = (status: number | null | typeof LOADING_STATUS) => {
	if (status === null) {
		return <></>;
	}
	if (status === LOADING_STATUS) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
				<LoadingIcon /> Loading...
			</Box>
		);
	}
	if (status === 200) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
				<TickIcon /> Online
			</Box>
		);
	}
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
			<CrossIcon /> Offline, Http status: {status}
		</Box>
	);
};
