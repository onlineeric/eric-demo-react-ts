import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface ServerResponse {
	id: string | null;
	server: string | null;
	algorithm: string | null;
	parallelization: boolean | null;
	executionTime: number | null;
	memoryUsed: number | null;
	responsedAt: Date | null;
}

// Define the initial state using that type
const initialState: ServerResponse[] = [];

export const serverResponsesSlice = createSlice({
	name: 'serverResponses',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addResponse: (state, action: PayloadAction<ServerResponse>) => {
			state.push(action.payload);
		},
		clearAll: (state) => {
			state.splice(0, state.length);
		},
	},
});

export const { addResponse, clearAll } = serverResponsesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectServerResponses = (state: RootState) => state.serverResponses;

export default serverResponsesSlice.reducer;
