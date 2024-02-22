import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Heros from '../config/heros';
import {HeroCard} from '../components/HeroCard';
import {FC, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import Hero from '../types/hero';
import {useAppStore} from '../store';
import {WelcomPage} from '../components/WelcomPage';
import {Button} from '../common';
import {AdultIcon, ChildIcon} from '../svgs';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: FC<HomeProps> = ({navigation}) => {
  const {showStartPage} = useAppStore();
  const [currGenre, setCurrGenre] = useState<'movie' | 'cartoon'>('movie');
  const [heroList, setHeroList] = useState<Hero[]>(Heros);

  useEffect(() => {
    setHeroList(Heros.filter(h => h.genre === currGenre));
  }, [currGenre]);

  if (showStartPage) {
    return <WelcomPage />;
  }

  return (
    <SafeAreaView>
      <View className="flex flex-row items-center">
        <Button
          onPress={() => setCurrGenre('movie')}
          className="wflex w-1/2 flex-row justify-center space-x-3 border-[3px] border-neutral-200 p-3">
          <Text className="text-3xl">Movie</Text>
          <AdultIcon width={40} height={40} />
        </Button>
        <Button
          onPress={() => setCurrGenre('cartoon')}
          className="flex w-1/2 flex-row justify-center space-x-3 border-[3px] border-neutral-200 p-3">
          <Text className="text-3xl">Cartoon</Text>
          <ChildIcon width={40} height={40} />
        </Button>
      </View>
      <View>
        <FlatList
          data={heroList}
          renderItem={({item}) => (
            <HeroCard hero={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
