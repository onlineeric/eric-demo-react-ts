import OpenAI from 'openai';
const openai = new OpenAI();

export async function getAssistant(id: string) {
	const assistant = await openai.beta.assistants.retrieve(id);
	return assistant;
}
