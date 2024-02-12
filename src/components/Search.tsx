import {TextInput, View} from 'react-native';
import {SearchIcon} from '../svgs';
import {type FC} from 'react';

interface SearchProps {
  onInput: (value: string) => void;
}

const Search: FC<SearchProps> = ({onInput}) => {
  return (
    <View className="mb-2 flex flex-row items-center justify-center">
      <TextInput
        onChangeText={onInput}
        placeholder="Search.."
        className="w-5/6 border-b border-black text-xl"
      />
      <SearchIcon width={20} height={20} />
    </View>
  );
};

export default Search;
