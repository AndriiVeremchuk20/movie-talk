import type Hero from '@/src/types/hero';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';

type ListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Chat'
>;

interface HeroCardProps {
  hero: Hero;
  navigation: ListScreenNavigationProp;
}

export const HeroCard: FC<HeroCardProps> = ({hero, navigation}) => {
  const onPress = () => {
    navigation.navigate('Chat', {id: hero.id});
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`m-4 flex h-[90px] flex-row items-center justify-between rounded-2xl bg-neutral-200`}>
      <Image
        source={{uri: hero.photoUrl}}
        className="h-[120px] w-[120px] rounded-b-full"
      />
      <View className="px-2 py-3">
        <Text className="w-[230px] text-3xl font-bold">{hero.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
