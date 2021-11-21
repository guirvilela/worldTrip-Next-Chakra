import { Flex, Image, Text } from '@chakra-ui/react';

export interface PlacesProps {
  url: string;
  place: string;
}

export default function Places({ url, place }: PlacesProps) {
  return (
    <Flex
      flexDir={['row', 'row', 'column']}
      align="center"
      mb={['8px', '0', '0']}
    >
      <Image
        display={['none', 'none', 'block']}
        mb="24px"
        src={url}
        alt={place}
      />
      <Text
        display={['block', 'block', 'none']}
        color="yellow.500"
        w={['10px', '15px']}
        h={['10px', '15px']}
        bg="yellow.500"
        borderRadius="50%"
        mr="8px"
      ></Text>
      <Text fontWeight="700">{place}</Text>
    </Flex>
  );
}
