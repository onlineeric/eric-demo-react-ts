import OpenAI from 'openai';
export const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export async function getAssistant(id: string) {
	const assistant = await openai.beta.assistants.retrieve(id);
	return assistant;
}
