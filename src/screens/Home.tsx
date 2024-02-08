import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Celebrities from '../config/celebrities';
import {CelebrityPerson} from '../components/CelebrityPerson';
import {useState} from 'react';
import {Button} from '../common';

const Home = () => {
  const [showCelebrities, setShowCelebrities] = useState<boolean>(false);

  const handleButtonPress = () => {
    setShowCelebrities(true);
  };

  if (!showCelebrities) {
    return (
      <ImageBackground
        style={{
          height: 1000,
          width: '100%',
        }}
        source={{
          uri: 'https://media.wallpaperchill.com/720x1560-wallpapers/sky-phone-wallpaper.jpg',
        }}>
        <View className="flex h-screen items-center justify-center p-2">
          <View className="birder-black space-y4 flex h-[200px] w-full flex-col justify-around rounded-xl border-[4px] bg-neutral-200 px-4 py-3 shadow-2xl  shadow-neutral-800">
            <Text className="text-center text-4xl text-black">
              Tap to chat with history!
            </Text>
            <Button
              onPress={handleButtonPress}
              className="rounded-xl border-[4px] border-black bg-neutral-900">
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
        <FlatList
          data={Celebrities}
          renderItem={({item}) => <CelebrityPerson person={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
