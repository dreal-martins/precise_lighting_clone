import Link from 'next/link';
import React from 'react';

const BannerItem = ({ title, desc, link, image }) => {
  return (
    <>
      <div className="section_five_home">
        <img src={image} alt="" />
        <div className="section_five_home_details">
          <h2>{title}</h2>
          <h3>{desc}</h3>
          <Link href="/contact">{link}</Link>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
