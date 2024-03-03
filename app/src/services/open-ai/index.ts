import {MessageType} from '@/src/types/message';
import OpenAiClient from './client';
import {ChatCompletion} from './types';

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
        content: `Talk like you're ${personName} from ${movieName} and other series. But answer briefly and use emojis. Be as realistic as possible. If you need to swear, swear. If you need to scare, scare. Completely copy the character's habits.`,
      },
      ...messages,
      {
        role: 'system',
        content: `Talk like you're ${personName} from ${movieName} and other series. But answer briefly and use emojis. Be as realistic as possible. If you need to swear, swear. If you need to scare, scare. Completely copy the character's habits.`,
      },
    ],
  };

  const response = await OpenAiClient.post<ChatCompletion>(
    'chat/completions',
    body,
  );

  return response.data;
};
