import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Layout, Header } from '../../uikit'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative'
  }
})
const { container } = styles

export default class extends Component {
  render() {
    return (
      <View style={container}>
        <Layout>
          <Header title='Details photo' />
          <Text>DETAILS</Text>
        </Layout>
      </View>
    )
  }
}

