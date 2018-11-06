import { createStackNavigator } from 'react-navigation'
import Home from './Home'
import DetailsPhoto from './Details'
import { _Routers } from '../../../constants'

export default createStackNavigator(
  {
    [_Routers.first.Home]: Home,
    [_Routers.first.DetailsPhoto]: DetailsPhoto
  },
  { initialRouteName: _Routers.first.Home, headerMode: 'none' }
)
