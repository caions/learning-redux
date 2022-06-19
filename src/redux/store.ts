import { createStore,combineReducers } from 'redux'

import { carsReducer } from './reducers/carsReducer'

const rootReducer = combineReducers({
  cars: carsReducer
})

export default createStore(rootReducer)