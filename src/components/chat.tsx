import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../svgs';

type ChatHeaerPorps = {
  name: string;
  avatar: string;
};

export const ChatHeader: FC<ChatHeaerPorps> = ({name, avatar}) => {
  return (
    <View className="flex w-full flex-row justify-between bg-neutral-500 p-3">
      <TouchableOpacity className="flex flex-row items-center">
        <BackIcon width={30} height={30} />
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

export const ChatBody = () => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};

export const ChatMessage = () => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};

export const ChatInputForm = () => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};
