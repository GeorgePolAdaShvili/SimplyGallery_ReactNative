import { combineReducers } from 'redux'
import { setItemListReducer } from './set_itemList_reducers'

export default combineReducers({
  setList: setItemListReducer
})
