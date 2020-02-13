import React from 'react';
import ServicesCard from '../components/ServicesCard';

export default { title: 'ServicesCard' };

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

export const First = () => <ServicesCard {...items[0]} />;
export const Second = () => <ServicesCard {...items[1]} />;
export const Third = () => <ServicesCard {...items[2]} />;
