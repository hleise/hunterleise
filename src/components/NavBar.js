import React from 'react';
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu';

export default function NavBar() {
  return (
    <Menu
      customBurgerIcon={<i className="fa fa-bars" aria-hidden="true" style={{ fontSize: '36px' }} />}
      customCrossIcon={<i className="fa fa-close" aria-hidden="true" style={{ fontSize: '36px' }} />}
    >
      <Link to="/" className="menu-item">
        <i className="fa fa-home" aria-hidden="true" />
        <span className="menu-item-text">Home</span>
      </Link>
      <Link to="/about" className="menu-item">
        <i className="fa fa-info-circle" aria-hidden="true" />
        <span className="menu-item-text">About</span>
      </Link>
      <Link to="/experience" className="menu-item">
        <i className="fa fa-briefcase" aria-hidden="true" />
        <span className="menu-item-text">Experience</span>
      </Link>
      <Link to="/education" className="menu-item">
        <i className="fa fa-graduation-cap" aria-hidden="true" />
        <span className="menu-item-text">Education</span>
      </Link>
      <Link to="/skills" className="menu-item">
        <i className="fa fa-star" aria-hidden="true" />
        <span className="menu-item-text">Skills</span>
      </Link>
      <Link to="/play" className="menu-item">
        <i className="fa fa-dribbble" aria-hidden="true" />
        <span className="menu-item-text">Play</span>
      </Link>
      <Link to="/contact" className="menu-item">
        <i className="fa fa-address-book" aria-hidden="true" />
        <span className="menu-item-text">Contact</span>
      </Link>
    </Menu>
  );
}
