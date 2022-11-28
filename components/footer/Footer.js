import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="newstext">
          <h4>JOIN OUR NEWSLETTER FOR ₦5,000 OFF</h4>
          <p>
            We'll email you a voucher worth ₦5,000 off your first order over
            ₦100,000. By subscribing you agree to our Terms & Conditions and
            Privacy & Cookies Policy
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Your email address" required />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <footer>
        <div className="footer_border">
          <div className="footer_details">
            <div className="footer_blogs">
              <Link href="/about">
                <h3>About us</h3>
              </Link>
              <ul>
                <li>About Precise</li>
                <li>Board of directors</li>
                <li>TV Advert</li>
              </ul>
            </div>
            <div className="footer_blogs">
              <Link href="/contact">
                <h3>Contact Us</h3>
              </Link>
              <ul>
                <li>Help & FQAs</li>
                <li>Voucher</li>
              </ul>
            </div>
            <div className="footer_blogs">
              <Link href="/shop">
                <h3>Shop</h3>
              </Link>
              <ul>
                <li>Visit our Showroom</li>
                <li>Digital Showroom Appointment </li>
              </ul>
            </div>
          </div>
          <img
            src="https://www.preciselighting.ng/images/PL-Montserrat-Logo-I.png"
            alt=""
            className="footer_img"
          />
        </div>

        <h5> ©2022 MARTINS ALEXANDER - PRECISE-LIGHTING CLONE</h5>
      </footer>
    </>
  );
}
