import React, {ComponentType} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {NoConnection} from '../components/NoConnection';

const withConnection = <P extends object>(Component: ComponentType<P>) => {
  const WithConnection: React.FC<P> = props => {
    const netInfo = useNetInfo();

    if (!netInfo.isConnected) {
      return <NoConnection />;
    }

    return <Component {...props} />;
  };

  return WithConnection;
};

export default withConnection;
