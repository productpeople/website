import React from 'react';
import CardServices from '../components/CardServices';

export default { title: 'CardServices' };

const items = [
  {
    overlappingBoxText: '1-2 days',
    imageURL: '/images/product-management-training-2x.png',
    title: 'Product Management Training',
    subtitle: 'Discovery, Delivery, Metrics'
  },
  {
    overlappingBoxText: '1-2 days',
    imageURL: '/images/product-team-appraisal-2x.png',
    title: 'Product Team Appraisal',
    subtitle: 'People, Product, Processes'
  },
  {
    overlappingBoxText: '1-2 days',
    imageURL: '/images/interim-product-manager-2x.png',
    title: 'Interim Product Management',
    subtitle: 'Embedded in the team'
  }
];

export const First = () => <CardServices {...items[0]} />;
export const Second = () => <CardServices {...items[1]} />;
export const Third = () => <CardServices {...items[2]} />;
