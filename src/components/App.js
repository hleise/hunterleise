import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Skills from '../pages/Skills';
import Interests from '../pages/Interests';
import Contact from '../pages/Contact';
import NotDone from '../pages/NotDone';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={NotDone} />
      <Route exact path="/experience" component={NotDone} />
      <Route exact path="/education" component={NotDone} />
      <Route exact path="/skills" component={NotDone} />
      <Route exact path="/interests" component={NotDone} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={Home} />
    </Switch>
  );
}
