import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import DetailsPhoto from './Details'
import { _Routers } from '../../../constants'

const RootStack = createStackNavigator(
  {
    [_Routers.first.Home]: Home,
    [_Routers.first.DetailsPhoto]: DetailsPhoto
  },
  { initialRouteName: _Routers.first.Home, headerMode: 'none' }
)

export default RootStack
