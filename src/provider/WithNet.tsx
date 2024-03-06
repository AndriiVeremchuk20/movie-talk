import {useNetInfo} from '@react-native-community/netinfo';
import {FC, ReactNode} from 'react';
import {Text, View} from 'react-native';

type CheckNetProps = {
  children: ReactNode;
};

export const WithNet: FC<CheckNetProps> = ({children}) => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return (
      <View>
        <Text>Pizdes</Text>
      </View>
    );
  }

  return <>{children}</>;
};
