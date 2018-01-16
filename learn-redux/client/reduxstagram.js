import React from 'react';

import { render } from 'react-dom';

// Import CSS
import './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// bindings that allow us to use Redux with React
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'something here',
    userLevel: 'editor'
  }
}).install();

// we can add our own custom exceptions
// logException(new Error('download failed!'), {
//   email: 'my@email.com'
// });
//
// console.log(window.user.doesNotExist);
//
// do some Raven logging
// Raven.captureMessage('Something bad happened');
// 
// display dialog to gather user feedback
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
