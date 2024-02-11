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

type ChatHeaerPorps = {
  name: string;
  avatar: string;
};

export const ChatHeader: FC<ChatHeaerPorps> = ({name, avatar}) => {
  return (
    <View className="flex w-full flex-row justify-between bg-neutral-500 p-3">
      <TouchableOpacity className="flex flex-row items-center rounded-full bg-neutral-400 p-2">
        <BackIcon width={20} height={20} />
      </TouchableOpacity>
      <View className="flex flex-row items-center space-x-2">
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

type MessageType = {
  id: number;
  text: string;
  date: string;
  isMyMsg: boolean;
};

export const ChatBody = () => {
  const Messages: MessageType[] = [
    {
      id: 1,
      text: 'Lorem ipsum doctor',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 2,
      text: 'Some text;lsdfkgjkdjfglkjdhsflgk jdhslfjhglkdjsfhlgjhlfkjdh gkjhdf',
      date: '10-11-2023',
      isMyMsg: false,
    },
    {
      id: 3,
      text: 'Lorem ipsum doctord slfkglsdfhjgkdjh  kgljhdlkgfjhdkljhfglkjdhslkg jkd gkdh sghj',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 4,
      text: 'Lorem ipsum doctor kdfjshglkjdh kgjhkjlkdjshfglkjhdklsfghlkd jhglk dhjs flkgjhdkl fjglkdjh gfkjh dsgfkjhkdsf',
      date: '10-11-2023',
      isMyMsg: false,
    },
    {
      id: 5,
      text: 'Lorem ipsum doctor',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 6,
      text: 'Some text;lsdfkgjkdjfglkjdhsflgk jdhslfjhglkdjsfhlgjhlfkjdh gkjhdf',
      date: '10-11-2023',
      isMyMsg: false,
    },
    {
      id: 7,
      text: 'Lorem ipsum doctord slfkglsdfhjgkdjh  kgljhdlkgfjhdkljhfglkjdhslkg jkd gkdh sghj',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 8,
      text: 'Lorem ipsum doctor kdfjshglkjdh kgjhkjlkdjshfglkjhdklsfghlkd jhglk dhjs flkgjhdkl fjglkdjh gfkjh dsgfkjhkdsf',
      date: '10-11-2023',
      isMyMsg: false,
    },
    {
      id: 9,
      text: 'Lorem ipsum doctor',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 10,
      text: 'Some text;lsdfkgjkdjfglkjdhsflgk jdhslfjhglkdjsfhlgjhlfkjdh gkjhdf',
      date: '10-11-2023',
      isMyMsg: false,
    },
    {
      id: 11,
      text: 'Lorem ipsum doctord slfkglsdfhjgkdjh  kgljhdlkgfjhdkljhfglkjdhslkg jkd gkdh sghj',
      date: '10-11-2023',
      isMyMsg: true,
    },
    {
      id: 12,
      text: 'Lorem ipsum doctor kdfjshglkjdh kgjhkjlkdjshfglkjhdklsfghlkd jhglk dhjs flkgjhdkl fjglkdjh gfkjh dsgfkjhkdsf',
      date: '10-11-2023',
      isMyMsg: false,
    },
  ];

  return (
    <SafeAreaView className="h-[610px]">
      <FlatList
        data={Messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        keyExtractor={({id}) => id.toString()}
        className="m-1"
      />
    </SafeAreaView>
  );
};

type MessageProps = {
  message: MessageType;
};

export const ChatMessage: FC<MessageProps> = ({
  message: {id, text, date, isMyMsg},
}) => {
  return (
    <View className="my-1 w-fit">
      <View
        className={`flex flex-col ${isMyMsg ? 'items-end' : 'items-start'}`}>
        <View
          className={`rounded-md p-2 ${isMyMsg ? 'bg-neutral-400' : 'bg-neutral-300'}`}>
          <Text className="text-xl">{text}</Text>
          <Text className="text-sm">{date}</Text>
        </View>
      </View>
    </View>
  );
};

const ChatInputSchema = z.object({
  message: z.string(),
});

type FormValuesType = z.infer<typeof ChatInputSchema>;

export const ChatInputForm = () => {
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
    console.log(data);
    Keyboard.dismiss();
    setValue('message', '');
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      className=""
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <View className="flex w-full flex-row items-center bg-neutral-500 pt-2 pb-6">
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
