import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const dataModelList = {
	gpt3_5t: 'gpt-3.5-turbo',
	gpt4: 'gpt-4',
	gpt4t: 'gpt-4-turbo',
	gpt4o: 'gpt-4o',
	gpt4omini: 'gpt-4o-mini',
};

// Define a type for the slice state
export interface IChatMessageState {
	speaker: string;
	message: string;
	msgTime: string;
}

interface IInitialState {
	messageHistory: IChatMessageState[];
	dataModel: string;
	temperture: number;
}

// Define the initial state using that type
const initialState: IInitialState = {
	messageHistory: [],
	dataModel: dataModelList.gpt4o,
	temperture: 0.6,
};

export const chatHistorySlice = createSlice({
	name: 'chatHistory',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		addMessage: (state, action: PayloadAction<IChatMessageState>) => {
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
	},
});

export const actions = chatHistorySlice.actions;

export const selectChatHistory = (state: RootState) => state.chatHistory.messageHistory;
export const selectDataModel = (state: RootState) => state.chatHistory.dataModel;
export const selectTemperture = (state: RootState) => state.chatHistory.temperture;

export default chatHistorySlice.reducer;
