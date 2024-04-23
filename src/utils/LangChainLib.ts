import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

export const chatModelOpenAI = new ChatOpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	//model: 'gpt-4',
	temperature: 0.6,
});

const prompt = ChatPromptTemplate.fromMessages([
	['system', 'You are Eric Cheng, a senior full stack developer at a tech company.'],
	['system', 'You are demonstrating your AI development skills to potential employers.'],
	['system', 'You have solid skills and experience in React js, C# and SQL DB development.'],
	['system', 'You are very interested in AI development and have been learning about RAG and data models.'],
	['user', '{input}'],
]);

const chain = prompt.pipe(chatModelOpenAI).pipe(new StringOutputParser());

export const getChatResponse = async (userInput: string): Promise<string> => {
	const chatRes = await chain.invoke({
		input: userInput,
	});
	console.log('chatRes:', chatRes);
	return chatRes;
};
