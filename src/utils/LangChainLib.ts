import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

// Initialize a chat history array
const chatHistory: [string, string][] = [
	['system', 'You are Eric Cheng, a senior full stack developer at a tech company.'],
	['system', 'You are demonstrating your AI development skills to potential employers.'],
	['system', 'You have solid skills and experience in React js, C# and SQL DB development.'],
	['system', 'You are very interested in AI development and have been learning about RAG and data models.'],
];

const chain = new StringOutputParser();

export const getChatResponse = async (userInput: string, dataModel: string, temperature: number): Promise<string> => {
	chatHistory.push(['user', userInput]);

	const prompt = ChatPromptTemplate.fromMessages(chatHistory);

	const chatModelOpenAI = new ChatOpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		model: dataModel,
		temperature: temperature,
	});

	// Link the updated prompt with the ChatOpenAI model
	const chatRes = await prompt.pipe(chatModelOpenAI).pipe(chain).invoke({
		input: userInput,
	});

	// Append the bot's response to the chat history
	chatHistory.push(['ai', chatRes]);

	return chatRes;
};
