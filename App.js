import React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import RootStack from './src/screen/first'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

store.subscribe(() => { console.log('---Subscribe--new Store-', store.getState()) })
