import React from 'react';
import { FaShippingFast } from 'react-icons/fa';

export default function FeaturedRowItem({ title, customer, icon }) {
  return (
    <div className="section_four_home_testimony_one">
      <div className="section_four_testimony_icon">{icon}</div>
      <div className="section_four_quote">
        <div className="section_four_testimony_one_details">
          <h3>{title}</h3>
          <h5>
            <q>{customer}</q>
          </h5>
        </div>
      </div>
    </div>
  );
}
