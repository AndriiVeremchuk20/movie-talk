import OpenAiClient from './client';

export const query = async () => {
  const body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.',
      },
      {
        role: 'user',
        content:
          'Compose a poem that explains the concept of recursion in programming.',
      },
    ],
  };

  const response = await OpenAiClient.post('chat/completions', body);

  console.log(response.data);

  return response.data;
};
