import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Arrow } from './Arrow'
import { _Color, _w } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    minHeight: 75,
    width: _w / 1.2,
    marginHorizontal: 10,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-end'
  },
  textStyle: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: '900',
    color: '#ffab00',
    fontFamily: 'Georgia'
  },
  arrowStyle: {
    flex: 1,
    marginTop: 5,
    alignItems: 'flex-start'
  }
})
const arrow = {
  size: 30,
  color: _Color.accent,
  name: 'arrow-circle-left',
  bgColor: 'transparent'
}
const { container, textStyle, arrowStyle } = styles

export const Header = ({ backMode, title }) => (
  <View style={container}>
    <View style={arrowStyle}>{ backMode ? <Arrow params={arrow} event={backMode} /> : null }</View>
    <Text style={textStyle}>{ title }</Text>
  </View>
)
