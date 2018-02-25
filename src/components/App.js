import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import pages
import Home from '../pages/Home';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Home} />
      <Route exact path="/experience" component={Home} />
      <Route exact path="/education" component={Home} />
      <Route exact path="/skills" component={Home} />
      <Route exact path="/interests" component={Home} />
      <Route exact path="/contact" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
  );
}
