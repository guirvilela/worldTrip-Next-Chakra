import { Flex, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { MdArrowBackIosNew } from 'react-icons/md';

export default function Header() {
  const router = useRouter();
  const { continent } = router.query;

  return (
    <Flex
      w="100%"
      h={['50px', '100px']}
      maxHeight="100px"
      align="center"
      justify="center"
      position="relative"
    >
      {continent && (
        <Icon
          as={MdArrowBackIosNew}
          position="absolute"
          top={['35%', '40%']}
          left={['3', '10']}
          fontSize={[15, 20]}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={router.back}
        />
      )}
      <Image src="/assets/logo.svg" alt="logo" w={['100px', '200px']} />
    </Flex>
  );
}
