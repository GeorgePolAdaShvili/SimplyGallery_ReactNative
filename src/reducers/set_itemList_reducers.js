import { _RequestAPI } from '../../constants'

const initialState = {
  isLoaded: false
}

export const setItemListReducer = (state = initialState, action) => {
  switch (action.type) {
  case _RequestAPI.start:
    console.log('get-repository---START')
    return Object.assign({}, {
      ...state, isLoaded: true
    })

  case _RequestAPI.success:
    console.log('get-repository---SUCCESS', action.payload)
    return Object.assign({}, {
      ...state, isLoaded: false, itemList: action.payload
    })

  case _RequestAPI:
    console.log('repository---ERROR', action.payload)
    return Object.assign({}, {
      ...state, isLoaded: false, itemList: action.payload
    })
  default :
    return state
  }
}
