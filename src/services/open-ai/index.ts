import {MessageType} from '@/src/types/message';
import OpenAiClient from './client';
import {ChatCompletion} from './types';

// remember system message eatch 10 repclic

export const query = async ({
  personName,
  movieName,
  messages,
}: {
  personName: string;
  movieName: string;
  messages: MessageType[];
}) => {
  // it would be better to specify the terms of the conversation
  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `Talk like youre ${personName} from ${movieName} and other series. But but answer briefly asso use emoji.`,
      },
      ...messages,
      {
        role: 'system',
        content: `Talk like youre ${personName} from ${movieName} and other series. But but answer briefly asso use emoji.`,
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
