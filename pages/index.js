import Link from 'next/link';
import React from 'react';
import Banner from '../components/featured/Banner';
import FeaturedRow from '../components/featured/FeaturedRow';
import Footer from '../components/footer/Footer';
import ShopBotton from '../components/Home/ShopButton';

const HeroImg =
  'https://www.preciselighting.ng/_next/image?url=%2Fimages%2Fhome-banner19.png&w=1080&q=75';
const SectTwoImg =
  'https://images.pexels.com/photos/149767/pexels-photo-149767.jpeg?auto=compress&cs=tinysrgb&w=600';

export default function Home() {
  return (
    <>
      <section className="section_one_home">
        <img src={HeroImg} alt="" className="section_one_home_img" />
      </section>
      <section className="section_two_home">
        <div className="section_two_details_home">
          <h2>Glow With The Flow</h2>
          <div className="section_two_details_one_home">
            <h3>
              The easiest way to set the mood in your home? It’s all in the
              lighting. We're talking natural shades, calming colours and soft
              sparks that’ll make your space glow.
              <ShopBotton />
            </h3>
          </div>
        </div>
        <div className="section_two_img_home">
          <img src={SectTwoImg} alt="" />
        </div>
      </section>
      <section className="section_three_home">
        <div className="section_three_home_vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oAd2zrm9IKo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="section_four_home">
        <div className="section_four_home_details">
          <h2>What Our Customers Have To Say</h2>
          <p>
            Have you seen our reviews? Our Client have rated us as excellent and
            we pride ourselves on our customer service.
          </p>
        </div>
        <div className="section_four_home_testimony">
          <FeaturedRow />
        </div>
      </section>

      <section className="section_five_home">
        <Banner />
      </section>
    </>
  );
}
