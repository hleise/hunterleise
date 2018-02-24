import React from 'react';
import NavBar from '../components/NavBar';

export default function Contact() {
  return (
    <div className="contact-page">
      <NavBar />
      <div id="content-container">
        <h2 className="page-header">Contact</h2>
        <div className="contact-item">
          <i className="fa fa-envelope" aria-hidden="true" />
          <a href="mailto:hunterleise@gmail.com" className="contact-item-text">
            hunterleise@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <i className="fa fa-phone" aria-hidden="true" />
          <span className="contact-item-text">303-547-0891</span>
        </div>
        <div className="contact-item">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
          <a href="https://www.linkedin.com/in/hleise/" target="_blank" className="contact-item-text">
            linkedin.com/in/hleise/
          </a>
        </div>
        <div className="contact-item">
          <i className="fa fa-github" aria-hidden="true" />
          <a href="https://github.com/hleise" target="_blank" className="contact-item-text">github.com/hleise</a>
        </div>
      </div>
    </div>
  );
}
