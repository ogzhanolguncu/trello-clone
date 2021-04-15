import React, { useState } from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { TiStarOutline } from 'react-icons/ti';

type BoardListSectionItemProps = {
  name: string;
  starred?: boolean;
  backgroundColorOrImage: string;
};

const BoardListSectionItem = ({
  name: boardName,
  backgroundColorOrImage = 'url(/static/images/custom-background-1.jpg)',
}: BoardListSectionItemProps) => {
  const [mouseOverBoards, setMouseOverBoard] = useState<boolean>(false);
  return (
    <Box
      width="23.5%"
      padding="0"
      margin="0 2% 2% 0"
      transform="translate(0)"
      cursor="pointer"
      _last={{ marginEnd: '0' }}
      onMouseEnter={() => setMouseOverBoard(true)}
      onMouseLeave={() => setMouseOverBoard(false)}
      filter="brightness(100%)"
      _hover={{ filter: 'brightness(85%)' }}
    >
      <Box
        background={backgroundColorOrImage}
        borderRadius="3px"
        backgroundSize="cover"
        backgroundPosition="50%"
        color="#fff"
        lineHeight="20px"
        padding="8px"
        position="relative"
        textDecoration="none"
        width="195px"
        display="block"
      >
        <Box
          as="span"
          backgroundColor="rgba(0,0,0,.15)"
          bottom="0"
          left="0"
          position="absolute"
          right="0"
          top="0"
        />
        <Box
          display="flex"
          height="80px"
          position="relative"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text
            flex="0 0 auto"
            fontSize="16px"
            fontWeight="700"
            display="inline-block"
            overflow="hidden"
            maxHeight="40px"
            width="100%"
          >
            {boardName}
          </Text>
          {mouseOverBoards && (
            <Flex
              widths="100%"
              justifyContent="flex-end"
              transitionDuration=".15s"
              transitionProperty="color,background,opacity,transform,width,margin"
              transform="translateZ(0)"
            >
              <Icon
                as={TiStarOutline}
                width="16px"
                color="white"
                lineHeight="18px"
                fontSize="14px"
                height="16px"
                opacity=".75"
                _hover={{
                  opacity: '1',
                  transform: 'scale(1.2)',
                }}
              />
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BoardListSectionItem;
