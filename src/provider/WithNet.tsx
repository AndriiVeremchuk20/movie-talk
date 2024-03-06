import {useNetInfo} from '@react-native-community/netinfo';
import {FC, ReactNode} from 'react';
import {Text, View} from 'react-native';
import {NoConnection} from '../components/NoConnection';

type CheckNetProps = {
  children: ReactNode;
};

export const WithNet: FC<CheckNetProps> = ({children}) => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return <NoConnection />;
  }

  return <>{children}</>;
};
