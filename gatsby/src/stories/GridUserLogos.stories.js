import React from 'react';
import GridUserLogos from '../components/GridUserLogos';

export default { title: 'GridUserLogos' };

const logosArr = [
  [
    {
      logoURL: '/images/omio_logo_black.png'
    },
    {
      logoURL: '/images/heycar_logo.png'
    },
    {
      logoURL: '/images/MOIA_logo.png'
    },
    {
      logoURL: '/images/koerber_digital_logo.png'
    },
    {
      logoURL: '/images/Axel_Springer_logo.png'
    },
    {
      logoURL: '/images/avira_logo.png'
    }
  ]
];

export const Mobile = () => {
  return logosArr.map((logos, idx) => (
    <GridUserLogos key={idx} logos={logos} />
  ));
};
