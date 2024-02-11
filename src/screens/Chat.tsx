import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Text, View} from 'react-native';
import {query} from '../services';
import {ChatBody, ChatHeader, ChatInputForm} from '../components/chat';

const Chat = () => {
  //const {data, isPending, error} = useQuery({
  //  queryKey: ['chat'],
  //  queryFn: query,
  //});

  //if (isPending) {
  //  return (
  //    <View>
  //      <Text className=" text-5xl">Loading</Text>
  //    </View>
  //  );
  // }

  //if (error) {
  // return (
  //   <View>
  //    <Text className="text-5xl text-red-500">Error</Text>
  //  </View>
  // );
  //}

  return (
    <View>
      <ChatHeader name={'pied Peper'} avatar="https://i.pravatar.cc/" />
      <ChatBody />
      <ChatInputForm />
    </View>
  );
};

export default Chat;
