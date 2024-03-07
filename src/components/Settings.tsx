import {SafeAreaView, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const Settings = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>Theme:</Text>
        <View className="">
          <Text>Light</Text>
          <Text>Dark</Text>
        </View>
      </View>
      <View>
        <Text>Language:</Text>
        <View>
          <Picker>
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
        </View>
      </View>
    </SafeAreaView>
  );
};
