import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Text, View} from 'react-native';
import {query} from '../services';

const Chat = () => {
  const {data, isPending, error} = useQuery({
    queryKey: ['chat'],
    queryFn: query,
  });

  if (isPending) {
    return (
      <View>
        <Text className=" text-5xl">Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text className="text-5xl text-red-500">Error</Text>
      </View>
    );
  }

  return (
    <View>
      <Text className="h-[300px] bg-red-500">Home screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Chat;
