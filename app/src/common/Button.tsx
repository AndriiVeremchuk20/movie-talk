import type {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  className: string;
  disabled?: boolean;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  children,
  onPress,
  className,
  disabled,
}) => {
  const handleButtonTouch = () => {
    if (!!disabled) return;

    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handleButtonTouch}
      className={`${className} ${disabled && 'bg-neutral-600 text-white'}`}>
      {children}
    </TouchableOpacity>
  );
};
