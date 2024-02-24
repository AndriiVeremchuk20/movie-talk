import {useMutation} from '@tanstack/react-query';
import React, {FC, useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, View} from 'react-native';
import {query} from '../services';
import {ChatBody, ChatHeader, ChatInputForm} from '../components/Chat';
import {RootStackParamList} from '../types/navigation';
import {RouteProp} from '@react-navigation/native';
import Heros from '../config/heros';
import {MessageType} from '../types/message';
import {Alert} from 'react-native';

type ItemDetailsScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

interface ChatScreenProps {
  route: ItemDetailsScreenRouteProp;
}

const Chat: FC<ChatScreenProps> = ({route}) => {
  const person = Heros.filter(p => p.id === route.params.id)![0];
  const [messages, setMessages] = useState<MessageType[]>([]);

  const sendMessageMutation = useMutation({
    mutationFn: query,
    onSuccess(data) {
      setMessages(prev => [...prev, ...data.choices.map(item => item.message)]);
    },
    onError() {
      Alert.alert('Error');
    },
  });

  const onSendMessage = ({content, role}: MessageType) => {
    setMessages(prev => [...prev, {content, role}]);
    sendMessageMutation.mutate({
      personName: person.name,
      messages: [...messages, {content, role}],
      movieName: person.movie,
    });
  };

  return (
    <View>
      <SafeAreaView>
        <ChatHeader
          isTyping={sendMessageMutation.isPending}
          name={person.name}
          avatar={person.photoUrl}
        />

        <ChatBody messages={messages} />
        <ChatInputForm onSend={onSendMessage} />
      </SafeAreaView>
    </View>
  );
};

export default Chat;
