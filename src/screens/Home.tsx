import {FlatList, SafeAreaView} from 'react-native';
import Heros from '../config/heros';
import {HeroCard} from '../components/HeroCard';
import {FC, useEffect, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import type Hero from '../types/hero';
import {useAppStore, useGenreStore} from '../store';
import {WelcomPage} from '../components/WelcomPage';
import {ChooseGenre} from '../components/ChooseGenre';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: FC<HomeProps> = ({navigation}) => {
  const {genre} = useGenreStore();
  const {showStartPage} = useAppStore();
  const [heros, setHeros] = useState<Hero[]>(Heros);
  const herosListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    setHeros(Heros.filter(h => h.genre === genre));
    herosListRef.current?.scrollToOffset({animated: true, offset: 0});
  }, [genre]);

  if (showStartPage) {
    return <WelcomPage />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white/40 dark:bg-black/90">
      <ChooseGenre />
      <FlatList
        ref={herosListRef}
        data={heros.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({item}) => (
          <HeroCard hero={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
