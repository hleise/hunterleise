import React from 'react';
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';

export default function NavBar() {
  return (
    <Menu>
      <Link to="/" className="menu-item">
        <i className="fa fa-home" aria-hidden="true" />
        <span className="menu-item-text">Home</span>
      </Link>
      <Link to="/about" className="menu-item">
        <i className="fa fa-info-circle" aria-hidden="true" />
        <span className="menu-item-text">About</span>
      </Link>
      <Link to="/contact" className="menu-item">
        <i className="fa fa-address-book" aria-hidden="true" />
        <span className="menu-item-text">Contact</span>
      </Link>
    </Menu>
  );
}
