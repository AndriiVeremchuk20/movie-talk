import type Celebrity from '@/src/types/celebrities';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface CelebretyProps {
  person: Celebrity;
}

export const CelebrityPerson: FC<CelebretyProps> = ({person}) => {
  const onPress = () => {
    // go to chat page {id: person.id}
  };

  return (
    <TouchableOpacity className="relative m-4 flex flex-col items-center justify-center rounded-2xl bg-neutral-300">
      <Image source={{uri: person.photoUrl}} className="h-screen w-full" />
      <View className="absolute bottom-0 w-full bg-neutral-400 px-2 py-3">
        <Text className="text-3xl font-bold">{person.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
