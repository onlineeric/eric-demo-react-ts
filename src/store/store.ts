import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loginReducer from './loginSlice';
import themeReducer from './themeSlice';
import serverResponsesReducer from './serverResponsesSlice';
import chatHistoryReducer from './chatHistorySlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginReducer,
		theme: themeReducer,
		serverResponses: serverResponsesReducer,
		chatHistory: chatHistoryReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
