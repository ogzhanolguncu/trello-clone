import React, { useEffect, useContext, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Divider,
  Link as StyledLink,
  Text,
  Alert,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import firebase from 'firebase';
import { useHistory, Link } from 'react-router-dom';

import FormButton from '../components/form-button';
import FirebaseContext from '../contexts/firebaseContext';
import * as ROUTES from '../constants/routes';
import AuthFooter from '../components/auth-footer';

const SignUp = () => {
  const firebaseContext = useContext(FirebaseContext);
  const history = useHistory();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    document.title = 'Sign up to Trello';
  }, []);

  const isValid = !!emailAddress && !!password;

  const handleLoginWithGoogle = async () => {
    try {
      const auth = firebaseContext?.firebase.auth();
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      await auth?.signInWithPopup(googleProvider);
      history.push(ROUTES.BOARDS);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginWithEmail = async () => {
    try {
      await firebaseContext?.firebase.auth().createUserWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.BOARDS);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
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
            Sign up to Trello
          </Heading>
          <FormControl id="email">
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
          <FormControl id="password">
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              margin="0 0 1.2em"
              fontSize="14px"
              backgroundColor="#FAFBFC"
              border="2px solid #DFE1E6"
              borderRadius="3px"
              height="44px"
              transition="background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s"
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </FormControl>
          <Button
            backgroundColor="#5AAC44"
            color="#fff"
            onClick={handleLoginWithEmail}
            _hover={{ backgroundColor: '#61BD4F' }}
            disabled={!isValid}
          >
            Sign in
          </Button>
          <Box textAlign="center" fontSize="12px" marginTop="16px" marginBottom="16px">
            OR
          </Box>
          <FormButton
            src="/static/images/google-icon.svg"
            title="Continue with Google"
            onClick={handleLoginWithGoogle}
          />
          <FormButton src="/static/images/github-icon.svg" title="Continue with Github" />
          <Divider borderTop="1px solid hsl(0,0%,80%)" margin="1em 0" />
          <Flex flexDirection="row" alignItems="center" justifyContent="center" marginBottom="1rem">
            <Link to={ROUTES.RESET_PASSWORD}>
              <StyledLink fontSize="14px" color="#0052CC">
                Can't log in?
              </StyledLink>
            </Link>
            <Text fontSize="5px" margin="auto 10px" display="flex">
              {'\u2B24'}
            </Text>
            <Link to={ROUTES.LOGIN}>
              <StyledLink fontSize="14px" color="#0052CC">
                Already have an account?
              </StyledLink>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <AuthFooter />
    </Flex>
  );
};

export default SignUp;
