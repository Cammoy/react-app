import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

import reducer from './reducers/';


const middleware = applyMiddleware( thunk );
//export default createStore(reducer, middleware);
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);
