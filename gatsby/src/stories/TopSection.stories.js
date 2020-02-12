import React from 'react';
import TopSection from '../components/TopSection';

export default { title: 'TopSection' };

const item = {
  titleText: 'Discover and Deliver Great Products. Faster',
  buttonText: 'Schedule a call'
};

export const First = () => (
  <TopSection titleText={item.titleText} buttonText={item.buttonText} />
);
