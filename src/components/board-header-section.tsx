import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type BoardHeaderSectionProps = {
  text: string;
  icon: IconType;
};

const BoardHeaderSection = ({ text, icon }: BoardHeaderSectionProps) => {
  return (
    <Flex justifyContent="flex-start" alignItems="center" width="100%" padding="0 0 11px">
      <Icon as={icon} height="27px" width="27px" marginRight="11px" color="#42526e" />
      <Text
        display="inline-block"
        lineHeight="24px"
        fontSize="16px"
        fontWeight="700"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {text}
      </Text>
    </Flex>
  );
};

export default BoardHeaderSection;
