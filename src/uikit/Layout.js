import React from 'react'
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { _h } from '../../constants'

const styles = StyleSheet.create({
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
const { child, bgWidth } = styles

export const Layout = props => (
  <View>
    <ImageBackground style={bgWidth} source={require(srcBgColor)}>
      <ScrollView style={{minHeight: _h}}>
        <View style={child}>{ props.children }</View>
      </ScrollView>
    </ImageBackground>
  </View>
)
