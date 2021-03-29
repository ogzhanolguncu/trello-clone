import { Text } from '@chakra-ui/react';

const MenuText = ({ text, ...rest }: { text: string; [x: string]: any }) => {
  return (
    <Text
      padding="6px 12px"
      fontSize="14px"
      _hover={{
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        background: 'rgba(9,30,66,.04)',
        width: '100%',
      }}
      {...rest}
    >
      {text}
    </Text>
  );
};

export default MenuText;
