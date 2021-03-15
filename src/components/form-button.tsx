import { Flex, Image, Box } from '@chakra-ui/react';

type FormButtonProps = {
  src: string;
  title: string;
};

const FormButton = ({ src, title }: FormButtonProps) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      background="#fff"
      color="rgba(0,0,0,0.54)"
      boxShadow="rgb(0 0 0 / 20%) 1px 1px 5px 0"
      borderColor="transparent"
      textAlign="center"
      borderRadius="3px"
      width="99%"
      height="39px"
      paddingTop="0"
      marginBottom="12px"
      transition="background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s"
      cursor="pointer"
    >
      <Image src={src} height="18px" />
      <Box
        as="span"
        display=" inline-block"
        fontSize=" 14px"
        fontWeight=" bold"
        color=" #505f79"
        height="32px"
        lineHeight="32px"
        marginLeft="10px"
      >
        {title}
      </Box>
    </Flex>
  );
};

export default FormButton;
