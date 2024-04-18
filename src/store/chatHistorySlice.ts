import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
export interface IChatMessageState {
	speaker: string;
	message: string;
	msgTime: string;
}

// Define the initial state using that type
const initialState: IChatMessageState[] = [];

export const chatHistorySlice = createSlice({
	name: 'chatHistory',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addMessage: (state, action: PayloadAction<IChatMessageState>) => {
			state.push(action.payload);
		},
		clearAllHistory: (state) => {
			state.splice(0, state.length);
		},
	},
});

export const { addMessage, clearAllHistory } = chatHistorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectChatHistory = (state: RootState) => state.chatHistory;

export default chatHistorySlice.reducer;
