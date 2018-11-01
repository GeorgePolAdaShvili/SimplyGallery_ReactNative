import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { _w, _h } from '../../constants'

const styles = StyleSheet.create({
  avatarImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginTop: '25%'
  },
  photoIcon: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  full: {
    width: _w - 100,
    height: _h - 75
  }
})
const { photoIcon, avatarImg, full } = styles

export const ImgBlock = ({ avatarMode, fullMode, urlImg }) => (<Image style={avatarMode ? avatarImg : fullMode ? full : photoIcon} source={urlImg} />)
