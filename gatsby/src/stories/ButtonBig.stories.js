import React from 'react';
import ButtonBig from '../components/ButtonBig';

export default { title: 'ButtonBig' };

const items = ['Schedule a call'];
export const Mobile = () => {
  return items.map((text, idx) => <ButtonBig key={idx} text={text} />);
};
