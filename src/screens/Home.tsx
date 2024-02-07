import {FlatList, SafeAreaView, Text, View} from 'react-native';
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
      <View className="flex h-screen items-center justify-center">
        <View className="birder-black flex w-3/4 flex-col space-y-5 rounded-xl border-[4px] bg-neutral-200 px-4 py-3 shadow-2xl  shadow-amber-800">
          <Text className="text-2xl text-black">
            Tap to chat with history's creators!
          </Text>
          <Button
            onPress={handleButtonPress}
            className="rounded-xl border-[4px] border-black bg-inherit">
            <Text className="py-2 text-center text-5xl text-black ">GO</Text>
          </Button>
        </View>
      </View>
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
