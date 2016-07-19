import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import EmailMarketingPage from './components/TutorialDetail/TutorialDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="tutorial/email-marketing" component={EmailMarketingPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
