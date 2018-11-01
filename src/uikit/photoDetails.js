import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  photoDetails: {
    flex: 1,
    height: 100,
    marginHorizontal: '3%',
    borderRadius: 10,
    position: 'relative',
    backgroundColor: 'rgba(232,219,255,.3)'
  },
  nameBlock: {
    position: 'relative',
    flexDirection: 'column'
  },
  someText: {
    marginTop: 5,
    marginLeft: 5
  },
  fullNameStyle: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: '500',
    color: '#ffab00',
    fontFamily: 'sans-serif-light'
  }
})
const { photoDetails, fullNameStyle, nameBlock, someText } = styles

export const PhotoDetails = ({ fullName }) => (
  <View style={photoDetails}>
    <View style={nameBlock}>
      <Text style={someText}>Name:</Text>
      <Text style={fullNameStyle} numberOfLines={2} ellipsizeMode={'tail'}>
        { fullName }
      </Text>
    </View>
  </View>
)

