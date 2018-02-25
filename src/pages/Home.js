import React from 'react';

// Import Components
import Contact from '../components/Contact';
import HiBanner from '../components/HiBanner';
import NavBar from '../components/NavBar';
import NotDone from '../components/NotDone';

export default function Home() {
  return (
    <div className="home-page">
      {/*<div id="top" />*/}
      {/*<NavBar />*/}
      <HiBanner />
      <NotDone />
      <Contact />
      {/*<div id="bottom" />*/}
    </div>
  );
}
