import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
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
  }
})
const { photoIcon, avatarImg, container } = styles

export const ImgBlock = ({ avatar, urlImg }) => (
  <View style={container}>
    { <Image style={avatar ? avatarImg : photoIcon} source={urlImg} /> }
  </View>
)

