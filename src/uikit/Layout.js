import React from 'react'
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative'
  },
  child: {
    position: 'relative',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(29,26,26, .4)'
  },
  full: {
    width: '100%',
    height: '100%'
  },
  bgColor: {
    width: 'auto'
  }
})
const srcBgColor = '../img/bg-main.jpg'
const { container, child, full, bgColor } = styles

export const Layout = props => (
  <View style={[container, full]}>
    <View>
      <ImageBackground style={bgColor} source={require(srcBgColor)}>
        <ScrollView>
          <View style={child}>{ props.children }</View>
        </ScrollView>
      </ImageBackground>
    </View>
  </View>
)

