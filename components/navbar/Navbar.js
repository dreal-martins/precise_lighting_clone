import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa';
import { Cartcontext } from '../context/Context';

const Navbar = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img
              src="https://www.preciselighting.ng/images/PL-Montserrat-Logo-I.png"
              alt="logo"
              className="logo"
            />
          </Link>
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
          <Link href="/">
            <li onClick={closeMobileMenu}>Home</li>
          </Link>
          <Link href="/shop">
            <li onClick={closeMobileMenu}>Shop</li>
          </Link>
          <Link href="/about">
            <li onClick={closeMobileMenu}>About</li>
          </Link>
          <Link href="/contact">
            <li onClick={closeMobileMenu}>Contact</li>
          </Link>
          <Link href="/cart">
            <li onClick={closeMobileMenu}>
              Cart <FaShoppingBag />
              <div className="cart_length">{state.length}</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
