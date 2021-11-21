import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SlideContent from './Slide';
import { continents } from '../../../../services/continents';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ height: '450px' }}
      >
        {continents.map(({ continent, about, backgroundUrl }) => (
          <SwiperSlide key={continent}>
            <SlideContent
              continent={continent}
              about={about}
              backgroundUrl={backgroundUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
