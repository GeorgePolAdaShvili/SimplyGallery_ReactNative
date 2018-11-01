import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ImgBlock } from './ImgBlock'
import { PhotoDetails } from './photoDetails'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})
const { container, row } = styles

export const Items = ({ item, onPress, details }) => {
  const { urls, user } = item
  const { profile_image, first_name, last_name } = user

  return (
    <View style={container}>
      <TouchableOpacity style={row} onPress={onPress}>
        <ImgBlock urlImg={{ uri: urls.small }} />
        <PhotoDetails details={details} fullName={`${first_name} ${last_name}`} />
      </TouchableOpacity>
      <ImgBlock avatar urlImg={{ uri: profile_image.medium }} />
    </View>
  )
}

