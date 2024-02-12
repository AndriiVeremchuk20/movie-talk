import type Hero from '@/src/types/hero';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types/nivigation';

type ListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Chat'
>;

interface HeroCardProps {
  person: Hero;
  navigation: ListScreenNavigationProp;
}

export const HeroCard: FC<HeroCardProps> = ({person, navigation}) => {
  const onPress = () => {
    navigation.navigate('Chat', {id: person.id});
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="m-4 flex flex-row items-center justify-center rounded-2xl bg-neutral-300">
      <Image source={{uri: person.photoUrl}} className="h-[100px] w-[100px]" />
      <View className="bg-neutral-400 px-2 py-3">
        <Text className="w-[230px] text-3xl font-bold">{person.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
