import React from 'react';

export default function NotDone() {
  return (
    <div className="not-done-container">
      <div className="not-done-content">
        <p className="description">I'm still working on the site.</p>
        <p className="description">In the meantime, feel free to download my resume!</p>
        <a href="/hunter_leise_resume.pdf" id="resume-download" download>
          <i className="fa fa-cloud-download" aria-hidden="true" /> Resume
        </a>
      </div>
    </div>
  );
}
