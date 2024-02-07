import type {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  className: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, onPress, className}) => {
  return (
    <TouchableOpacity onPress={onPress} className={className}>
      {children}
    </TouchableOpacity>
  );
};
