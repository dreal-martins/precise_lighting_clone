import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img
            src="https://www.preciselighting.ng/images/PL-Montserrat-Logo-I.png"
            alt="logo"
            className="logo"
          />
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search for products"
            className="search"
          />
          <FaSearch className="handLens" />
        </div>

        <div className="menu_btn" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav_menu active' : 'nav_menu'}>
          <li onClick={closeMobileMenu}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href="/shop">Shop</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link href="/cart">
              Cart <FaShoppingBag />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
