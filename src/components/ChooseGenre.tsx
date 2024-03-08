import {Text, View} from 'react-native';
import {JokerIcon, MinionIcon} from '../svgs';
import {useGenreStore} from '../store';
import {Button} from '../common';

export const ChooseGenre = () => {
  const {genre, setGenre} = useGenreStore();

  return (
    <View className="flex flex-row items-center bg-orange-300 dark:bg-red-700">
      <Button
        disabled={genre === 'movie'}
        onPress={() => setGenre('movie')}
        className="flex-1 flex-row justify-center p-3">
        <Text className="text-3xl text-white">Movies</Text>
        <JokerIcon width={40} height={40} />
      </Button>
      <Button
        disabled={genre === 'cartoon'}
        onPress={() => setGenre('cartoon')}
        className="flex-1 flex-row justify-center p-3">
        <Text className="text-3xl text-white">Cartoons</Text>
        <MinionIcon width={40} height={40} />
      </Button>
    </View>
  );
};
