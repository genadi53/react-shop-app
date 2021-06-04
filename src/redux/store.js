import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunc from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunc];

const store = createStore(rootReducer, applyMiddleware(...middlewares)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //applyMiddleware(...middlewares)

const persistor = persistStore(store);

export { store, persistor };