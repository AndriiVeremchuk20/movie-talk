import {Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import Heros from '../config/heros';
import {HeroCard} from '../components/HeroCard';
import {FC, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import Hero from '../types/hero';
import {useAppStore} from '../store';
import {WelcomPage} from '../components/WelcomPage';
import {ChooseGenre} from '../components/ChooseGenre';
import {Swipeable} from 'react-native-gesture-handler';
import {Nav} from '../components/Nav';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const LeftSwipeActions = () => {
  return <Nav />;
};

const Home: FC<HomeProps> = ({navigation}) => {
  const {showStartPage, genre} = useAppStore();
  const [heros, setHeros] = useState<Hero[]>(Heros);

  useEffect(() => {
    setHeros(Heros.filter(h => h.genre === genre));
  }, [genre]);

  if (showStartPage) {
    return <WelcomPage />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white/40 dark:bg-black/90">
      <Swipeable renderLeftActions={LeftSwipeActions}>
        <ChooseGenre />
        <FlatList
          data={heros}
          renderItem={({item}) => (
            <HeroCard hero={item} navigation={navigation} />
          )}
        />
      </Swipeable>
    </SafeAreaView>
  );
};

export default Home;
