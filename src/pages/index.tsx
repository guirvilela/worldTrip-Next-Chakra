import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import { places } from '../../services/places';
import Places from '../components/Home/Places';
import SwiperComponent from '../components/Home/Swiper';

export default function Home() {
  return (
    <Box w="100%" h="100vh">
      <Header />

      <Flex
        w="100%"
        maxWidht="1440px"
        h={['163px', '335px']}
        backgroundImage="url('/assets/home/Background.png')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        px={['16px', '16px', '52px']}
        align="center"
        justify="space-between"
      >
        <Box>
          <Text
            mb="20px"
            fontSize={['20px', '36px']}
            fontWeight="500"
            color="gray.50"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>

          <Text fontSize={['14px', '20px']} fontWeight="400" color="gray.50">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          mt="100px"
          display={['none', 'none', 'block']}
          src="/assets/home/Airplane.svg"
          alt="airplane"
        />
      </Flex>

      <Flex
        p={['50px', '50px', '140px']}
        align="center"
        justify="space-between"
        position="relative"
        flexWrap="wrap"
        // _before={{
        //   content: `""`,
        //   height: '5px',
        //   width: '85px',
        //   borderBottom: '2px solid #47585B',
        //   position: 'absolute',
        //   bottom: 0,
        //   left: '46.4%',
        // }}
      >
        {places.map(({ place, url }, index) => (
          <Places key={index} url={url} place={place} />
        ))}
      </Flex>
      <Box w="100%" h="4px" align="center" justify="center">
        <Box w={['70px', '100px']} h="0.5" bg="#47585B"></Box>
      </Box>

      <Box p="52px" align="center" justify="center">
        <Text fontWeight="500" fontSize={['20px', '36px']}>
          Vamos nessa? <br />
          Escolha seu continente
        </Text>
      </Box>

      <Flex pb={['0', '0', '52px']} px={['0', '0', '52px']}>
        <SwiperComponent />
      </Flex>
    </Box>
  );
}
