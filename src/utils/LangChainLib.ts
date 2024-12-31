import ExpressGraphQLService from './ExpressGraphQLService';

export interface IChatMessage {
	role: string;
	message: string;
}

// Initialize a chat history array
const chatHistory: IChatMessage[] = [
	{ role: 'system', message: 'You are Eric Cheng, a senior full stack developer at a tech company.' },
	{ role: 'system', message: 'You are demonstrating your AI development skills to potential employers.' },
	{ role: 'system', message: 'You have solid skills and experience in React js, C# and SQL DB development.' },
	{
		role: 'system',
		message: 'You are very interested in AI development and have been learning about RAG and data models.',
	},
];

export const getChatResponse = async (userInput: string, dataModel: string, temperature: number): Promise<string> => {
	chatHistory.push({ role: 'user', message: userInput } as IChatMessage);

	const res = await ExpressGraphQLService.getLangChainResponse(userInput, dataModel, temperature, chatHistory);
	const chatRes = res.data.data.getLangChainResponse.modelResponse;

	// Append the bot's response to the chat history
	chatHistory.push({ role: 'ai', message: chatRes } as IChatMessage);

	return chatRes;
};
