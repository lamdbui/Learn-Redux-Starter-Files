import React from 'react';

import { render } from 'react-dom';

// Import CSS
import './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <IndexRoute component={PhotoGrid}></IndexRoute>
    <Route path="/view/:postId"></Route>
    </Route>
  </Router>
);

render(<Main />, document.getElementById('root'));
