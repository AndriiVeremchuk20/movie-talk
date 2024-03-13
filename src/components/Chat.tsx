import React, {FC, useEffect, useRef} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackIcon, SendIcon} from '../svgs';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {FlatList} from 'react-native';
import {MessageType} from '../types/message';
import {useNavigation} from '@react-navigation/native';

type ChatHeaerPorps = {
  name: string;
  avatar: string;
  isTyping: boolean;
};

export const ChatHeader: FC<ChatHeaerPorps> = ({name, avatar, isTyping}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View className="flex w-full flex-row justify-between bg-orange-300 px-4 py-3 dark:bg-red-700">
      <TouchableOpacity onPress={handleBackPress} className="my-auto">
        <BackIcon width={20} height={20} />
      </TouchableOpacity>
      <View className="flex flex-row items-center space-x-3">
        {isTyping ? (
          <Text className="animate-ping text-white">typing</Text>
        ) : null}
        <Text className="text-xl font-bold text-white">{name}</Text>
        <View className="rounded-full border-2 border-green-500 bg-white p-[1px]">
          <Image
            source={{uri: avatar}}
            className="h-[55px] w-[55px] rounded-b-full"
          />
        </View>
      </View>
    </View>
  );
};

type ChatBodyProps = {
  messages: MessageType[];
};

export const ChatBody: FC<ChatBodyProps> = ({messages}) => {
  const messagesRef = useRef<FlatList | null>(null);

  useEffect(() => {
    messagesRef.current?.scrollToEnd({animated: true});
  }, [messages]);

  return (
    <View className="flex flex-1 flex-col bg-white/50 dark:bg-black/80">
      {messages.length === 0 ? (
        <View className="flex h-full items-center justify-center">
          <Text>Write something to start chat</Text>
        </View>
      ) : (
        <FlatList
          ref={messagesRef}
          data={messages}
          onLayout={() => messagesRef.current?.scrollToEnd({animated: true})}
          renderItem={({item}) => <ChatMessage message={item} />}
          className="m-2 mb-5"
        />
      )}
    </View>
  );
};

type MessageProps = {
  message: MessageType;
};

export const ChatMessage: FC<MessageProps> = ({message: {role, content}}) => {
  const isMyMessage = role === 'user';
  return (
    <View className="my-1 w-fit">
      <View
        className={`flex flex-col ${isMyMessage ? 'items-end' : 'items-start'}`}>
        <View
          className={`max-w-[300px] rounded-md p-2 ${isMyMessage ? 'bg-amber-200 dark:bg-rose-600' : 'bg-orange-200 dark:bg-orange-700'}`}>
          <Text className="text-xl">{content}</Text>
        </View>
      </View>
    </View>
  );
};

const ChatInputSchema = z.object({
  message: z.string(),
});

type FormValuesType = z.infer<typeof ChatInputSchema>;

type ChatInputFormProps = {
  onSend: (message: MessageType) => void;
};

export const ChatInputForm: FC<ChatInputFormProps> = ({onSend}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<FormValuesType>({
    resolver: zodResolver(ChatInputSchema),
    defaultValues: {message: ''},
  });

  const onSubmit: SubmitHandler<FormValuesType> = data => {
    if (!data.message) return;
    onSend({content: data.message, role: 'user'});
    Keyboard.dismiss();
    setValue('message', '');
  };

  return (
    <KeyboardAvoidingView className="flex w-full flex-row items-center space-x-2 bg-orange-400 p-2 dark:bg-red-700">
      <View className="flex-1">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Message"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="rounded-full bg-white/40 px-3 text-xl shadow-red-600"
            />
          )}
          name="message"
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="m-auto rounded-full bg-white/50 p-2">
        <SendIcon width={30} height={30} fill={'none'} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
