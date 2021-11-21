import { Flex, Text } from '@chakra-ui/react';

interface BackgroundContinentProps {
  backgroundUrl: string;
  continent: string;
}

export default function BackgroundContinent({
  backgroundUrl,
  continent,
}: BackgroundContinentProps) {
  return (
    <Flex
      backgroundImage={`url(${backgroundUrl})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h={['150px', '150px', '550px']}
      px="100px"
      py="52px"
      align={['center', 'center', 'end']}
      justify={['center', 'center', 'flex-start']}
    >
      <Text
        fontSize={['28px', '36px', '48px']}
        color="gray.50"
        fontWeight="600"
      >
        {continent}
      </Text>
    </Flex>
  );
}
