import { Box, Button, Input, Stack, Text, TextDynamic } from '@/components';

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <TextDynamic as="h2" weight={'bold'} align={'center'} size={'3xl'} className="mb-2">
          Login
        </TextDynamic>

        <Text emphasis={'low'} size={'sm'} align={'center'} className="mb-8">
          Please enter your credentials to login
        </Text>

        <TextDynamic as="label" htmlFor="username" size={'sm'} weight={'medium'} className="mb-1.5">
          Username
        </TextDynamic>
        <Input type="text" id="username" placeholder="Username" className="mb-4" />

        <TextDynamic as="label" htmlFor="password" size={'sm'} weight={'medium'} className="mb-1.5">
          Password
        </TextDynamic>
        <Input id="password" type="password" placeholder={'Password'} />

        <Button type="submit" variant={'solid'} className="mt-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
