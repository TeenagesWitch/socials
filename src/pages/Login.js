import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

const Login = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Text>Email</Text>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Text>Password</Text>
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal">Log In</Button>
      </Flex>
    </Flex>
  );
};

export default Login;