import OpenAiClient from './client';
import {ChatCompletion} from './types';

export const query = async ({
  personName,
  message,
}: {
  personName: string;
  message: string;
}) => {
  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Talk like youre ${personName}. But but answer briefly.`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
  };

  const response = await OpenAiClient.post<ChatCompletion>(
    'chat/completions',
    body,
  );

  console.log(JSON.stringify(response.data));

  return response.data;
};
