import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {colors} from './colors'
import {history} from './history'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            colors,
            history
        }),
        applyMiddleware(thunk, logger)
        )
        return store;

}