import React, { useEffect, useContext, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Divider,
  Link as StyledLink,
  Alert,
  AlertTitle,
  CloseButton,
  FormLabel,
} from '@chakra-ui/react';
import { useHistory, Link } from 'react-router-dom';

import FirebaseContext from '../contexts/firebaseContext';
import * as ROUTES from '../constants/routes';
import AuthFooter from '../components/auth-footer';

const ResetPassword = () => {
  const firebaseContext = useContext(FirebaseContext);
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    document.title = 'Log in to Trello';
  }, []);

  const isValid = !!emailAddress;

  const handleResetPassword = async () => {
    try {
      await firebaseContext?.firebase.auth().sendPasswordResetEmail(emailAddress);
      history.push(ROUTES.LOGIN);
    } catch (error) {
      setEmailAddress('');
      setError(error.message);
    }
  };

  return (
    <Flex
      background="#F9FAFC"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex justifyContent="center" marginTop="40px" marginBottom="40px">
        <Image src="/static/images/logo.svg" height="43px" />
      </Flex>
      <Flex width="100%" padding="0" marginBottom="30px" justifyContent="center">
        <Flex
          width="100%"
          maxWidth="400px"
          margin="0 auto"
          boxShadow="rgb(0 0 0 / 10%) 0 0 10px"
          padding="25px 40px"
          borderRadius="30px"
          backgroundColor="#fff"
          justifyContent="center"
          flexDirection="column"
        >
          {!!error && (
            <Alert status="error" borderRadius="15px">
              <AlertTitle mr={2}>{error}</AlertTitle>
              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setError('')} />
            </Alert>
          )}

          <Heading
            as="h1"
            textAlign="center"
            color="#5E6C84"
            fontSize="16px"
            letterSpacing="-0.01em"
            lineHeight="28px"
            marginTop="10px"
            marginBottom="25px"
          >
            Can't log in?
          </Heading>
          <FormControl id="email">
            <FormLabel fontWeight="600" fontSize="12px" color="#5E6C84">
              We'll send a recovery link to
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              margin="0 0 1.2em"
              fontSize="14px"
              backgroundColor="#FAFBFC"
              border="2px solid #DFE1E6"
              borderRadius="3px"
              height="44px"
              transition="background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s"
              onChange={({ target }) => setEmailAddress(target.value)}
              required
            />
          </FormControl>
          <Button
            backgroundColor="#5AAC44"
            color="#fff"
            onClick={handleResetPassword}
            _hover={{ backgroundColor: '#61BD4F' }}
            disabled={!isValid}
          >
            Send recovery link
          </Button>
          <Divider borderTop="1px solid hsl(0,0%,80%)" margin="1em 0" />
          <Flex flexDirection="row" alignItems="center" justifyContent="center" marginBottom="1rem">
            <Link to="/sign-up">
              <StyledLink fontSize="14px" color="#0052CC">
                Sign up for an account
              </StyledLink>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <AuthFooter />
    </Flex>
  );
};

export default ResetPassword;
