import React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
//import { composeWithDevTools } from 'remote-redux-devtools'
import rootReducer from './src/reducers'
import RootStack from './src/screen/first'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App

