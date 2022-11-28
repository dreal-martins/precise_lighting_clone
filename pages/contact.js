import { FiMapPin, FiClock } from 'react-icons/fi';
import { BiEnvelope } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <section className="section_one_contact">
        <div className="section_one_contact_img">
          <marquee loop="-1" srollamount="30" width="100%">
            <h2>CONTACT US</h2>
          </marquee>
        </div>
      </section>
      <section className="section_two_contact">
        <div className="section_two_contact_details">
          <h2>Visit one of our agency locations or contact us today.</h2>
          <h3>Head Office</h3>
          <h5>
            <FiMapPin /> 15A Emma Abimbola Cole, Off Fola Osibo Rd, Street,
            Lagos
          </h5>
          <h5>
            <BiEnvelope /> contact@example.com
          </h5>
          <h5>
            <BsTelephone /> 09037944292
          </h5>
          <h5>
            <FiClock /> Monday to Saturday: 9.00am to 16.00pm
          </h5>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6195045442278!2d3.477906614000308!3d6.442879025884667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44a0ac05d8b%3A0x7cf3414037018cb!2sPrecise%20Lighting%20Limited!5e0!3m2!1sen!2sng!4v1669390589139!5m2!1sen!2sng"
          width="400"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="section_three_contact">
        <div className="form-details">
          <form>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your E-mail" />
            <input type="text" placeholder="Your Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
