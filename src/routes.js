import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage.js';
import EmailMarketingPage from './components/TutorialDetail/TutorialDetailPage';
import WatchVideoPage from './components/WatchVideo/WatchVideoPageContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="email-marketing" component={EmailMarketingPage}/>
        <Route path="email-marketing/tutorials" component={WatchVideoPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
