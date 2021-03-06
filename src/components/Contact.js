import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-item" id="contact-email">
          <div>
            <a href="mailto:hunterleise@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>
          <a href="mailto:hunterleise@gmail.com" className="contact-item-text">
            hunterleise@gmail.com
          </a>
        </div>
        <div className="contact-item" id="contact-phone">
          <div>
            <i className="fa fa-phone" aria-hidden="true" />
          </div>
          <span className="contact-item-text">303-547-0891</span>
        </div>
        <div className="contact-item" id="contact-linkedin">
          <div>
            <a href="https://www.linkedin.com/in/hleise/" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
          </div>
          <a href="https://www.linkedin.com/in/hleise/" target="_blank" className="contact-item-text">
            linkedin.com/in/hleise/
          </a>
        </div>
        <div className="contact-item" id="contact-github">
          <div>
            <a href="https://github.com/hleise" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </div>
          <a href="https://github.com/hleise" target="_blank" className="contact-item-text">github.com/hleise</a>
        </div>
      </div>
    </div>
  );
}
