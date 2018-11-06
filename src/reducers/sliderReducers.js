import { _Slider } from '../../constants'

const initialState = {
  isLoaded: false
}

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
  case _Slider.start:
    console.log('--go-Slider--', action.payload)
    return { ...state, viewImg: action.payload }

  default :
    return state
  }
}

