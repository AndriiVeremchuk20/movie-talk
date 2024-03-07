import {Text, TouchableOpacity, View} from 'react-native';

export const Nav = () => {
  return (
    <View className="flex-1">
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};
