import {Text, View} from 'react-native';
import {JokerIcon, MinionIcon} from '../svgs';
import {useAppStore} from '../store';
import {Button} from '../common';

export const ChooseGenre = () => {
  const {genre, setGenre} = useAppStore();

  return (
    <View className="flex flex-row items-center">
      <Button
        disabled={genre === 'movie'}
        onPress={() => setGenre('movie')}
        className="flex w-1/2 flex-row space-x-3 border-[3px] border-neutral-200 p-3">
        <Text className="text-3xl text-neutral-400">Movies</Text>
        <JokerIcon width={40} height={40} />
      </Button>
      <Button
        disabled={genre === 'cartoon'}
        onPress={() => setGenre('cartoon')}
        className="flex w-1/2 flex-row justify-center space-x-3 border-[3px] border-neutral-200 p-3">
        <Text className="text-3xl text-neutral-400">Cartoons</Text>
        <MinionIcon width={40} height={40} />
      </Button>
    </View>
  );
};
