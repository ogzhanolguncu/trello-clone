import { Box, Image } from '@chakra-ui/react';

const AuthFooter = () => {
  return (
    <Box
      alignItems="flex-end"
      justifyContent="space-between"
      display={['none', 'flex', 'flex', 'flex']}
      height="100%"
      width="100%"
    >
      <Box width="400px" bottom="0" left="0" zIndex="10">
        <Image src="/static/images/family01.svg" />
      </Box>
      <Box width="500px" bottom="0" right="0" zIndex="10">
        <Image src="/static/images/family02.svg" />
      </Box>
    </Box>
  );
};

export default AuthFooter;
