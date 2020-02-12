import React from 'react';
import { GridContainer, GridItemImage } from '../components/GridComponents';

export default { title: 'GridUserLogos' };

const logosArr = [
  [
    {
      imageURL: '/images/omio_logo_black.png',
      altText: 'omio logo'
    },
    {
      imageURL: '/images/heycar_logo.png',
      altText: 'heycar logo'
    },
    {
      imageURL: '/images/MOIA_logo.png',
      altText: 'MOIA logo'
    },
    {
      imageURL: '/images/koerber_digital_logo.png',
      altText: 'Koerber Digital logo'
    },
    {
      imageURL: '/images/Axel_Springer_logo.png',
      altText: 'Axel Springer logo'
    },
    {
      imageURL: '/images/avira_logo.png',
      altText: 'Avira logo'
    }
  ]
];

export const First = () => {
  return (
    <GridContainer>
      {logosArr[0].map((logo, idx) => (
        <GridItemImage
          key={idx}
          imageURL={logo.imageURL}
          altText={logo.altText}
        />
      ))}
    </GridContainer>
  );
};
