import { _RequestAPI } from '../../constants'

const initialState = {
  isLoaded: false
}

export const setItemListReducer = (state = initialState, action) => {
  switch (action.type) {
  case _RequestAPI.start:
    return { ...state, isLoaded: true }

  case _RequestAPI.success:
    return { ...state, isLoaded: false, itemList: action.payload }

  case _RequestAPI.error:
    return { ...state, isLoaded: false, itemList: action.payload }

  default :
    return state
  }
}
