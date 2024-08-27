import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { dataModelList } from '../utils/storeLib';
import { Assistant } from 'openai/resources/beta/assistants';
import { Thread } from 'openai/resources/beta/threads/threads';

// Define a type for the slice state
export interface IRagChatMessageState {
	speaker: string;
	message: string;
	msgTime: string;
}

interface IInitialState {
	messageHistory: IRagChatMessageState[];
	dataModel: string;
	temperture: number;
	assistant: Assistant | null;
	thread: Thread | null;
}

// Define the initial state using that type
const initialState: IInitialState = {
	messageHistory: [],
	dataModel: dataModelList.gpt4o_mini,
	temperture: 0.6,
	assistant: null,
	thread: null,
};

export const ragChatHistorySlice = createSlice({
	name: 'ragChatHistory',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addMessage: (state, action: PayloadAction<IRagChatMessageState>) => {
			state.messageHistory.push(action.payload);
		},
		clearAllHistory: (state) => {
			state.messageHistory.splice(0, state.messageHistory.length);
		},
		setDataModel: (state, action: PayloadAction<string>) => {
			state.dataModel = action.payload;
		},
		setTemperture: (state, action: PayloadAction<number>) => {
			state.temperture = action.payload;
		},
		setAssistant: (state, action: PayloadAction<Assistant>) => {
			state.assistant = action.payload;
		},
		setThread: (state, action: PayloadAction<Thread>) => {
			state.thread = action.payload;
		},
	},
});

export const actions = ragChatHistorySlice.actions;

export const selectRagChatHistory = (state: RootState) => state.ragChatHistory.messageHistory;
export const selectDataModel = (state: RootState) => state.ragChatHistory.dataModel;
export const selectTemperture = (state: RootState) => state.ragChatHistory.temperture;
export const selectAssistant = (state: RootState) => state.ragChatHistory.assistant;
export const selectThread = (state: RootState) => state.ragChatHistory.thread;

export default ragChatHistorySlice.reducer;
