import FeaturedRow from '../components/featured/FeaturedRow';

const About = () => {
  return (
    <>
      <section className="section_one_about">
        <div className="about_head">
          <h1>ABOUT PRECISE LIGHTING</h1>
          <h3>The greatest investment is in your home.</h3>
          <h2>
            Are you curious to create outside_the_box layouts? Continue
            scrolling…….
          </h2>
        </div>
      </section>
      <section className="section_two_about">
        <div className="section_two_about_details">
          <h2>About Precise lighting </h2>
          <p>
            Precise lighting was founded in 2011 with one objective: to be the
            finest destination to shop for the best home decor lighting
            fixtures, furniture, switches, and accessories at budget friendly
            prices. We offer thousands of products including chandeliers,
            ceiling lights, fanlights, office furniture, bedroom furniture,
            switches, and sockets to provide a variety of traditional,
            industrial and contemporary home decor solutions.
          </p>
        </div>
      </section>
      <section className="section_three_about">
        <h2> Precise lighting good features</h2>
        <FeaturedRow />
      </section>
      <section className="section_four_about">
        <div className="section_four_about_details">
          <div className="section_four_about_vision">
            <h3>Vision</h3>
            <p>
              To be the leading lighting company in Nigeria, West Africa and in
              Africa. Giving nothing but the best quality lighting products at a
              very reasonable and competitive price.
            </p>
          </div>
          <div className="section_four_about_mission">
            <h3>Mission</h3>
            <p>
              Set standards for Quality lighting. Being the leading provider of
              innovative lighting designs and lighting fixtures to both
              residential and commercial users. We also aim to unleash the
              talents of our employees delivering superior value to our
              customers, providing innovative solutions for the communities we
              serve.
            </p>
          </div>
        </div>

        <h2>
          “When it comes to the comfort of your home, we believe that comfort
          and simplicity are key, to creating a great product.”
        </h2>
      </section>
    </>
  );
};

export default About;
