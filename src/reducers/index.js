import { combineReducers } from 'redux'
import { setItemListReducer } from './ItemListReducers'
import { sliderReducer } from './sliderReducers'

export default combineReducers({
  setList: setItemListReducer,
  slider: sliderReducer
})
