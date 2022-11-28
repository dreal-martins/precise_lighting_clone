import React from 'react';
import { showroom } from '../../data';
import BannerItem from './partials/BannerItem';

const Banner = () => {
  return (
    <div className="section_five_home">
      {showroom.map((banneritem, index) => {
        return (
          <BannerItem
            title={banneritem.title}
            desc={banneritem.desc}
            link={banneritem.link}
            image={banneritem.image}
          />
        );
      })}
    </div>
  );
};

export default Banner;
