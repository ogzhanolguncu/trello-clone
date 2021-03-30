import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import BoardHeaderSection from './board-header-section';

const BoardSection = () => {
  return (
    <Flex
      margin="40px 16px 0"
      width="100%"
      maxWidth="825px"
      minWidth="288px"
      position="sticky"
      top="0"
    >
      <Box padding="0 0 20px" maxWidth="1250px">
        <BoardHeaderSection />
        <Box>
          <Flex as="ul" flexWrap="wrap" listStyleType="none">
            <Box
              as="li"
              width="23.5%"
              padding="0"
              margin="0 2% 2% 0"
              transform="translate(0)"
              cursor="pointer"
            >
              <Box
                backgroundImage="url(/static/images/custom-background-1.jpg)"
                marginRight="0"
                borderRadius="3px"
                backgroundColor="#97a0af"
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
                    wordWrap="break-word"
                  >
                    Backend
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default BoardSection;
