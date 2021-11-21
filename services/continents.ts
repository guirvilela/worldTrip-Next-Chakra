import { SlideProps } from '../src/components/Home/Swiper/Slide';

export const continents: SlideProps[] = [
  {
    continent: 'EUROPA',
    about: 'O continente mais antigo',
    backgroundUrl: '/assets/home/swiper/Europe.png',
  },
  {
    continent: 'AMERICA DO SUL',
    about: ' Um subcontinente do continente americano.',
    backgroundUrl: '/assets/home/swiper/americadosul.jpg',
  },
  {
    continent: 'ÁFRICA',
    about: 'O terceiro continente mais extenso.',
    backgroundUrl: '/assets/home/swiper/africa.jpg',
  },
];

export const continentPage = [
  {
    EUROPA: {
      backgroundUrl: '/assets/continent/europe.png',
      continent: 'Europa',
      about:
        'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      country: 50,
      lenguage: 60,
      cities: {
        total: 27,
        city: [
          {
            name: 'Londres',
            country: 'Reino Unido',
            backgroundUrl: '/assets/continent/cities/Londres/londresBg.png',
            flag: '/assets/continent/cities/Londres/londresFlag.png',
          },
          {
            name: 'Paris',
            country: 'França',
            backgroundUrl: '/assets/continent/cities/Paris/parisBg.png',
            flag: '/assets/continent/cities/Paris/parisFlag.png',
          },
          {
            name: 'Roma',
            country: 'Itália',
            backgroundUrl: '/assets/continent/cities/Roma/romaBg.png',
            flag: '/assets/continent/cities/Roma/romaFlag.png',
          },
          {
            name: 'Praga',
            country: 'República Tcheca',
            backgroundUrl: '/assets/continent/cities/Praga/pragaBg.png',
            flag: '/assets/continent/cities/Praga/pragaFlag.png',
          },
          {
            name: 'Amsterdã',
            country: 'Holanda',
            backgroundUrl: '/assets/continent/cities/Amsterda/amsterdaBg.png',
            flag: '/assets/continent/cities/Amsterda/amsterdaFlag.png',
          },
        ],
      },
    },
  },
];
