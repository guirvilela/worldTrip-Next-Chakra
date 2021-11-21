import { Flex, Text, Button, Link } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

export interface SlideProps {
  continent: string;
  about: string;
  backgroundUrl: string;
}

export default function SlideContent({
  continent,
  about,
  backgroundUrl,
}: SlideProps) {
  const completeUrl = `url(${backgroundUrl})`;
  return (
    <Flex
      backgroundImage={completeUrl}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="100%"
      width="100%"
      justify="center"
      align="center"
      flexDir="column"
      _hover={{
        textDecoration: 'underline',
        transition: '1s',
        cursor: 'pointer',
      }}
    >
      <Link
        passHref
        href={continent}
        colorScheme="transparent"
        fontSize={['24px', '48px']}
        color="gray.50"
        fontWeight="bold"
        mb="16px"
      >
        {continent}
      </Link>
      <Link
        href={continent}
        fontSize={['14', '24px']}
        color="gray.50"
        fontWeight="bold"
      >
        {about}
      </Link>
    </Flex>
  );
}
