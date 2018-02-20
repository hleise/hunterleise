import React from 'react';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <div id="content-container">
        <p className="introduction">Hi, my name is</p>
        <h1 className="introduction">Hunter Leise</h1>
        <p className="description">I'm a student, developer, and aspiring entrepreneur.</p>
      </div>
    </div>
  );
}