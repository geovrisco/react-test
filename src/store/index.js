import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
    FavouriteReducer,
    HeroesReducer,
} from './reducers/index'

const reducers = combineReducers({
    FavouriteReducer,
    HeroesReducer
})




const store = createStore(reducers,applyMiddleware(thunk))


export default store