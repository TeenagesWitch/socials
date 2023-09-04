import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';

const Register = () => {
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
        <Heading mb={6}>Register</Heading>
        <Text>Username</Text>
        <Input placeholder="john.doe" type="username" variant="filled" mb={3} />
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
          mb={3}
        />
        <Text>Confirmation Password</Text>
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={3}
        />
        <Button colorScheme="teal">Log In</Button>
      </Flex>
    </Flex>
  );
};

export default Register;