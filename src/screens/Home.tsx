import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Heros from '../config/heros';
import {HeroCard} from '../components/HeroCard';
import {FC, useState} from 'react';
import {Button} from '../common';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/nivigation';
import Search from '../components/Search';
import Hero from '../types/hero';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

// check internet speed

const Home: FC<HomeProps> = ({navigation}) => {
  const [showCelebrities, setShowCelebrities] = useState<boolean>(false);
  const [heroList, setHeroList] = useState<Hero[]>(Heros);

  const handleButtonPress = () => {
    setShowCelebrities(true);
  };

  const handleUserSearch = (searchStr: string) => {
    setHeroList(
      Heros.filter(h => h.name.toLowerCase().includes(searchStr.toLowerCase())),
    );
  };

  if (!showCelebrities) {
    return (
      <ImageBackground
        style={{
          height: 1000,
          width: '100%',
        }}
        source={{
          uri: 'https://wallpapers.com/images/hd/american-movie-posters-z0puq43u0qbtr6j2.jpg',
        }}>
        <View className="flex h-screen items-center justify-center p-2">
          <View className="space-y4 flex h-[200px] w-full flex-col justify-around rounded-xl border-[4px] border-neutral-800 bg-neutral-200 bg-opacity-20 px-4">
            <Text className="text-center text-4xl text-black">
              Tap to chat with Your hero!
            </Text>
            <Button
              onPress={handleButtonPress}
              className="rounded-xl border-[4px] border-neutral-800 bg-neutral-800">
              <Text className="m-auto py-2 text-center text-5xl text-neutral-300">
                Click Me
              </Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Search onInput={handleUserSearch} />
      </View>
      <View className="mb-[120px]">
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
