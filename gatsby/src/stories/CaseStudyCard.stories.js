import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';

export default { title: 'CaseStudyCard' };

const defProps = {
  imgHeight: `358px`,
  subtitle: 'Interim Product Management'
};
const items = [
  {
    ...defProps,
    imgURL: '/images/case-study-omio2x.png',
    title: 'omio'
  },
  {
    ...defProps,
    imgURL: '/images/case-study-heycar2x.png',
    title: 'hey car'
  },
  {
    ...defProps,
    imgURL: '/images/case-study-Koerber2x.png',
    title: 'Körber Digital',
    subtitle: 'MVP Scoping and Rollout'
  }
];

export const First = () => <CaseStudyCard item={items[0]} />;
export const Second = () => <CaseStudyCard item={items[1]} />;
export const Third = () => <CaseStudyCard item={items[2]} />;
