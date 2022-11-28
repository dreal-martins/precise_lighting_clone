import React from 'react';
import FeaturedRowItem from './partials/FeaturedRowItem';
import { featured } from '../../data';

export default function FeaturedRow() {
  return (
    <div className="section_four_home_testimony">
      {featured.map((featuredItem, index) => {
        return (
          <FeaturedRowItem
            key={featuredItem.id}
            title={featuredItem.title}
            customer={featuredItem.customer}
            icon={featuredItem.icon}
          />
        );
      })}
    </div>
  );
}
