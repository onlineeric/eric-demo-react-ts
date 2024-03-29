import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface IResponseState {
	id: string | null;
	server: string | null;
	algorithm: string | null;
	parallelization: boolean | null;
	executionTime: number | null;
	memoryUsed: number | null;
	finishedTime: string | null;
}
export interface IResponseWithConvertedDate {
	id: string | null;
	server: string | null;
	algorithm: string | null;
	parallelization: boolean | null;
	executionTime: number | null;
	memoryUsed: number | null;
	finishedTime: string | null;
	finishedTime_date: Date;
}

// Define the initial state using that type
const initialState: IResponseState[] = [];

export const serverResponsesSlice = createSlice({
	name: 'serverResponses',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addResponse: (state, action: PayloadAction<IResponseState>) => {
			state.push(action.payload);
		},
		clearAllResponses: (state) => {
			state.splice(0, state.length);
		},
	},
});

export const { addResponse, clearAllResponses } = serverResponsesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectServerResponses = (state: RootState) => state.serverResponses;

export const selectResponsesWithConvertedDates = (state: RootState): IResponseWithConvertedDate[] => {
	return state.serverResponses.map((res) => ({
		...res,
		finishedTime_date: new Date(res.finishedTime ?? ''),
	}));
};

export default serverResponsesSlice.reducer;
