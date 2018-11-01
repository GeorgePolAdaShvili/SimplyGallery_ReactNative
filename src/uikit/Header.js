import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  textStyle: {
    fontSize: 22,
    marginTop: '10%',
    color: '#ffab00',
    fontWeight: '900',
    fontFamily: 'Georgia'
  }
})
const { container, textStyle } = styles

export const Header = ({ title }) => (
  <View style={container}>
    <Text style={textStyle}>{ title }</Text>
  </View>
)

