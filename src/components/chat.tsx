import React, {FC} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackIcon, SendIcon} from '../svgs';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {SafeAreaView} from 'react-native';
import {FlatList} from 'react-native';
import {MessageType} from '../types/message';

type ChatHeaerPorps = {
  name: string;
  avatar: string;
  isTyping: boolean;
};

export const ChatHeader: FC<ChatHeaerPorps> = ({name, avatar, isTyping}) => {
  return (
    <View className="flex w-full flex-row justify-between bg-neutral-500 p-3">
      <TouchableOpacity className="flex flex-row items-center rounded-full bg-neutral-400 p-2">
        <BackIcon width={20} height={20} />
      </TouchableOpacity>
      <View className="flex flex-row items-center space-x-2">
        {isTyping ? <Text>typing</Text> : null}
        <Text className="text-xl text-white">{name}</Text>
        <View className="rounded-full border-2 border-green-500 p-[1px]">
          <Image
            source={{uri: avatar}}
            className="h-[50px] w-[50px] rounded-full"
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
  return (
    <SafeAreaView className="h-[610px] pb-5">
      <FlatList
        data={messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        className="m-1"
      />
    </SafeAreaView>
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
          className={`max-w-[300px] rounded-md p-2 ${isMyMessage ? 'bg-neutral-400' : 'bg-neutral-300'}`}>
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
    onSend({content: data.message, role: 'user'});
    Keyboard.dismiss();
    setValue('message', '');
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      className=""
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <View className="flex w-full flex-row items-center bg-neutral-500 pb-6 pt-2">
        <View className="w-5/6 p-1">
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
                className={`rounded-xl bg-white px-3 text-xl shadow-red-600 ${errors.message ? 'animate-bounce' : 'animate-none'}`}
              />
            )}
            name="message"
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="m-auto rounded-full bg-neutral-200 p-2">
          <SendIcon width={30} height={30} fill={'none'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
