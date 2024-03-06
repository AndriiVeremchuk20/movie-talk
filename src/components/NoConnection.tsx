import {Text, View} from 'react-native';
import {NoInternetIcon} from '../svgs';
import {SafeAreaView} from 'react-native';

export const NoConnection = () => {
  return (
    <SafeAreaView className="flex-1 flex-col items-center justify-center bg-orange-300 dark:bg-red-700">
      <View className="shadow-3xl rounded-xl bg-white/80 p-12 shadow-slate-950">
        <View className="flex flex-col items-center justify-center gap-4">
          <NoInternetIcon width={180} height={130} />
          <Text className="text-2xl">No internet access</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
