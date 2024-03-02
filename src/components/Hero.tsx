import type Hero from '@/src/types/hero';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

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
      className="mx-4 my-4 flex h-[95px] flex-row items-center rounded-full bg-white/90 shadow shadow-black dark:bg-black/60 dark:shadow-white">
      <Image
        source={{uri: hero.photoUrl}}
        className="h-[110px] w-[110px] rounded-full bg-orange-300 dark:bg-red-700"
      />
      <View className="px-2 py-3">
        <Text className="w-[230px] text-3xl font-bold text-neutral-400 dark:text-neutral-200">
          {hero.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

type HeroListProps = {
  heros: Hero[];
};

export const HeloList: FC<HeroListProps> = ({heros}) => {
  return (
    <FlatList
      data={heros}
      renderItem={({item}) => <HeroCard hero={item} navigation={navigation} />}
    />
  );
};
