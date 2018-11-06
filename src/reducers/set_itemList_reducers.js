import { _RequestAPI } from '../../constants'

const initialState = {
  isLoaded: false
}

export const setItemListReducer = (state = initialState, action) => {
  switch (action.type) {
  case _RequestAPI.start:
    console.log('get-itemList---START')
    return Object.assign({}, {
      ...state, isLoaded: true
    })

  case _RequestAPI.success:
    console.log('get-itemList---SUCCESS', action.payload)
    return Object.assign({}, {
      ...state, isLoaded: false, itemList: action.payload
    })

  case _RequestAPI.error:
    console.log('get-itemList---ERROR', action.payload)
    return Object.assign({}, {
      ...state, isLoaded: false, itemList: action.payload
    })
  default :
    return state
  }
}
