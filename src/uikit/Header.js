import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { _Color } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: '10%',
    justifyContent: 'space-between'
  },
  textStyle: {
    fontSize: 22,
    marginTop: '10%',
    fontWeight: '900',
    color: '#ffab00',
    fontFamily: 'Georgia'
  }
  //right: {
  //  marginLeft: '50%'
  //}
})
const arrow = {
  size: 40,
  color: _Color.accent,
  name: 'arrow-circle-left',
  backgroundColor: 'transparent'
}
const { container, textStyle } = styles
const arrowLeft = event => (<Icon.Button name={arrow.name} color={arrow.color} backgroundColor={arrow.backgroundColor} size={arrow.size} onPress={event} />)

export const Header = ({ backMode, title }) => (
  <View style={container}>
    { backMode ? arrowLeft(backMode) : null }
    <Text style={textStyle}>{ title }</Text>
  </View>
)
