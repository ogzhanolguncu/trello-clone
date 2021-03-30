import { Flex, Icon, Text } from '@chakra-ui/react';
import { WiTime4 } from 'react-icons/wi';

const BoardHeaderSection = () => {
  return (
    <Flex justifyContent="flex-start" alignItems="center" width="100%" padding="0 0 11px">
      <Icon as={WiTime4} height="27px" width="27px" marginRight="11px" color="#42526e" />
      <Text
        display="inline-block"
        lineHeight="24px"
        fontSize="16px"
        fontWeight="700"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        Recently viewed
      </Text>
    </Flex>
  );
};

export default BoardHeaderSection;
