import React from 'react';
// import CultureCard from '../components/CultureCard';
import CultureCard, {
  CultureCardTitle,
  CultureCardList,
  CultureCardListItem
} from '../components/CultureCard';

export default { title: 'CultureCard' };

const item = {
  title: 'What we read',
  imageURL: '',
  listItemsArray: [
    'Inspired',
    'Thinking in Bets',
    'Make Time',
    'The Hard Thing About Hard Things',
    'Loads of Comics :)'
  ]
};

export const WhatWeRead = () => (
  <CultureCard imageURL={item.imageURL}>
    <CultureCardTitle>{item.title}</CultureCardTitle>
    <CultureCardList>
      {item.listItemsArray.map(text => (
        <CultureCardListItem>{text}</CultureCardListItem>
      ))}
    </CultureCardList>
  </CultureCard>
);
