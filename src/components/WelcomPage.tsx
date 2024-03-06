import {ImageBackground, Text, View} from 'react-native';
import {Button} from '../common';
import {useAppStore} from '../store';

export const WelcomPage = () => {
  const {setShowStartPage} = useAppStore();

  const handleButtonPress = () => {
    setShowStartPage(false);
  };

  return (
    <ImageBackground
      style={{
        height: 1000,
        width: '100%',
      }}
      source={{
        uri: 'https://e0.pxfuel.com/wallpapers/97/342/desktop-wallpaper-marvel-superhero-anime-face-side-view-iphone-11-pro-xs-max-background.jpg',
      }}>
      <View className="flex h-screen items-center justify-center p-2">
        <View className="space-y4 flex h-[200px] w-full flex-col justify-around border-[5px] border-neutral-800 bg-neutral-200 bg-opacity-20 px-4">
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
};
