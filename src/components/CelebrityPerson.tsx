import type Celebrity from '@/src/types/celebrities';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types/nivigation';

type ListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Chat'
>;

interface CelebretyProps {
  person: Celebrity;
  navigation: ListScreenNavigationProp;
}

export const CelebrityPerson: FC<CelebretyProps> = ({person, navigation}) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const onPress = () => {
    //setShowImage(prev => !prev);
    navigation.navigate('Chat', {id: person.id});
    // go to chat page {id: person.id}
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative m-4 flex flex-col items-center justify-center rounded-2xl bg-neutral-300">
      {showImage && (
        <Image source={{uri: person.photoUrl}} className="h-screen w-full" />
      )}
      <View className="w-full bg-neutral-400 px-2 py-3">
        <Text className="text-3xl font-bold">{person.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
