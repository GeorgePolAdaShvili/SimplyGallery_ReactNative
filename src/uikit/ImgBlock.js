import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Arrow } from './Arrow'
import { _w, _h, _Color } from '../../constants'

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  fullHeight: {
    height: _h
  },
  avatarImg: {
    width: 55,
    height: 55,
    marginTop: 20,
    borderRadius: 50
  },
  photoIcon: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  arrowBox: {
    flex: 1,
    width: _w,
    zIndex: 9,
    marginTop: _w / 2,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between'
  },
  full: {
    width: _w / 1.5,
    height: _h / 1.5,
    borderWidth: 5,
    borderRadius: 25,
    alignSelf: 'center',
    borderColor: 'white'
  }
})
const leftArrow = {
  size: 25,
  color: _Color.accent,
  name: 'arrow-circle-left',
  bgColor: 'transparent'
}
const rightArrow = {
  size: 25,
  color: _Color.accent,
  name: 'arrow-circle-right',
  bgColor: 'transparent'
}
const { photoIcon, avatarImg, full, arrowBox, container, fullHeight } = styles

export const ImgBlock = ({ avatarMode, fullMode, urlImg }) => (
  <View style={fullMode ? [container, fullHeight] : container}>
    { fullMode ? <View style={arrowBox}>
      <Arrow params={leftArrow} />
      <Arrow params={rightArrow} />
    </View> : null }
    <Image style={avatarMode ? avatarImg : fullMode ? full : photoIcon} source={urlImg} />
  </View>
)
