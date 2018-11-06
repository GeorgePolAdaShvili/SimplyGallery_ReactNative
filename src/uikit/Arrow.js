import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Arrow = ({ event, params, style }) => {
  const { name, color, size, bgColor } = params
  return <Icon.Button name={name} color={color} style={style} backgroundColor={bgColor} size={size} onPress={event} />
}
