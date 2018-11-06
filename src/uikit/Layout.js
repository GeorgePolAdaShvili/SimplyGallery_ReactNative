import React from 'react'
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { _w, _h } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: _w,
    minHeight: _h,
    position: 'relative',
    backgroundColor: 'rgba(29,26,26, .4)'
  },
  child: {
    marginBottom: 25,
    paddingHorizontal: 10,
    position: 'relative'
  },
  bgWidth: {
    width: 'auto'
  }
})
const srcBgColor = '../img/bg-main.jpg'
const { container, child, bgWidth } = styles

export const Layout = props => (
  <View style={container}>
    <ImageBackground style={bgWidth} source={require(srcBgColor)}>
      <ScrollView>
        <View style={child}>{ props.children }</View>
      </ScrollView>
    </ImageBackground>
  </View>
)
