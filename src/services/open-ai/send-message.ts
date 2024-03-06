import OpenAiClient from './client';
import {type MessageType} from '@/src/types/message';
import {type ChatCompletion} from './types';

const condition = ({
  heroName,
  movieName,
}: {
  heroName: string;
  movieName: string;
}) =>
  `Talk like you're ${heroName} from ${movieName} and other series. But answer briefly and use emojis. Be as realistic as possible. If you need to swear, swear. If you need to scare, scare. Completely copy the character's habits.`;

export const sendMessage = async ({
  heroName,
  movieName,
  messages,
}: {
  heroName: string;
  movieName: string;
  messages: MessageType[];
}) => {
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: condition({heroName, movieName}),
      },
      ...messages,
      {
        role: 'system',
        content: condition({heroName, movieName}),
      },
    ],
  };

  const response = await OpenAiClient.post<ChatCompletion>(
    'chat/completions',
    payload,
  );

  return response.data;
};
