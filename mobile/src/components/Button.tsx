import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({
  title,
  type = 'PRIMARY',
  ...otherProps
}: ButtonProps) {
  return (
    <ButtonNativeBase
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
      fontSize='md'
      h={14}
      rounded='sm'
      textTransform='uppercase'
      w='full'
      _pressed={type === 'SECONDARY' ? 'red.600' : 'yellow.600'}
      {...otherProps}
    >
      <Text
        color={type === 'SECONDARY' ? 'white' : 'black'}
        fontFamily='heading'
        fontSize='sm'
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
