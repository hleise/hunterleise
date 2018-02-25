import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { elastic as Menu } from 'react-burger-menu';

export default function NavBar() {
  return (
    <Menu
      customBurgerIcon={<i className="fa fa-bars" aria-hidden="true"
                           style={{ fontSize: '3em' }}/>}
      customCrossIcon={<i className="fa fa-close" aria-hidden="true"
                          style={{ fontSize: '3em' }}/>}
      isOpen={false}
    >
      <HashLink smooth to="/#top" className="menu-item">
        <i className="fa fa-home" aria-hidden="true"/>
        <span className="menu-item-text">Home</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-info-circle" aria-hidden="true"/>
        <span className="menu-item-text">About</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-briefcase" aria-hidden="true"/>
        <span className="menu-item-text">Experience</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-graduation-cap" aria-hidden="true"/>
        <span className="menu-item-text">Education</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-star" aria-hidden="true"/>
        <span className="menu-item-text">Skills</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-dribbble" aria-hidden="true"/>
        <span className="menu-item-text">Interests</span>
      </HashLink>
      <HashLink smooth to="/#bottom" className="menu-item">
        <i className="fa fa-address-book" aria-hidden="true"/>
        <span className="menu-item-text">Contact</span>
      </HashLink>
    </Menu>
  );
}
