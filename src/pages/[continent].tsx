import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { continentPage } from '../../services/continents';
import BackgroundContinent from '../components/Continent/Background';
import Infos from '../components/Continent/Infos';
import CardCities from '../components/Continent/CardCities';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Continents() {
  const router = useRouter();
  const { continent } = router.query;
  const [dataContinent, setDataContinent] = useState<any>();

  useEffect(() => {
    const continentRoute = {
      EUROPA: continentPage.map((el) => el['EUROPA']),
    };

    if (continentRoute[continent]) {
      setDataContinent(continentRoute[continent][0]);
    }
  }, [continent, dataContinent]);

  console.log(dataContinent);
  return (
    <Box w="100%" h="100vh">
      <Header />
      {dataContinent && (
        <Box>
          <BackgroundContinent
            backgroundUrl={dataContinent.backgroundUrl}
            continent={dataContinent.continent}
          />
          <Box px={['16px', '16px', '100px']} pt={['28px', '28px', '80px']}>
            <Flex justify="space-between" flexDir={['column', 'column', 'row']}>
              <Box flex="0 0 50%" mr={['0', '0', '70px']} textAlign="justify">
                <Text fontSize={['14px', '16px', '24px']}>
                  {dataContinent.about}
                </Text>
              </Box>
              <Flex
                flex="1"
                mt={['24px', '24px', '0']}
                flexWrap="wrap"
                justify="space-between"
              >
                <Infos info={dataContinent.country} title="países" />
                <Infos info={dataContinent.lenguage} title="linguas" />
                <Infos
                  info={dataContinent.cities.total}
                  title="cidades +100 "
                  tooltip
                />
              </Flex>
            </Flex>

            <Box mt={['32px', '32px', '80px']} pb="40px">
              <Text
                fontSize={['24px', '24px', '36px']}
                fontWeight="500"
                mb="40px"
              >
                Cidades +100
              </Text>

              <Box className="swiper"></Box>

              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
              >
                {dataContinent.cities.city.map(
                  ({ country, name, backgroundUrl, flag }) => (
                    <SwiperSlide key={name}>
                      <CardCities
                        country={country}
                        name={name}
                        backgroundUrl={backgroundUrl}
                        flag={flag}
                      />
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
