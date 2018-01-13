import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// NOTE: for every action, it gets dispatched to all reducers available. It
// is up the each reducer to decide if it is important and do something

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
