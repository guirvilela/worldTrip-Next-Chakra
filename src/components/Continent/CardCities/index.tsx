import { Box, Flex, Text, Avatar, Image } from '@chakra-ui/react';
import React from 'react';

interface CardCitiesProps {
  name: string;
  country: string;
  backgroundUrl: string;
  flag: string;
}

export default function CardCities({
  country,
  name,
  backgroundUrl,
  flag,
}: CardCitiesProps) {
  return (
    <Flex
      flexDir="column"
      w="100%"
      border="1px solid #ffba0878"
      borderRadius="5px"
    >
      <Box>
        <Image w="100%" objectFit="cover" src={backgroundUrl} alt={name} />
      </Box>

      <Flex p="24px" align="center" justify="space-between">
        <Box>
          <Text fontSize="20" fontWeight="600" mb="12px">
            {name}
          </Text>
          <Text fontSize="16" fontWeight="500" color="gray.200">
            {country}
          </Text>
        </Box>
        <Avatar size="sm" name="teste a" src={flag} />
      </Flex>
    </Flex>
  );
}
