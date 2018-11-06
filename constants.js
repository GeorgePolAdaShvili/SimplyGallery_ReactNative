import { Dimensions } from 'react-native'

// WINDOW WIDTH & HEIGHT
const _window = Dimensions.get('window')
export const _w = _window.width
export const _h = _window.height
//  Routers
export const _Routers = {
  first: {
    Home: 'First_Home',
    DetailsPhoto: 'First_Details_Photo',
    DetailsAvatar: 'First_Details_Avatar'
  }
}
//  Api Call
export const _Urls = {
  getItemList: 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
}
// Colors
export const _Color = {
  accent: '#ffab00'
}
// Actions
export const _RequestAPI = {
  start: 'Request_Repository_Start',
  success: 'Request_Repository_Success',
  error: 'Request_Repository_Error'
}
